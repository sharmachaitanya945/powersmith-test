import Reveal from '../components/Reveal'
import { pub } from '../content/site'

// Tesla "Sleek and Durable"-style: big heading + copy, then a horizontal,
// snap-scrolling gallery of real black-panel installation photos.
const shots = [
  { src: pub.blackPanelHome, alt: 'Black solar panels on a California home' },
  { src: pub.heroHome, alt: 'Sleek black panels against a blue sky' },
  { src: pub.panelInstall, alt: 'Certified crew installing black solar panels' },
  { src: pub.panelSunset, alt: 'Black solar panel array at sunset' },
  { src: pub.teslaBattery, alt: 'Tesla Powerwall battery storage' },
  { src: pub.teslaCharging, alt: 'Home EV charging powered by solar' },
]

export default function Gallery() {
  return (
    <section className="border-y border-white/10 bg-panel py-28">
      <div className="mx-auto max-w-wrap px-5">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Sleek and durable
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
            Premium all-black panels offer a sleek, modern take on traditional solar — installed
            close to your roofline for a clean look. Backed by a 30-year monitoring warranty, they
            are built to power your home for decades to come.
          </p>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-14">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
