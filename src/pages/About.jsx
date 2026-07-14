import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import VeteranBadge from '../components/VeteranBadge'
import Stats from '../sections/Stats'
import Partners from '../sections/Partners'
import LeadForm from '../sections/LeadForm'
import Seo from '../components/Seo'
import { company, values, team, seo } from '../content/site'

export default function About() {
  return (
    <>
      <Seo title={seo.about.title} description={seo.about.description} path="/about" />
      <PageHero
        title="Veteran-Owned Solar Experts"
        highlight="in San Diego, CA"
        subtitle="A veteran-owned company helping homeowners and businesses transition to clean, sustainable energy."
      />

      {/* Vision & Mission — real copy from powersmithsolar.com/about */}
      <section className="mx-auto max-w-wrap px-5 py-20">
        <Reveal className="text-center">
          <VeteranBadge />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-sky/20 bg-sky-soft p-10">
              <h2 className="text-2xl font-bold text-accent">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-ink/75">{company.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-sky/20 bg-sky-soft p-10">
              <h2 className="text-2xl font-bold text-accent">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-ink/75">{company.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Our core <span className="text-accent">values</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white p-7 shadow-lg shadow-navy/20">
                  <h3 className="font-semibold text-accent">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership team — real names & photos from the live site */}
      <section className="mx-auto max-w-wrap px-5 py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Meet the <span className="text-accent">team</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 6) * 80} className="text-center">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="mx-auto h-28 w-28 rounded-full border-2 border-accent/40 object-cover"
                />
              ) : (
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent/40 bg-mist text-2xl font-bold text-navy">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
              )}
              <div className="mt-4 font-semibold text-navy">{member.name}</div>
              <div className="text-xs text-ink/50">{member.role}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />
      <Partners />
      <LeadForm />
    </>
  )
}
