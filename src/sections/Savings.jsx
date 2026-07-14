import { useState } from 'react'
import { Link } from 'react-router-dom'
import { savings } from '../content/site'
import Reveal from '../components/Reveal'

// Simple client-side estimate: 25 years of utility bills with ~3% annual
// rate inflation, assuming solar offsets ~60% of that total lifetime spend.
function estimateSavings(monthlyBill) {
  const years = 25
  const inflation = 1.03
  const lifetimeUtilitySpend = monthlyBill * 12 * ((Math.pow(inflation, years) - 1) / (inflation - 1))
  return Math.round((lifetimeUtilitySpend * 0.6) / 500) * 500
}

export default function Savings() {
  const [bill, setBill] = useState(250)
  const estimate = estimateSavings(bill)

  return (
    <section id="savings" className="bg-gradient-to-b from-sky-soft to-white py-24">
      <div className="mx-auto grid max-w-wrap items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {savings.headline}
          </h2>
          <ul className="mt-8 space-y-4">
            {savings.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink/75">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm leading-relaxed sm:text-base">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-3xl border border-white/10 bg-panel p-8 shadow-2xl shadow-navy/20 sm:p-10">
            <h3 className="text-lg font-semibold text-white">Estimate your savings</h3>
            <p className="mt-1 text-sm text-white/55">
              What&apos;s your average monthly electric bill?
            </p>

            <div className="mt-8 text-center text-4xl font-bold text-white">
              ${bill}
              <span className="text-base font-normal text-white/40"> / month</span>
            </div>
            <input
              type="range"
              min="50"
              max="800"
              step="10"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="mt-6 w-full"
              aria-label="Average monthly electric bill"
            />
            <div className="mt-1 flex justify-between text-xs text-white/30">
              <span>$50</span>
              <span>$800</span>
            </div>

            <div className="mt-8 rounded-2xl bg-accent/10 p-6 text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                Estimated 25-year savings
              </div>
              <div className="mt-2 text-4xl font-extrabold text-accent sm:text-5xl">
                ${estimate.toLocaleString()}
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-primary mt-6 w-full py-3.5"
            >
              Get My Exact Number
            </Link>
            <p className="mt-4 text-[11px] leading-relaxed text-white/40">{savings.disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
