import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Partners from '../sections/Partners'
import LeadForm from '../sections/LeadForm'
import Seo from '../components/Seo'
import { commercial, seo } from '../content/site'

export default function Commercial() {
  return (
    <>
      <Seo title={seo.commercial.title} description={seo.commercial.description} path="/commercial" />
      <PageHero
        title="Commercial"
        highlight="solar"
        subtitle={commercial.intro}
      />

      {/* Financing highlights — real messaging from the live site */}
      <section className="mx-auto max-w-wrap px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commercial.financing.map((f, i) => (
            <Reveal key={f} delay={(i % 4) * 100}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-accent/25 bg-accent/5 p-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-5 w-5 shrink-0 text-accent"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium text-white/80">{f}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Industries served — real category icons from the live site */}
      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Industries we <span className="text-accent">serve</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
            {commercial.industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 7) * 60} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/95 p-3">
                  <img src={ind.icon} alt={ind.name} loading="lazy" className="max-h-full max-w-full" />
                </div>
                <div className="mt-3 text-xs font-medium text-white/60">{ind.name}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Real completed projects with real photos */}
      <section className="mx-auto max-w-wrap px-5 py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Completed <span className="text-accent">projects</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commercial.projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 100}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-panel">
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{p.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core competencies */}
      <section className="border-y border-white/10 bg-panel py-16">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="flex flex-wrap items-center justify-center gap-3">
            {commercial.competencies.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/70"
              >
                {c}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <Partners />
      <LeadForm />
    </>
  )
}
