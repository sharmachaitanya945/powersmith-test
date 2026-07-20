import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, hero } from '../content/site'
import VeteranBadge from '../components/VeteranBadge'

// Cinematic hero: a left-aligned message that slides in over a crossfading,
// slowly drifting slideshow of PowerSmith homes (sunset → night). Falls back to
// the drone video, then a still image, if `hero.slides` isn't set.
export default function Hero() {
  const slides = hero.slides || []
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-28 sm:pt-32">
      {/* Background */}
      {slides.length ? (
        <div className="absolute inset-0">
          {slides.map((src, i) => (
            <div
              key={src}
              aria-hidden={i !== idx}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
                i === idx ? 'animate-kenburns opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      ) : hero.video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.image}
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.5
          }}
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image})` }}
          role="img"
          aria-label="Black solar panels on a California home"
        />
      )}

      {/* Legibility: dark on the LEFT (behind the text), softer darken up top for
          the navbar. The bright sunset on the right stays vivid. */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/25" />

      {/* Content — left aligned, staggered slide-in */}
      <div className="relative z-10 mx-auto w-full max-w-wrap px-5">
        <div className="max-w-2xl text-left [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
          <div className="hero-in" style={{ animationDelay: '0.05s' }}>
            <VeteranBadge className="!px-5 !py-2.5 !text-sm" />
          </div>
          <h1
            className="hero-in mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            style={{ animationDelay: '0.18s' }}
          >
            Power Your Home.
            <br />
            <span className="text-accent">Own Your Energy.</span>
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: '0.32s' }}
          >
            {company.subline}
          </p>
          <div
            className="hero-in mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.46s' }}
          >
            <Link to="/contact" className="btn-primary min-w-[14rem] px-9 py-4">
              Get a Free Quote
            </Link>
            <Link
              to="/solar-calculator"
              className="min-w-[14rem] rounded-full border border-white/40 bg-white/10 px-9 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Calculate Savings
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicator dots (left-aligned under the content) */}
      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-8 z-10 mx-auto flex max-w-wrap justify-start gap-2.5 px-5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === idx}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? 'w-7 bg-accent' : 'w-2 bg-white/45 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
