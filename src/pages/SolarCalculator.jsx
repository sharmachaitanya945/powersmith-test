import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { company } from '../content/site'

// --- Config ----------------------------------------------------------------
// Address autocomplete: Photon (OpenStreetMap) — no API key, no billing.
// Roof satellite view:  Esri World Imagery export — no API key, no billing.
// Leads POST to a GoHighLevel inbound webhook. The live URL is the default so the
// form works the moment it deploys; set VITE_GHL_SOLARCALC_WEBHOOK_URL (or
// VITE_GHL_WEBHOOK_URL) in Vercel to point at a different funnel without a code change.
const WEBHOOK =
  import.meta.env.VITE_GHL_SOLARCALC_WEBHOOK_URL ||
  import.meta.env.VITE_GHL_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/fxuEae04COCflR3L5lfh/webhook-trigger/c06c1c06-974f-496e-ac21-690b46d79218'

// Options + rates come straight from the original Forminator "Solar Calc Form".
const INTERESTS = [
  'Solar',
  'Solar + Battery',
  'Battery Only',
  'EV Charger',
  "Not sure — we'll help you decide",
]
const UTILITIES = [
  { label: 'SDG&E', rate: 0.42 },
  { label: 'SCE', rate: 0.31 },
  { label: 'LADWP', rate: 0.24 },
  { label: 'PG&E', rate: 0.39 },
]
const STEPS = ['Goal', 'Existing system', 'Utility', 'Rates', 'Your bill', 'Address', 'Contact']

const money = (n) => '$' + Math.round(n).toLocaleString()

// Same formulas as the Forminator calculation fields.
function computeEstimate(bill, rate) {
  const monthlyKwh = bill / rate
  const annualKwh = monthlyKwh * 12
  const systemKw = annualKwh / 1450
  const grossCost = systemKw * 1000 * 3
  const netCost = grossCost * 0.7
  const remainingBill = bill * 0.2
  const monthlySavings = bill - remainingBill
  return { monthlyKwh, annualKwh, systemKw, grossCost, netCost, remainingBill, monthlySavings }
}

// Turn Photon GeoJSON features into clean address suggestions.
function toSuggestions(data) {
  return (data?.features || [])
    .map((f) => {
      const p = f.properties || {}
      const line1 = [p.housenumber, p.street || p.name].filter(Boolean).join(' ')
      const city = p.city || p.district || p.town || p.village || p.county || ''
      const label = [line1, city, p.state, p.postcode].filter(Boolean).join(', ')
      const [lng, lat] = f.geometry?.coordinates || []
      return { label, city, state: p.state || '', zip: p.postcode || '', lat, lng }
    })
    .filter((s) => s.label && s.lat != null)
}

