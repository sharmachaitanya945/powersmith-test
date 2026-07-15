import { Link } from 'react-router-dom'
import { services } from '../content/site'
import Reveal from '../components/Reveal'

// `items` lets each page show its own offering (e.g. residential-only).
export default function Services({
  items = services,
  heading,
  intro = 'Solar, storage, EV charging and backup power — designed and installed as one seamless system.',
}) {
  return (
    <section id="services" className="border-y border-white/10 bg-panel py-24">
      <div className="mx-auto max-w-wrap px-5">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {heading || (
            <>
              Everything your home needs to <span className="text-accent">go electric</span>
            </>
          )}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">{intro}</p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((svc, i) => (
          <Reveal key={svc.title} delay={(i % 3) * 100}>
            <Link
              to={svc.to || '/contact'}
              className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="h-48 overflow-hidden bg-mist">
                <img
                  src={svc.image}
                  alt={svc.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{svc.blurb}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Learn more →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}
