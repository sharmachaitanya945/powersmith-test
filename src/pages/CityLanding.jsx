import { useParams, Navigate, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Seo, { breadcrumb } from '../components/Seo'
import Savings from '../sections/Savings'
import HowItWorks from '../sections/HowItWorks'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'
import { getCity, cities } from '../content/cities'
import { company } from '../content/site'

export default function CityLanding() {
  const { city } = useParams()
  const data = getCity(city)
  if (!data) return <Navigate to="/" replace />

  const path = `/solar/${data.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'Solar panel installation',
        provider: { '@type': 'Organization', name: company.name, telephone: '+1-619-581-1121' },
        areaServed: { '@type': 'City', name: `${data.name}, CA` },
        description: data.intro,
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: `${data.name} Solar`, path },
      ]),
    ],
  }

  return (
    <>
      <Seo
        title={`${data.keyword} | PowerSmith Energy`}
        description={`Veteran-owned ${data.name} solar company. Solar panels, batteries & EV charging with $0-down options and a 30-year warranty. Free ${data.name} solar quote.`}
        path={path}
        jsonLd={jsonLd}
      />

      {/* Keyword-rich H1 targeting "[city] solar" intent */}
      <section className="border-b border-navy/10 bg-gradient-to-b from-sky-soft to-white pb-16 pt-36 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <nav className="mb-5 text-xs text-ink/50">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>{' '}
            / <span className="text-ink/70">{data.name}</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {data.name} <span className="text-accent">Solar Company</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">{data.intro}</p>
          <Link
            to="/contact"
            className="btn-primary mt-8 px-9 py-3.5"
          >
            Get a Free {data.name} Solar Quote
          </Link>
        </div>
      </section>

      {/* Local highlights + utility context */}
      <section className="mx-auto max-w-wrap px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Why {data.name} homeowners choose <span className="text-accent">PowerSmith</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {data.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-ink/75">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-3xl border border-sky/20 bg-sky-soft p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent">
                {data.utility} &amp; local incentives
              </h3>
              <p className="mt-4 leading-relaxed text-ink/75">{data.rate}</p>
              <p className="mt-4 leading-relaxed text-ink/75">
                We handle {data.utility} interconnection, all permits and inspections, and help you
                claim the 30% federal tax credit — start to finish, right here in {data.name}.
              </p>
              <p className="mt-6 text-sm text-ink/50">
                Serving {data.name} from {company.address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Savings />
      <HowItWorks />
      <Faq />
      <LeadForm />

      {/* Internal linking to nearby cities (audit weakness: weak internal links) */}
      <section className="border-t border-white/10 bg-panel py-14">
        <div className="mx-auto max-w-wrap px-5 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">
            We also serve nearby cities
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {cities
              .filter((c) => c.slug !== data.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/solar/${c.slug}`}
                  className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/75 transition hover:border-accent/50 hover:text-white"
                >
                  {c.name} Solar
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
