import { stats, solarInsureBadge, authorizedDealerBadge } from '../content/site'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'

// Stats and certification badges share one row (6 across on desktop),
// matching the layout on powersmithsolar.com.
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

          <Reveal delay={400} className="flex justify-center">
            <img
              src={solarInsureBadge}
              alt="Solar Insure 2023 Certified Installer"
              loading="lazy"
              className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
          </Reveal>
          <Reveal delay={500} className="flex justify-center">
            <img
              src={authorizedDealerBadge}
              alt="Authorized Dealer"
              loading="lazy"
              className="h-12 w-auto max-w-full object-contain sm:h-14"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
