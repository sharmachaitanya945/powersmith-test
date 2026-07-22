// Compact hero for interior pages.
// Pass `image` for a photo-backed navy hero; omit it for the light gradient.
// Pass `feature` for the bigger, left-aligned, slide-in treatment — the same
// treatment as the homepage hero (Residential, Commercial) — with the
// highlight stacked on its own line.
export default function PageHero({ title, highlight, subtitle, image, imageAlt, feature = false }) {
  if (image) {
    if (feature) {
      return (
        <section className="relative overflow-hidden pb-24 pt-40 sm:pt-44">
          <img src={image} alt={imageAlt || ''} className="absolute inset-0 h-full w-full object-cover" />
          {/* Left-weighted scrim (matches the homepage hero) so left-aligned
              white text stays legible while the photo keeps its true colour —
              no navy/blue wash. */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/35" />
          <div className="relative z-10 mx-auto w-full max-w-wrap px-5">
            <div className="max-w-3xl text-left [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]">
              <h1
                className="hero-in text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
                style={{ animationDelay: '0.08s' }}
              >
                {title}
                {highlight && (
                  <>
                    <br />
                    <span className="text-accent">{highlight}</span>
                  </>
                )}
              </h1>
              {subtitle && (
                <p
                  className="hero-in mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
                  style={{ animationDelay: '0.22s' }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>
      )
    }

    return (
      <section className="relative overflow-hidden pb-20 pt-40 text-center">
        <img src={image} alt={imageAlt || ''} className="absolute inset-0 h-full w-full object-cover" />
        {/* Neutral scrim (not a navy wash) so the photo shows true colour while the
            heading stays legible — Anthony asked to drop the blue shade on hero images. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/55" />
        <div className="relative z-10 mx-auto max-w-3xl px-5">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {title} {highlight && <span className="text-accent">{highlight}</span>}
          </h1>
          {subtitle && <p className="mx-auto mt-5 max-w-2xl text-white/75">{subtitle}</p>}
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-line/10 bg-gradient-to-b from-sky-soft to-paper pb-16 pt-36 text-center">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {title} {highlight && <span className="text-accent">{highlight}</span>}
        </h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-ink/70">{subtitle}</p>}
      </div>
    </section>
  )
}
