import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, nav, logo } from '../content/site'
import ThemeToggle from './ThemeToggle'

// Internal portal for PowerSmith sales reps (separate GHL-hosted app).
const SALES_PORTAL = 'https://solar.powersmithsolar.com/home-7406'

// Floating "pill" navbar (Daylight-style): a rounded, centered navy bar that
// hovers over the page. Navy keeps the white PowerSmith logo crisp on the new
// light theme, while the gradient-orange CTA gives it the Daylight pop.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-wrap items-center justify-between gap-4 rounded-full border border-white/20 bg-navy px-4 py-3 ring-1 ring-black/5 transition-shadow duration-300 sm:px-5 ${
          scrolled ? 'shadow-2xl shadow-black/50' : 'shadow-xl shadow-black/40'
        }`}
      >
        {/* Brand guideline: keep clear space around the logo so it can breathe */}
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0 pr-2 sm:pr-4">
          <img src={logo} alt="PowerSmith Energy — Veteran Owned" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="mx-auto hidden items-center gap-4 xl:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-white/65 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={SALES_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-white/30 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 md:inline-flex"
          >
            Sales Rep Portal
          </a>
          <Link to="/contact" className="btn-primary hidden px-5 py-2 text-sm sm:inline-flex">
            Get a Quote
          </Link>

          <ThemeToggle />

          <button
            className="flex flex-col gap-1.5 p-2 xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-wrap rounded-3xl border border-white/10 bg-navy/95 px-5 pb-6 pt-3 shadow-2xl shadow-navy/30 backdrop-blur xl:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-base text-white/80 last:border-0 hover:text-white"
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full py-3"
          >
            Get a Quote
          </Link>
          <a
            href={SALES_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full border border-white/25 py-3 text-center font-semibold text-white"
          >
            Sales Rep Portal
          </a>
          <a href={company.phoneHref} className="mt-4 block text-center text-sm text-white/50">
            Or call {company.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
