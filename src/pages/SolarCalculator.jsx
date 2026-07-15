import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { company } from '../content/site'

// --- Config (provided by the client via env vars) -------------------------
// VITE_GOOGLE_MAPS_API_KEY  -> Places autocomplete + Static satellite view
// VITE_GHL_SOLARCALC_WEBHOOK_URL (or VITE_GHL_WEBHOOK_URL) -> GoHighLevel inbound webhook
const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const WEBHOOK =
  import.meta.env.VITE_GHL_SOLARCALC_WEBHOOK_URL || import.meta.env.VITE_GHL_WEBHOOK_URL

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

// --- Google Maps (Places) script loader (loads once) ----------------------
let mapsPromise = null
function loadMaps() {
  if (!MAPS_KEY) return Promise.reject(new Error('no-key'))
  if (window.google?.maps?.places) return Promise.resolve()
  if (mapsPromise) return mapsPromise
  mapsPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places`
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('maps-failed'))
    document.head.appendChild(s)
  })
  return mapsPromise
}

const inputClass =
  'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-ink placeholder-ink/40 outline-none transition focus:border-accent'

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
                ? 'border-accent bg-accent/5 text-navy'
                : 'border-navy/15 bg-white text-navy hover:border-accent/40'
            }`}
          >
            <span>{label}</span>
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                selected ? 'border-accent' : 'border-navy/25'
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
        highlight ? 'border-accent/40 bg-accent/5' : 'border-navy/10 bg-mist-50'
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-ink/55">{label}</div>
      <div className={`mt-1 text-2xl font-extrabold ${highlight ? 'text-accent' : 'text-navy'}`}>
        {value}
      </div>
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
  })
  const addrRef = useRef(null)
  const set = (patch) => setForm((f) => ({ ...f, ...patch }))

  // Attach Google Places autocomplete once the user reaches the address step.
  useEffect(() => {
    if (step !== 5 || !addrRef.current) return
    loadMaps()
      .then(() => {
        const ac = new window.google.maps.places.Autocomplete(addrRef.current, {
          types: ['address'],
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'geometry', 'address_components'],
        })
        ac.addListener('place_changed', () => {
          const place = ac.getPlace()
          if (!place?.geometry) return
          const comp = (type) =>
            (place.address_components || []).find((c) => c.types.includes(type))?.long_name || ''
          set({
            address: place.formatted_address || addrRef.current.value,
            city: comp('locality'),
            state: comp('administrative_area_level_1'),
            zip: comp('postal_code'),
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          })
        })
      })
      .catch(() => {})
  }, [step])

  const rate = UTILITIES.find((u) => u.label === form.utility)?.rate || 0.4
  const est = computeEstimate(Number(form.bill) || 0, rate)

  const satelliteUrl =
    MAPS_KEY && form.lat != null
      ? `https://maps.googleapis.com/maps/api/staticmap?center=${form.lat},${form.lng}&zoom=20&size=640x360&scale=2&maptype=satellite&key=${MAPS_KEY}`
      : null

  const canNext = () => {
    switch (step) {
      case 0: return !!form.interest
      case 1: return !!form.existingSolar
      case 2: return !!form.utility
      case 3: return !!form.billIncreased
      case 4: return form.bill > 0
      case 5: return form.address.trim().length > 5
      case 6:
        return form.firstName.trim() && form.lastName.trim() && /.+@.+\..+/.test(form.email)
      default: return true
    }
  }

  const submit = async () => {
    setStatus('sending')
    const payload = {
      source: 'solar-calculator',
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
      firstName: form.firstName,
      lastName: form.lastName,
      fullName: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      estimatedMonthlyKwh: Math.round(est.monthlyKwh),
      estimatedAnnualKwh: Math.round(est.annualKwh),
      recommendedSystemKw: Math.round(est.systemKw),
      estimatedGrossCost: Math.round(est.grossCost),
      estimatedNetCostAfterItc: Math.round(est.netCost),
      estimatedMonthlySavings: Math.round(est.monthlySavings),
    }
    try {
      if (WEBHOOK) {
        await fetch(WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
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
      <section className="border-b border-navy/10 bg-gradient-to-b from-sky-soft to-white pb-14 pt-36 text-center">
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
          <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl shadow-navy/40 sm:p-9">
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
                <div className="mt-8 text-center text-5xl font-extrabold text-navy">
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
                <input
                  ref={addrRef}
                  value={form.address}
                  onChange={(e) => set({ address: e.target.value })}
                  placeholder="Home address"
                  autoComplete="off"
                  className={`mt-6 ${inputClass}`}
                />
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
                <div className="mt-5 overflow-hidden rounded-2xl border border-navy/10 bg-mist">
                  {satelliteUrl ? (
                    <img
                      src={satelliteUrl}
                      alt="Satellite top view of your home"
                      className="h-56 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-40 items-center justify-center px-6 text-center text-sm text-ink/50">
                      {MAPS_KEY
                        ? 'Select your address above to see a satellite view of your roof.'
                        : 'A satellite view of your roof appears here once the Google Maps key is added.'}
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
                  <img
                    src={satelliteUrl}
                    alt="Satellite view of your home"
                    className="mt-6 h-52 w-full rounded-2xl border border-navy/10 object-cover"
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
                  <h3 className="font-semibold text-navy">What happens next</h3>
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
                    className="rounded-full px-5 py-3 text-sm font-semibold text-ink/50 transition hover:text-navy"
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
