import { useState } from 'react'
import Reveal from '../components/Reveal'

// Home-page explainer video (matches the old site). Click-to-play facade so
// the heavy YouTube player only loads when the user actually presses play.
const VIDEO_ID = 'igdxnIdQIYs'

export default function VideoSection() {
  const [play, setPlay] = useState(false)

  return (
    <section className="mx-auto max-w-wrap px-5 py-20">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          See how <span className="text-accent">solar works</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">
          A quick overview of going solar with PowerSmith — from your first bill to power-on.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-10">
        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl border border-line/10 bg-mist shadow-xl shadow-navy/10">
          {play ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="PowerSmith Energy — How solar works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlay(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label="Play video"
            >
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="PowerSmith Energy solar overview video"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/15">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-lg transition group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9 translate-x-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  )
}
