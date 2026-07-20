import { partners } from '../content/site'

// "Our Key Partners" — an auto-scrolling marquee of partner logos. Each logo
// sits on a white chip so the (mostly dark-on-transparent) brand logos stay
// legible in both light and dark mode. The list is duplicated once so the
// CSS marquee (translateX -50%) loops seamlessly.
export default function Partners() {
  const row = [...partners, ...partners]
  return (
    <section className="border-y border-line/10 bg-mist-50 py-14">
      <div className="mx-auto max-w-wrap px-5">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink/55">
          Our Key Partners
        </h2>

        <div className="relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <ul className="flex w-max items-center gap-5 animate-marquee">
            {row.map((p, i) => (
              <li
                key={`${p.name}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm ring-1 ring-black/5"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-11 w-auto object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold tracking-wide text-navy/60">{p.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
