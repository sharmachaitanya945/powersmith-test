import { testimonials, reviews } from '../content/site'
import Reveal from '../components/Reveal'

function Stars({ className = 'h-4 w-4' }) {
  return (
    <div className="flex gap-1 text-accent" aria-label={`${reviews.stars} star rating`}>
      {Array.from({ length: reviews.stars }).map((_, s) => (
        <svg key={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="border-y border-white/10 bg-panel py-24">
      <div className="mx-auto max-w-wrap px-5">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Their words <span className="text-accent">speak better</span>
          </h2>

          {/* Google reviews summary badge */}
          <div className="mt-6 inline-flex flex-col items-center gap-1">
            <span className="text-sm font-bold uppercase tracking-widest text-white/80">
              {reviews.rating}
            </span>
            <Stars className="h-6 w-6" />
            <span className="mt-1 text-sm text-white/50">
              Based on <span className="font-semibold text-white/80">{reviews.count} reviews</span> on{' '}
              <span className="font-semibold text-white/80">{reviews.source}</span>
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-8 text-ink shadow-xl shadow-navy/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-bold text-accent">
                      {t.name.charAt(0)}
                    </span>
                    <div className="font-semibold">{t.name}</div>
                  </div>
                  {/* Google "G" mark */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.6z" />
                    <path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.8H1.8v3C3.7 21.4 7.6 24 12 24z" />
                    <path fill="#FBBC05" d="M5.6 14.6a7.2 7.2 0 0 1 0-4.6v-3H1.8a12 12 0 0 0 0 10.6l3.8-3z" />
                    <path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.7 1.2 15.1 0 12 0 7.6 0 3.7 2.6 1.8 6.4l3.8 3C6.5 6.7 9 4.8 12 4.8z" />
                  </svg>
                </div>
                <Stars className="mt-4 h-4 w-4" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-xs text-ink/45">{t.via}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
