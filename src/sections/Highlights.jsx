import Reveal from '../components/Reveal'
import { highlights } from '../content/site'

// Simple line icons, Tesla-style (one per benefit, matched by index).
const icons = [
  // Monthly Bill Savings — dollar
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" key="0">
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.9-2.5 2s1.1 1.7 2.5 2 2.5.9 2.5 2-1.1 2-2.5 2c-1.1 0-2.1-.6-2.5-1.5M12 6v1.5M12 16.5V18" strokeLinecap="round" />
  </svg>,
  // Tax Incentives — ribbon / bookmark star
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" key="1">
    <path d="M6 3h12v16l-6-3.5L6 19V3z" strokeLinejoin="round" />
    <path d="M12 7l1 2 2 .2-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 9.2 11 9l1-2z" strokeLinejoin="round" />
  </svg>,
  // Sustainable Energy — leaf
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    key="2"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.52-4.48 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>,
]

export default function Highlights() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-28">
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {highlights.heading}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">{highlights.intro}</p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {highlights.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 120}>
            <div className="flex h-full flex-col rounded-3xl border border-line/10 bg-mist p-9 transition hover:border-accent/40 hover:shadow-lg hover:shadow-navy/5">
              <span className="text-accent">
                <span className="block h-11 w-11">{icons[i]}</span>
              </span>
              <h3 className="mt-7 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
