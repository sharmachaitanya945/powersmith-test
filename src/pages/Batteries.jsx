import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import LeadForm from '../sections/LeadForm'
import Seo from '../components/Seo'
import { batteries, seo } from '../content/site'

export default function Batteries() {
  return (
    <>
      <Seo title={seo.batteries.title} description={seo.batteries.description} path="/batteries" />
      <PageHero
        title="Battery"
        highlight="storage"
        subtitle={batteries.intro}
      />

      {/* Brand strip */}
      <section className="mx-auto max-w-wrap px-5 py-12">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {batteries.brands.map((b) => (
            <span key={b} className="text-lg font-bold text-navy/35 sm:text-xl">
              {b}
            </span>
          ))}
        </Reveal>
      </section>

      {/* Powerwall — real copy from /the-powerwall */}
      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The <span className="text-accent">Powerwall</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/70">{batteries.powerwall.text}</p>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={batteries.powerwall.image}
              alt="Home energy system with Powerwall battery"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </Reveal>
        </div>
      </section>

      {/* Enphase Gold-Certified — real copy from /enphase-battery-gold-certified-installer */}
      <section className="mx-auto grid max-w-wrap items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <img
            src={batteries.enphase.image}
            alt="Enphase battery storage system"
            loading="lazy"
            className="w-full rounded-2xl border border-navy/10 object-cover"
          />
        </Reveal>
        <Reveal delay={150} className="order-1 lg:order-2">
          <span className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            Gold-Certified Installer
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-accent">Enphase</span> battery systems
          </h2>
          <p className="mt-5 leading-relaxed text-ink/75">{batteries.enphase.text}</p>
        </Reveal>
      </section>

      {/* NEM 3.0 — real copy from /nem-3-0-in-california */}
      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {batteries.nem3.title.replace(' in California', '')}{' '}
              <span className="text-accent">in California</span>
            </h2>
            <p className="mt-3 text-white/55">
              Why batteries matter more than ever for new California solar.
            </p>
          </Reveal>
          <div className="mt-10 space-y-4">
            {batteries.nem3.points.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white p-6 shadow-lg shadow-navy/20">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-ink/75 sm:text-base">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Backup options */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What can a battery <span className="text-accent">back up?</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink/75">{batteries.backup.text}</p>
        </Reveal>
      </section>

      <LeadForm />
    </>
  )
}
