import Reveal from '../components/Reveal'
import VideoEmbed from '../components/VideoEmbed'
import { highlights } from '../content/site'

// Per Anthony (Jul 21): "save your electricity" copy on the left with the video
// on the right, in one frame — "you don't need two." So the benefits and the
// explainer video now share a single section instead of stacking.
const VIDEO_ID = 'igdxnIdQIYs'

// Compact line icons, one per benefit (matched by index).
const icons = [
  // Monthly Bill Savings — dollar
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" key="0">
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.9-2.5 2s1.1 1.7 2.5 2 2.5.9 2.5 2-1.1 2-2.5 2c-1.1 0-2.1-.6-2.5-1.5M12 6v1.5M12 16.5V18" strokeLinecap="round" />
  </svg>,
  // Tax Incentives — ribbon / bookmark star
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" key="1">
    <path d="M6 3h12v16l-6-3.5L6 19V3z" strokeLinejoin="round" />
    <path d="M12 7l1 2 2 .2-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 9.2 11 9l1-2z" strokeLinejoin="round" />
  </svg>,
  // Sustainable Energy — leaf
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" key="2">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.52-4.48 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>,
]

export default function Highlights() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — the savings story */}
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {highlights.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">{highlights.intro}</p>

          <ul className="mt-9 space-y-6">
            {highlights.items.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <span className="block h-5 w-5">{icons[i]}</span>
                </span>
                <div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right — the explainer video */}
        <Reveal delay={150}>
          <VideoEmbed videoId={VIDEO_ID} title="PowerSmith Energy — How solar works" />
          <p className="mt-4 text-center text-sm text-ink/55">
            See how going solar with PowerSmith works — from your first bill to power-on.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
