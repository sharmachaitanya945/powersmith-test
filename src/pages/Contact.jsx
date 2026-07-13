import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import LeadForm from '../sections/LeadForm'
import { company, seo } from '../content/site'

export default function Contact() {
  return (
    <>
      <Seo title={seo.contact.title} description={seo.contact.description} path="/contact" />
      <PageHero
        title="Let's"
        highlight="talk"
        subtitle="Get a free, no-obligation quote — or just ask us anything about going solar."
      />
      <LeadForm />
      <section className="mx-auto max-w-wrap px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-panel p-8 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40">Call</h2>
              <a href={company.phoneHref} className="mt-3 block text-lg font-semibold text-accent">
                {company.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-panel p-8 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40">Email</h2>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 block break-all text-lg font-semibold text-accent"
              >
                {company.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-2xl border border-white/10 bg-panel p-8 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40">Visit</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{company.address}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
