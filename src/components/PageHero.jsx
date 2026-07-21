// Compact hero for interior pages.
// Pass `image` for a photo-backed navy hero; omit it for the light gradient.
// Pass `feature` for the bigger, slide-in treatment (used on /residential, where
// Anthony wanted "a bigger picture… make slides in") with the highlight stacked
// on its own line.
export default function PageHero({ title, highlight, subtitle, image, imageAlt, feature = false }) {
  if (image) {
    return (
      <section
        className={`relative overflow-hidden text-center ${feature ? 'pb-28 pt-48' : 'pb-20 pt-40'}`}
      >
        <img src={image} alt={imageAlt || ''} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-5">
          <h1
            className={`font-bold leading-[1.08] tracking-tight text-white ${
              feature ? 'hero-in text-4xl sm:text-5xl lg:text-6xl' : 'text-4xl sm:text-5xl'
            }`}
          >
            {title}
            {highlight &&
              (feature ? (
                <>
                  <br />
                  <span className="text-accent">{highlight}</span>
                </>
              ) : (
                <>
                  {' '}
                  <span className="text-accent">{highlight}</span>
                </>
              ))}
          </h1>
          {subtitle && (
            <p
              className={`mx-auto mt-5 max-w-2xl text-white/75 ${feature ? 'hero-in' : ''}`}
              style={feature ? { animationDelay: '0.2s' } : undefined}
            >
              {subtitle}
            </p>
          )}
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
