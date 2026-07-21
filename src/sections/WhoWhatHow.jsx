import Reveal from '../components/Reveal'
import { whoWhatHow } from '../content/site'

// Line icons matched to Who / What / How by index.
const icons = [
  // Who We Are — veteran shield / star
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" key="0">
    <path d="M12 3l7 3v5c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6l7-3z" />
    <path d="M9.2 12.2l1.9 1.9 3.7-3.9" />
  </svg>,
  // What We Do — solar panel grid
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" key="1">
    <rect x="3" y="4" width="18" height="12" rx="1" />
    <path d="M3 8h18M3 12h18M9 4v12M15 4v12M10 20h4M12 16v4" />
  </svg>,
  // How We Do It — partnership / link
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" key="2">
    <path d="M9 12a3 3 0 0 1 3-3h3a3 3 0 0 1 0 6h-1" />
    <path d="M15 12a3 3 0 0 1-3 3H9a3 3 0 0 1 0-6h1" />
  </svg>,
]

export default function WhoWhatHow() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {whoWhatHow.map((c, i) => (
          <Reveal key={c.title} delay={i * 120}>
            <div className="flex h-full flex-col rounded-3xl border border-line/10 bg-card p-8 shadow-sm transition hover:border-accent/40 hover:shadow-lg hover:shadow-navy/5 sm:p-9">
              {/* Icon and title share one line so the copy gets the box */}
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <span className="block h-7 w-7">{icons[i]}</span>
                </span>
                <h3 className="text-2xl font-bold leading-tight sm:text-[1.65rem]">{c.title}</h3>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
