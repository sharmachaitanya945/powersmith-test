import { Link } from 'react-router-dom'
import { company, usaMap } from '../content/site'
import { cities } from '../content/cities'
import Reveal from '../components/Reveal'

export default function ServiceArea() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Serving San Diego County{' '}
            <span className="text-accent">& beyond</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink/70">
            Headquartered in downtown San Diego and operating across multiple states through our
            network of leading national installers, financiers and manufacturers.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={`/solar/${c.slug}`}
                className="rounded-full border border-line/15 px-4 py-1.5 text-sm text-ink/75 transition hover:border-accent/50 hover:bg-accent/5 hover:text-heading"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/45">{company.address}</p>
        </Reveal>

        <Reveal delay={150}>
          <img
            src={usaMap}
            alt="Map of the United States showing PowerSmith Energy solar service area"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
        </Reveal>
      </div>
    </section>
  )
}
