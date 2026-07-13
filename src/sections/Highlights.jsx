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
  // Sustainable Energy — sun over panel
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" key="2">
    <circle cx="12" cy="8" r="3" />
    <path d="M12 1.5V3M4.8 4.8l1 1M19.2 4.8l-1 1M2 8h1.5M20.5 8H22" strokeLinecap="round" />
    <path d="M5 15h14l1.5 6H3.5L5 15zM9 15l-.7 6M15 15l.7 6M4.2 18h15.6" strokeLinejoin="round" />
  </svg>,
]

export default function Highlights() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-28">
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {highlights.heading}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">{highlights.intro}</p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {highlights.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 120}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-9">
              <span className="text-accent">
                <span className="block h-11 w-11">{icons[i]}</span>
              </span>
              <h3 className="mt-7 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-white/55">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
