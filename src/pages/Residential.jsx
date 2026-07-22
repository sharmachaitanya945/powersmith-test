import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import VideoEmbed from '../components/VideoEmbed'
import {
  seo,
  residentialServices,
  residentialWhy,
  beforeYouGo,
  residentialProjects,
  residentialFamily,
  batteries,
  solarInsure,
  taglines,
  trustVideos,
  pub,
} from '../content/site'
import Services from '../sections/Services'
import Savings from '../sections/Savings'
import HowItWorks from '../sections/HowItWorks'
import Comparison from '../sections/Comparison'
import Gallery from '../sections/Gallery'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'

// Anthony (Jul 21): residential should carry the retired "Power Your Home. Own
// Your Energy." tagline on a bigger slide-in hero, then the roadmap, benefits,
// the NEM 2.0/3.0 explainer and what Solar Insure actually covers. The solar
// journey and solar-vs-grid table moved here off the homepage.
export default function Residential() {
  return (
    <>
      <Seo
        title={seo.residential.title}
        description={seo.residential.description}
        path="/residential"
      />

      <PageHero
        feature
        title={taglines.residential.lead}
        highlight={taglines.residential.accent}
        subtitle="Premium all-black panels, battery storage and EV charging for your home — $0-down options, a 30-year warranty, and power-on in under 30 days on average."
        image={pub.heroHome}
        imageAlt="Aerial view of a PowerSmith solar installation on a California home"
      />

      {/* Real families, real energy independence */}
      <section className="mx-auto max-w-wrap px-5 py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Real families. <span className="text-accent">Real energy independence.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/65">
            Solar isn&apos;t just panels on a roof — it&apos;s a home that runs on its own power,
            morning to night.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {residentialFamily.map((f, i) => (
            <Reveal
              key={f.src}
              delay={(i % 4) * 90}
              className={i === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className={`h-full w-full rounded-2xl border border-line/10 object-cover shadow-sm ${
                  i === 0 ? 'aspect-square sm:aspect-auto sm:h-full' : 'aspect-square'
                }`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Residential-only offering (no commercial card here) */}
      <Services
        items={residentialServices}
        heading={
          <>
            Everything your <span className="text-accent">home</span> needs
          </>
        }
        intro="Solar, storage, EV charging, backup power and panel upgrades — designed and delivered as one seamless system for your home."
      />

      {/* Why homeowners choose us */}
      <section className="mx-auto max-w-wrap px-5 py-24">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Why homeowners choose <span className="text-accent">PowerSmith</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            Veteran-owned, San Diego-based, and backed by the strongest warranties in the industry.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {residentialWhy.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-line/10 bg-mist p-8 transition hover:border-accent/40">
                <h3 className="text-xl font-bold text-heading">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The PowerSmith Difference — trust video (Anthony, Jul 21/22 review) */}
      <section className="border-y border-line/10 bg-mist-50 py-24">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Watch
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The PowerSmith <span className="text-accent">Difference</span>
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              A veteran-owned team, real installs and a process built around you — see what
              working with PowerSmith actually looks like.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <VideoEmbed videoId={trustVideos.difference.id} title={trustVideos.difference.title} />
          </Reveal>
        </div>
      </section>

      <HowItWorks />

      {/* Things you should know before going solar — ported from the live site */}
      <section className="mx-auto max-w-wrap px-5 py-24">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Things you should know <span className="text-accent">before going solar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            The details that actually change your quote — worth understanding before you sign
            anything.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beforeYouGo.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl border border-line/10 bg-card p-8 shadow-sm transition hover:border-accent/40">
                <h3 className="text-xl font-bold text-heading">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What you should know before going solar — NEM 3.0 in California */}
      <section className="border-y border-line/10 bg-mist-50 py-24">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Know before you go solar
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {batteries.nem3.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              California&apos;s billing rules changed. Here is what NEM 3.0 means for a new system —
              and why pairing solar with a battery matters more than it used to.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="space-y-4">
              {batteries.nem3.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-line/10 bg-card p-5"
                >
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
          </Reveal>
        </div>
      </section>

      <Savings />
      <Comparison />

      {/* What is Solar Insure — the warranty explained, not just the badge */}
      <section className="mx-auto max-w-wrap px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What is <span className="text-accent">Solar Insure?</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">{solarInsure.intro}</p>
            <img
              src="/badges/solar-insure.png"
              alt="Solar Insure — 30-year insurance-backed warranty, 2026"
              loading="lazy"
              className="mt-8 h-28 w-auto"
            />
          </Reveal>
          <Reveal delay={150}>
            <ul className="space-y-4">
              {solarInsure.points.map((p) => (
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
                  <span className="leading-relaxed text-ink/75">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Recent residential systems — size + city, so the work is identifiable */}
      <section className="border-y border-line/10 bg-mist-50 py-20">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Recent <span className="text-accent">projects</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink/65">
              A sample of recently completed residential systems across Southern California.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {residentialProjects.map((p, i) => (
              <Reveal key={p.city} delay={(i % 5) * 80}>
                <div className="rounded-2xl border border-line/10 bg-card p-6 text-center shadow-sm">
                  <div className="text-2xl font-extrabold text-accent">{p.size}</div>
                  <div className="mt-1 text-sm font-medium text-heading">{p.city}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Faq />
      <LeadForm />
    </>
  )
}
