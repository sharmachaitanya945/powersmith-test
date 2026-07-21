import { stats } from '../content/site'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'

// Stats and the two badges share one row (6 across on desktop). Solar Insure is
// the 30-year warranty; Authorized Dealer is a separate credential — they are
// deliberately shown as two distinct seals, side by side.
export default function Stats() {
  return (
    <section id="stats" className="border-y border-white/10 bg-panel">
      <div className="mx-auto max-w-wrap px-5 py-14">
        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <div className="text-4xl font-bold text-accent sm:text-5xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-white/50">
                {s.label}
              </div>
            </Reveal>
          ))}

          {/* Two separate credentials, side by side. They sit on a light panel so
              the navy artwork reads against the navy band. */}
          <Reveal
            delay={400}
            className="col-span-2 flex justify-center sm:col-span-3 lg:col-span-2"
          >
            <div className="flex items-center justify-center gap-5 rounded-2xl bg-white px-6 py-4 shadow-lg shadow-black/25">
              <img
                src="/badges/solar-insure.png"
                alt="Solar Insure — 30-year insurance-backed warranty, 2026"
                loading="lazy"
                className="h-20 w-auto sm:h-24"
              />
              <img
                src="/badges/authorized-dealer.png"
                alt="PowerSmith — Authorized Dealer"
                loading="lazy"
                className="h-20 w-auto sm:h-24"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
