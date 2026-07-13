import { Link } from 'react-router-dom'
import { services } from '../content/site'
import Reveal from '../components/Reveal'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-wrap px-5 py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Everything your home needs to <span className="text-accent">go electric</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Solar, storage, EV charging and backup power — designed and installed as one seamless system.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <Reveal key={svc.title} delay={(i % 3) * 100}>
            <Link
              to={svc.to || '/contact'}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-panel transition hover:border-accent/40"
            >
              <div className="h-48 overflow-hidden bg-[#16202a]">
                <img
                  src={svc.image}
                  alt={svc.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{svc.blurb}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Learn more →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
