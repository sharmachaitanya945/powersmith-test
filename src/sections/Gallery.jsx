import { useRef } from 'react'
import Reveal from '../components/Reveal'

// Real PowerSmith drone photography — six different California properties
// (single-family, pool homes, two-story, multi-home) so the gallery shows range,
// not one house from several angles.
const shots = [
  { src: '/dji/install-1.webp', alt: 'Black-panel solar on a single-family California home' },
  { src: '/dji/install-2.webp', alt: 'Rooftop solar and pool — PowerSmith residential install' },
  { src: '/dji/dji-golf-course.webp', alt: 'Spanish-tile home with rooftop solar beside a California golf course' },
  { src: '/dji/install-4.webp', alt: 'Large solar array on a pool home, aerial view' },
  { src: '/dji/install-5.webp', alt: 'Solar installed across multiple homes in a community' },
  { src: '/dji/install-6.webp', alt: 'Estate-scale solar system on a California property' },
]

export default function Gallery() {
  const scroller = useRef(null)
  const scrollByCards = (dir) => {
    const el = scroller.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="border-y border-white/10 bg-carbon py-28">
      <div className="mx-auto max-w-wrap px-5">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Sleek and durable
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65">
                Premium all-black panels offer a sleek, modern take on traditional solar — set close
                to your roofline for a clean look. Backed by a 30-year monitoring warranty, they are
                built to power your home for decades to come.
              </p>
            </div>
            {/* Prev / next arrows, top-right */}
            <div className="hidden shrink-0 gap-3 sm:flex">
              {[-1, 1].map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => scrollByCards(dir)}
                  aria-label={dir === -1 ? 'Previous photos' : 'Next photos'}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white shadow-lg transition hover:border-accent hover:bg-accent hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path
                      d={dir === -1 ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-14">
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shots.map((shot) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="h-72 w-[22rem] shrink-0 snap-start rounded-2xl object-cover sm:h-96 sm:w-[34rem]"
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
