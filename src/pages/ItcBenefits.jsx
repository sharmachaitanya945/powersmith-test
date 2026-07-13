import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import LeadForm from '../sections/LeadForm'
import Seo from '../components/Seo'
import { itc, seo } from '../content/site'

function CreditBlock({ heading, data, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-3xl border border-white/10 bg-panel p-8 sm:p-10">
        <h2 className="text-2xl font-bold">
          {heading} <span className="text-accent">ITC benefits</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {data.credits.map((c) => (
            <div key={c.label} className="min-w-[8rem] flex-1 rounded-2xl bg-accent/10 p-5 text-center">
              <div className="text-3xl font-extrabold text-accent">{c.pct}</div>
              <div className="mt-1 text-xs font-medium text-white/60">{c.label}</div>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-sm font-bold uppercase tracking-widest text-white/40">
          {data.example.title}
        </h3>
        <dl className="mt-4 divide-y divide-white/5 border-y border-white/10 text-sm">
          {data.example.rows.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 py-3">
              <dt className="text-white/50">{label}</dt>
              <dd className="text-right font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  )
}

export default function ItcBenefits() {
  return (
    <>
      <Seo title={seo.itc.title} description={seo.itc.description} path="/itc-benefits" />
      <PageHero
        title="Solar tax"
        highlight="credits"
        subtitle="The federal Investment Tax Credit (ITC) — with stacking bonuses, incentives have covered most of a project's cost."
      />

      <section className="mx-auto max-w-wrap px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <CreditBlock heading="Residential" data={itc.residential} />
          <CreditBlock heading="Commercial" data={itc.commercial} delay={150} />
        </div>
        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-white/40">{itc.disclaimer}</p>
        </Reveal>
      </section>

      {/* RETE partnership process */}
      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-wrap px-5">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              How we help you <span className="text-accent">claim it</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">{itc.partner}</p>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {itc.process.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 100}>
                <div className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 bg-accent/10 font-bold text-accent">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
    </>
  )
}
