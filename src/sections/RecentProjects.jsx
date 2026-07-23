import Reveal from '../components/Reveal'
import { residentialProjects } from '../content/site'

// Real completed projects — real photos, real city, real system size. Shared
// by the homepage and the Residential page (Chash, Jul 24) so both carry the
// same proof-of-work gallery instead of two different treatments.
export default function RecentProjects({
  heading = 'Recent',
  highlight = 'projects',
  intro = 'A sample of recently completed residential systems across Southern California.',
}) {
  return (
    <section className="border-y border-white/10 bg-carbon py-24">
      <div className="mx-auto max-w-wrap px-5">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {heading} <span className="text-accent">{highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">{intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {residentialProjects.map((p, i) => (
            <Reveal key={p.city} delay={(i % 3) * 100}>
              <div className="overflow-hidden rounded-xl bg-white p-2 shadow-lg">
                <img
                  src={p.image}
                  alt={`${p.size} solar install — ${p.city}, CA`}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-accent">
                {p.city} <span className="text-white/50">·</span> {p.size}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
