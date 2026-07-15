import { partners } from '../content/site'
import Reveal from '../components/Reveal'

// TODO: swap text names for real partner logo SVG/PNG files from the client.
export default function Partners() {
  return (
    <section className="border-y border-white/10 bg-panel py-20">
      <div className="mx-auto max-w-wrap px-5">
        <Reveal className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            Trusted national partners
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <span
                key={p}
                className="text-xl font-bold tracking-wide text-white/35 transition hover:text-white/80 sm:text-2xl"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
