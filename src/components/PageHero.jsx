// Compact hero for interior pages.
export default function PageHero({ title, highlight, subtitle }) {
  return (
    <section className="border-b border-white/10 bg-panel pb-16 pt-36 text-center">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {title} {highlight && <span className="text-accent">{highlight}</span>}
        </h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-white/60">{subtitle}</p>}
      </div>
    </section>
  )
}
