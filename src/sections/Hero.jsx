import { Link } from 'react-router-dom'
import { company, hero } from '../content/site'
import VeteranBadge from '../components/VeteranBadge'

// Tesla-style cinematic hero: full-screen, minimal centered text, two CTAs.
// Plays a background video when hero.video is set, otherwise a full-bleed image.
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {hero.video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.image}
          // Drone clip is fast; play it at half speed for a calmer, cinematic feel.
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

      {/* Keep the drone footage vivid: a light neutral gradient darkens only the
          top (for the navbar) and resolves into navy at the base (stats band),
          plus a soft focus behind the headline so text stays crisp. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-navy" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(62%_52%_at_50%_44%,rgba(3,14,28,0.55),transparent_72%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
        <VeteranBadge />
        <h1 className="mt-7 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Power Your Home.
          <br />
          <span className="text-accent">Own Your Energy.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {company.subline}
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="btn-primary w-full min-w-[15rem] px-10 py-4 sm:w-auto"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/solar-calculator"
            className="w-full min-w-[15rem] rounded-full border border-white/40 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
          >
            Calculate Savings
          </Link>
        </div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/50"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