// Free Esri World Imagery satellite tile centered on the home (~130 m window).
function satelliteFor(lat, lng) {
  if (lat == null || lng == null) return null
  const d = 0.0006
  const bbox = `${lng - d},${lat - d},${lng + d},${lat + d}`
  return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=${bbox}&bboxSR=4326&imageSR=3857&size=640,640&format=jpg&f=image`
}

const inputClass =
  'w-full rounded-xl border border-line/15 bg-card px-4 py-3 text-ink placeholder-ink/40 outline-none transition focus:border-accent'

function RadioCards({ options, value, onChange, columns = 1 }) {
  return (
    <div className={`grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {options.map((label) => {
        const selected = value === label
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className={`flex items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 text-left font-semibold transition ${
              selected
                ? 'border-accent bg-accent/5 text-heading'
                : 'border-line/15 bg-card text-heading hover:border-accent/40'
            }`}
          >
            <span>{label}</span>
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                selected ? 'border-accent' : 'border-line/25'
              }`}
            >
              {selected && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function StatCard({ label, value, highlight }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        highlight ? 'border-accent/40 bg-accent/5' : 'border-line/10 bg-mist-50'
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-ink/55">{label}</div>
      <div className={`mt-1 text-2xl font-extrabold ${highlight ? 'text-accent' : 'text-heading'}`}>
        {value}
      </div>
    </div>
  )
}

function Satellite({ url, className }) {
  if (!url) return null
  return (
    <div className={`relative ${className || ''}`}>
      <img src={url} alt="Satellite top view of your home" className="h-full w-full object-cover" />
      <span
        className="absolute bottom-1 right-2 text-[10px] text-white/85"
        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.65)' }}
      >
        Imagery © Esri
      </span>
    </div>
  )
}

export default function SolarCalculator() {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [form, setForm] = useState({
    interest: '',
    existingSolar: '',
    utility: '',
    billIncreased: '',
    bill: 150,
    address: '',
    city: '',
    state: '',
    zip: '',
    lat: null,
    lng: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [suggestions, setSuggestions] = useState([])
  const [showSug, setShowSug] = useState(false)
  const set = (patch) => setForm((f) => ({ ...f, ...patch }))

  // Debounced Photon address lookup (biased toward San Diego).
  useEffect(() => {
    if (step !== 5 || !showSug) return
    const query = form.address.trim()
    if (query.length < 3) {
      setSuggestions([])
      return
    }
    const t = setTimeout(() => {
      fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&lang=en&limit=6&lat=32.72&lon=-117.16`
      )
        .then((r) => r.json())
        .then((data) => setSuggestions(toSuggestions(data)))
        .catch(() => setSuggestions([]))
    }, 250)
    return () => clearTimeout(t)
  }, [form.address, showSug, step])

  const selectSuggestion = (s) => {
    set({ address: s.label, city: s.city, state: s.state, zip: s.zip, lat: s.lat, lng: s.lng })
    setShowSug(false)
    setSuggestions([])
  }

  const rate = UTILITIES.find((u) => u.label === form.utility)?.rate || 0.4
  const est = computeEstimate(Number(form.bill) || 0, rate)
  const satelliteUrl = satelliteFor(form.lat, form.lng)

  const canNext = () => {
    switch (step) {
      case 0: return !!form.interest
      case 1: return !!form.existingSolar
      case 2: return !!form.utility
      case 3: return !!form.billIncreased
      case 4: return form.bill > 0
      case 5: return form.address.trim().length > 5
      case 6:
        return (
          form.firstName.trim() &&
          form.lastName.trim() &&
          /.+@.+\..+/.test(form.email) &&
          form.phone.replace(/\D/g, '').length >= 10
        )
      default: return true
    }
  }

  const submit = async () => {
    setStatus('sending')
    const payload = {
      source: 'solar-calculator',
      submittedAt: new Date().toISOString(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      interest: form.interest,
      existingSolar: form.existingSolar,
      utility: form.utility,
      utilityRate: rate,
      billIncreasedLast12mo: form.billIncreased,
      averageMonthlyBill: Number(form.bill),
      address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      latitude: form.lat,
      longitude: form.lng,
      roofSatelliteUrl: satelliteUrl || '',
      firstName: form.firstName,
      lastName: form.lastName,
      fullName: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone,
      estimatedMonthlyKwh: Math.round(est.monthlyKwh),
      estimatedAnnualKwh: Math.round(est.annualKwh),
      recommendedSystemKw: Math.round(est.systemKw),
      estimatedGrossCost: Math.round(est.grossCost),
      estimatedNetCostAfterItc: Math.round(est.netCost),
      estimatedMonthlySavings: Math.round(est.monthlySavings),
    }
    try {
      if (WEBHOOK) {
        // text/plain keeps this a CORS "simple request" (no OPTIONS preflight),
        // so the POST always reaches GoHighLevel — which still parses the JSON
        // body. keepalive lets it finish even if the tab is closed right after.
        await fetch(WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
          body: JSON.stringify(payload),
          keepalive: true,
        })
      }
    } catch {
      /* estimate is client-side; still show it even if the webhook errors */
    }
    setStatus('done')
    setStep(7)
  }

  const next = () => (step === 6 ? submit() : setStep((s) => s + 1))
  const back = () => setStep((s) => Math.max(0, s - 1))

  return (
    <>
      <Seo
        title="Solar Savings Calculator | PowerSmith Energy"
        description="Get a custom San Diego solar estimate in 60 seconds — system size, cost after the 30% federal tax credit, and monthly savings, based on your utility and bill."
        path="/solar-calculator"
      />

      {/* Header */}
      <section className="border-b border-line/10 bg-gradient-to-b from-sky-soft to-paper pb-14 pt-36 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Solar savings <span className="text-accent">calculator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            Answer a few quick questions and see your custom estimate — system size, cost after the
            30% federal tax credit, and monthly savings.
          </p>
        </div>
      </section>

      {/* Wizard */}
      <section className="bg-gradient-to-b from-navy to-navy-700 py-16">
        <div className="mx-auto max-w-2xl px-5">
          <div className="rounded-3xl border border-white/10 bg-card p-6 shadow-2xl shadow-navy/40 sm:p-9">
            {step < 7 && (
              <>
                {/* Progress */}
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-ink/45">
                  <span>
                    Step {step + 1} of {STEPS.length}
                  </span>
                  <span className="text-accent">{STEPS[step]}</span>
                </div>
                <div className="mb-7 h-1.5 w-full overflow-hidden rounded-full bg-mist">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-glow transition-all duration-300"
                    style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
              </>
            )}

            {/* Step 0 — interest */}
            {step === 0 && (
              <>
                <h2 className="text-2xl font-bold">What are you interested in?</h2>
                <p className="mt-1 text-sm text-ink/60">Pick the option that fits best.</p>
                <div className="mt-6">
                  <RadioCards
                    options={INTERESTS}
                    value={form.interest}
                    onChange={(v) => set({ interest: v })}
                  />
                </div>
              </>
            )}

            {/* Step 1 — existing system */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold">Do you already have solar on your home?</h2>
                <div className="mt-6">
                  <RadioCards
                    options={['No', 'Yes']}
                    value={form.existingSolar}
                    onChange={(v) => set({ existingSolar: v })}
                    columns={2}
                  />
                </div>
              </>
            )}

            {/* Step 2 — utility */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold">Who is your utility provider?</h2>
                <p className="mt-1 text-sm text-ink/60">We use this to estimate your usage.</p>
                <div className="mt-6">
                  <RadioCards
                    options={UTILITIES.map((u) => u.label)}
                    value={form.utility}
                    onChange={(v) => set({ utility: v })}
                    columns={2}
                  />
                </div>
              </>
            )}

            {/* Step 3 — rising rates */}
            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold">Electricity rates keep rising in California</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  Utility rates have climbed over the past several years, making monthly bills harder
                  to predict. Solar gives you a more stable, predictable cost. Has your electric bill
                  increased over the last 12 months?
                </p>
                <div className="mt-6">
                  <RadioCards
                    options={['Yes', 'No']}
                    value={form.billIncreased}
                    onChange={(v) => set({ billIncreased: v })}
                    columns={2}
                  />
                </div>
              </>
            )}

            {/* Step 4 — bill slider */}
            {step === 4 && (
              <>
                <h2 className="text-2xl font-bold">What&apos;s your average monthly electric bill?</h2>
                <div className="mt-8 text-center text-5xl font-extrabold text-heading">
                  ${form.bill}
                  <span className="text-lg font-normal text-ink/40"> / mo</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={form.bill}
                  onChange={(e) => set({ bill: Number(e.target.value) })}
                  className="mt-8 w-full"
                  aria-label="Average monthly electric bill"
                />
                <div className="mt-1 flex justify-between text-xs text-ink/40">
                  <span>$10</span>
                  <span>$1,000</span>
                </div>
              </>
            )}

            {/* Step 5 — address + satellite */}
            {step === 5 && (
              <>
                <h2 className="text-2xl font-bold">Where would you like to install solar?</h2>
                <p className="mt-1 text-sm text-ink/60">
                  Start typing and pick your address from the list.
                </p>

                <div className="relative mt-6">
                  <input
                    value={form.address}
                    onChange={(e) => {
                      set({ address: e.target.value, lat: null, lng: null })
                      setShowSug(true)
                    }}
                    onFocus={() => {
                      if (suggestions.length) setShowSug(true)
                    }}
                    onBlur={() => setTimeout(() => setShowSug(false), 150)}
                    placeholder="Start typing your home address…"
                    autoComplete="off"
                    className={inputClass}
                  />
                  {showSug && suggestions.length > 0 && (
                    <ul className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-xl border border-line/15 bg-card py-1 shadow-xl">
                      {suggestions.map((s, i) => (
                        <li key={i}>
                          <button
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault()
                              selectSuggestion(s)
                            }}
                            className="block w-full px-4 py-2.5 text-left text-sm text-ink transition hover:bg-mist"
                          >
                            {s.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <input
                    value={form.city}
                    onChange={(e) => set({ city: e.target.value })}
                    placeholder="City"
                    className={inputClass}
                  />
                  <input
                    value={form.state}
                    onChange={(e) => set({ state: e.target.value })}
                    placeholder="State"
                    className={inputClass}
                  />
                  <input
                    value={form.zip}
                    onChange={(e) => set({ zip: e.target.value })}
                    placeholder="ZIP"
                    className={inputClass}
                  />
                </div>

                {/* Satellite top-view of the selected home */}
                <div className="mt-5 overflow-hidden rounded-2xl border border-line/10 bg-mist">
                  {satelliteUrl ? (
                    <Satellite url={satelliteUrl} className="h-56 w-full" />
                  ) : (
                    <div className="flex h-40 items-center justify-center px-6 text-center text-sm text-ink/50">
                      Pick your address from the list to see a satellite view of your roof.
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Step 6 — contact */}
            {step === 6 && (
              <>
                <h2 className="text-2xl font-bold">Where should we send your estimate?</h2>
                <div className="mt-6 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      value={form.firstName}
                      onChange={(e) => set({ firstName: e.target.value })}
                      placeholder="First name"
                      className={inputClass}
                    />
                    <input
                      value={form.lastName}
                      onChange={(e) => set({ lastName: e.target.value })}
                      placeholder="Last name"
                      className={inputClass}
                    />
                  </div>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set({ email: e.target.value })}
                    placeholder="Email address"
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set({ phone: e.target.value })}
                    placeholder="Phone number"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink/45">
                  By submitting you agree to be contacted by {company.name} about your estimate. No
                  spam — just your results and a follow-up if you want one.
                </p>
              </>
            )}

            {/* Step 7 — results */}
            {step === 7 && (
              <div>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-7 w-7 text-accent"
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold">Your custom solar estimate</h2>
                  <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
                    Based on what you shared. Final pricing varies with roof layout, shading and
                    equipment.
                  </p>
                </div>

                {satelliteUrl && (
                  <Satellite
                    url={satelliteUrl}
                    className="mt-6 h-52 w-full overflow-hidden rounded-2xl border border-line/10"
                  />
                )}

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <StatCard label="Avg monthly bill" value={money(form.bill)} />
                  <StatCard label="Utility" value={form.utility} />
                  <StatCard label="Monthly usage" value={`${Math.round(est.monthlyKwh)} kWh`} />
                  <StatCard label="Annual usage" value={`${Math.round(est.annualKwh)} kWh`} />
                  <StatCard label="Recommended system" value={`${Math.round(est.systemKw)} kW`} />
                  <StatCard label="Est. project cost" value={money(est.grossCost)} />
                  <StatCard label="Net cost after 30% ITC" value={money(est.netCost)} />
                  <StatCard
                    label="Est. monthly savings"
                    value={money(est.monthlySavings)}
                    highlight
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                  <h3 className="font-semibold text-heading">What happens next</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    A PowerSmith energy expert will review your details and follow up with a tailored
                    solar &amp; battery recommendation for your property and goals.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="btn-primary flex-1 py-3.5">
                    Talk to an expert
                  </Link>
                  <a href={company.phoneHref} className="btn-ghost flex-1 py-3.5">
                    Call {company.phone}
                  </a>
                </div>

                <p className="mt-5 text-[11px] leading-relaxed text-ink/45">
                  Disclaimer: this is an initial estimate based on the bill amount and utility you
                  provided. Actual savings, system size and final pricing may vary after a full
                  property review.
                </p>
              </div>
            )}

            {/* Nav buttons */}
            {step < 7 && (
              <div className="mt-8 flex items-center gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    className="rounded-full px-5 py-3 text-sm font-semibold text-ink/50 transition hover:text-heading"
                  >
                    ← Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={next}
                  disabled={!canNext() || status === 'sending'}
                  className="btn-primary ml-auto min-w-[9rem] px-6 py-3 disabled:opacity-40"
                >
                  {step === 6
                    ? status === 'sending'
                      ? 'Calculating…'
                      : 'See my estimate'
                    : 'Continue →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
