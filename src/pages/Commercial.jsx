import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Partners from '../sections/Partners'
import LeadForm from '../sections/LeadForm'
import Seo from '../components/Seo'
import { commercial, seo, taglines } from '../content/site'

// Modern line icons for "Industries we serve" (replaces the old PNG glyphs).
const industryIcons = {
  warehouse: (
    <>
      <path d="M3 21V9.5a1 1 0 0 1 .62-.92l8-3.2a1 1 0 0 1 .76 0l8 3.2A1 1 0 0 1 21 9.5V21" />
      <path d="M2 21h20" />
      <path d="M8 21v-6h8v6" />
      <path d="M8 12h8" />
    </>
  ),
  multifamily: (
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17" />
      <path d="M15 21V9h3a1 1 0 0 1 1 1v11" />
      <path d="M3 21h18" />
      <path d="M8 7h2M11 7h1M8 11h2M11 11h1M8 15h2M11 15h1" />
    </>
  ),
  storage: (
    <>
      <path d="M21 8.5a1 1 0 0 0-.5-.87l-8-4.5a1 1 0 0 0-1 0l-8 4.5A1 1 0 0 0 3 8.5v7a1 1 0 0 0 .5.87l8 4.5a1 1 0 0 0 1 0l8-4.5a1 1 0 0 0 .5-.87Z" />
      <path d="m3.4 8 8.6 4.9L20.6 8" />
      <path d="M12 21.5V13" />
      <path d="m7.5 5.3 9 5.05" />
    </>
  ),
  auto: (
    <>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  factory: (
    <>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M7 18h1M12 18h1M17 18h1" />
    </>
  ),
  caravan: (
    <>
      <path d="M4 16V8a2 2 0 0 1 2-2h8l4 4v6" />
      <path d="M2 16h3M10 16h4M19 16h3" />
      <circle cx="7.5" cy="16" r="2" />
      <circle cx="17" cy="16" r="2" />
      <rect x="6" y="9" width="4" height="3.5" rx="0.5" />
    </>
  ),
  church: (
    <>
      <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-4 0v4" />
      <path d="M18 22V5l-6-3-6 3v17" />
      <path d="M12 6.5v5" />
      <path d="M10 9h4" />
    </>
  ),
}

export default function Commercial() {
  return (
    <>
      <Seo title={seo.commercial.title} description={seo.commercial.description} path="/commercial" />
      <PageHero
        feature
        title={taglines.commercial.lead}
        highlight={taglines.commercial.accent}
        subtitle={commercial.intro}
        image={commercial.heroImage}
        imageAlt="PowerSmith commercial solar carport installation"
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
                <span className="text-sm font-medium text-ink/80">{f}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why businesses go solar */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Why businesses go <span className="text-accent">solar</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commercial.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-line/10 bg-card p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-heading">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EV charging + energy storage — commercial-specific offerings */}
      <section className="mx-auto max-w-wrap px-5 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {commercial.solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="flex h-full flex-col rounded-3xl border border-line/10 bg-mist p-8">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{s.text}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm leading-relaxed text-ink/75">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Industries served — real category icons from the live site */}
      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Industries we <span className="text-accent">serve</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
            {commercial.industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 7) * 60} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-card text-accent shadow-md shadow-navy/20 transition group-hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-9 w-9"
                    role="img"
                    aria-label={ind.name}
                  >
                    {industryIcons[ind.key]}
                  </svg>
                </div>
                <div className="mt-3 text-xs font-medium text-white/65">{ind.name}</div>
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
              <div className="group overflow-hidden rounded-2xl border border-line/10 bg-card shadow-sm transition hover:shadow-xl hover:shadow-navy/10">
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
                  <p className="mt-1 text-sm text-ink/55">{p.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core competencies — what we bring to a commercial project */}
      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Our core <span className="text-accent">competencies</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commercial.competencies.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-line/10 bg-card p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-heading">{c.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <LeadForm />
    </>
  )
}
