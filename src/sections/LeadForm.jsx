import { useState } from 'react'
import { company } from '../content/site'
import Reveal from '../components/Reveal'

const inputClass =
  'w-full rounded-xl border border-navy/15 bg-mist-50 px-4 py-3 text-ink placeholder-ink/40 outline-none transition focus:border-accent focus:bg-white'

// Two-step lead form. Posts to a GoHighLevel webhook when
// VITE_GHL_WEBHOOK_URL is set; otherwise shows the success state (demo mode).
export default function LeadForm() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    monthlyBill: '',
  })

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const webhook = import.meta.env.VITE_GHL_WEBHOOK_URL
    try {
      if (webhook) {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, source: 'website' }),
        })
      }
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="quote" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-700 to-navy" />
      <div className="relative mx-auto max-w-xl px-5">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            See if your home <span className="text-accent">qualifies</span>
          </h2>
          <p className="mt-4 text-white/60">
            Takes 30 seconds. No obligation — just an honest answer.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-xl shadow-navy/10 sm:p-10">
            {status === 'done' ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-8 w-8 text-accent"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">You&apos;re all set!</h3>
                <p className="mt-2 text-ink/70">
                  A PowerSmith consultant will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink/45">
                  <span className={step === 1 ? 'text-accent' : ''}>1. Contact</span>
                  <span className="h-px flex-1 bg-navy/10" />
                  <span className={step === 2 ? 'text-accent' : ''}>2. Your Home</span>
                </div>

                {step === 1 ? (
                  <div className="space-y-4">
                    <input
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={set('name')}
                      className={inputClass}
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={set('phone')}
                      className={inputClass}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={set('email')}
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (form.name && form.phone && form.email) setStep(2)
                      }}
                      className="btn-primary w-full py-3.5"
                    >
                      Continue →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <input
                      required
                      placeholder="Home address"
                      value={form.address}
                      onChange={set('address')}
                      className={inputClass}
                    />
                    <input
                      required
                      type="number"
                      min="0"
                      placeholder="Average monthly electric bill ($)"
                      value={form.monthlyBill}
                      onChange={set('monthlyBill')}
                      className={inputClass}
                    />
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full py-3.5 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending…' : 'Get My Free Quote'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full text-sm text-ink/45 hover:text-ink/70"
                    >
                      ← Back
                    </button>
                    {status === 'error' && (
                      <p className="text-center text-sm text-red-500">
                        Something went wrong. Please call us at {company.phone}.
                      </p>
                    )}
                  </div>
                )}
              </form>
            )}
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            Prefer to talk?{' '}
            <a href={company.phoneHref} className="text-accent hover:underline">
              Call {company.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
