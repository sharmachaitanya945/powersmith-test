import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { seo, residentialServices, residentialWhy, pub } from '../content/site'
import Services from '../sections/Services'
import Savings from '../sections/Savings'
import HowItWorks from '../sections/HowItWorks'
import Gallery from '../sections/Gallery'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'

export default function Residential() {
  return (
    <>
      <Seo
        title={seo.residential.title}
        description={seo.residential.description}
        path="/residential"
      />

      <PageHero
        title="Residential"
        highlight="solar"
        subtitle="Premium all-black panels, battery storage and EV charging for your home — $0-down options, a 30-year warranty, and installs in under 30 days on average."
        image={pub.heroHome}
        imageAlt="Aerial view of a PowerSmith solar installation on a California home"
      />

      {/* Residential-only offering (no commercial card here) */}
      <Services
        items={residentialServices}
        heading={
          <>
            Everything your <span className="text-accent">home</span> needs
          </>
        }
        intro="Solar, storage, EV charging, backup power and panel upgrades — designed and installed as one seamless system for your home."
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
              <div className="flex h-full flex-col rounded-2xl border border-line/10 bg-mist p-7 transition hover:border-accent/40">
                <h3 className="font-bold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Savings />
      <HowItWorks />
      <Gallery />
      <Faq />
      <LeadForm />
    </>
  )
}
