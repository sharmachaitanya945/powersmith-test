import { stats, solarInsureBadge, authorizedDealerBadge } from '../content/site'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'

export default function Stats() {
  return (
    <section id="stats" className="border-y border-white/10 bg-panel">
      <div className="mx-auto max-w-wrap px-5 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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
        </div>

        {/* Certification badges */}
        <Reveal delay={200} className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <img
            src={solarInsureBadge}
            alt="Solar Insure 2023 Certified Installer"
            loading="lazy"
            className="h-24 w-24 object-contain"
          />
          <img
            src={authorizedDealerBadge}
            alt="Authorized Dealer"
            loading="lazy"
            className="h-16 w-auto object-contain sm:h-20"
          />
        </Reveal>
      </div>
    </section>
  )
}
