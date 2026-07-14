import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Comparison from '../sections/Comparison'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'
import Seo from '../components/Seo'
import { plans, seo } from '../content/site'

export default function Plans() {
  return (
    <>
      <Seo title={seo.plans.title} description={seo.plans.description} path="/plans" />
      <PageHero
        title="Plans &"
        highlight="services"
        subtitle="Lease, loan or purchase — three ways to go solar, each with full service coverage options."
      />

      <section className="mx-auto max-w-wrap px-5 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.featured
                    ? 'border-accent bg-accent/5 shadow-xl shadow-accent/10'
                    : 'border-navy/10 bg-white shadow-sm'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <p className="mt-1 text-sm text-ink/60">{plan.tagline}</p>

                <dl className="mt-6 space-y-2 border-y border-navy/10 py-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/50">Down payment</dt>
                    <dd className="text-right font-medium">{plan.down}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/50">Ownership</dt>
                    <dd className="text-right font-medium">{plan.ownership}</dd>
                  </div>
                </dl>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink/75">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 rounded-full py-3 text-center font-semibold transition ${
                    plan.featured
                      ? 'bg-gradient-to-r from-accent to-accent-glow text-white shadow-lg shadow-accent/20 hover:brightness-105'
                      : 'border border-navy/20 text-navy hover:bg-mist'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-ink/50">
            All plans include OEM warranty for parts. Enhanced service available with the
            Protection Plus add-on.
          </p>
        </Reveal>
      </section>

      <Comparison />
      <Faq />
      <LeadForm />
    </>
  )
}
