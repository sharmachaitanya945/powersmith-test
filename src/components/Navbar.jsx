import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, nav } from '../content/site'
import ThemeToggle from './ThemeToggle'
import logoNavy from '../assets/logo-navy.png'
import logoWhite from '../assets/logo-white.png'

// Internal portals (separate GHL-hosted apps).
const SALES_PORTAL = 'https://solar.powersmithsolar.com/home-7406'
const PORTAL_LOGIN = 'https://app.gohighlevel.com'

// Floating "pill" navbar. Theme-aware (glass-white + navy logo in light, navy
// pill + white logo in dark). Per Anthony: the logo is just the mark + wordmark
// (no flag), and the veteran flag sits on the right beside the theme toggle so
// it doesn't crowd the wordmark.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-1 text-[15px] font-semibold tracking-tight transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-300 ${
      isActive
        ? 'text-accent after:scale-x-100'
        : 'text-heading after:scale-x-0 hover:text-accent hover:after:scale-x-100 dark:text-white dark:hover:text-accent'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-wrap items-center justify-between gap-3 rounded-full border border-black/5 bg-white/85 px-4 py-3 ring-1 ring-black/5 backdrop-blur-xl transition-shadow duration-300 dark:border-white/20 dark:bg-navy/95 sm:px-5 ${
          scrolled
            ? 'shadow-2xl shadow-black/15 dark:shadow-black/50'
            : 'shadow-lg shadow-black/10 dark:shadow-black/40'
        }`}
      >
        {/* LEFT — logo (mark + wordmark, no flag) + nav, shifted left */}
        <div className="flex items-center gap-4 xl:gap-7">
          <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
            <img src={logoNavy} alt="PowerSmith" className="h-7 w-auto dark:hidden sm:h-8" />
            <img src={logoWhite} alt="PowerSmith" className="hidden h-7 w-auto dark:block sm:h-8" />
          </Link>

          <nav className="hidden items-center gap-3 xl:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* RIGHT — actions, then the veteran flag beside the theme toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={PORTAL_LOGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-line/25 px-3 py-2 text-[13px] font-semibold text-heading transition hover:border-accent hover:text-accent dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10 lg:inline-flex"
          >
            Portal Login
          </a>
          <a
            href={SALES_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-line/25 px-3 py-2 text-[13px] font-semibold text-heading transition hover:border-accent hover:text-accent dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10 lg:inline-flex"
          >
            Rep Portal
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
            <span className={`h-0.5 w-6 bg-navy transition dark:bg-white ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-navy transition dark:bg-white ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-navy transition dark:bg-white ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-wrap rounded-3xl border border-black/5 bg-white/95 px-5 pb-6 pt-3 shadow-2xl shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-navy/95 dark:shadow-navy/30 xl:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b border-line/10 py-3 text-base font-medium transition-colors last:border-0 dark:border-white/5 ${
                  isActive
                    ? 'text-accent'
                    : 'text-ink/80 hover:text-accent dark:text-white/80 dark:hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full py-3">
            Get a Quote
          </Link>
          <a
            href={PORTAL_LOGIN}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full border border-line/25 py-3 text-center font-semibold text-heading dark:border-white/25 dark:text-white"
          >
            Portal Login
          </a>
          <a
            href={SALES_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full border border-line/25 py-3 text-center font-semibold text-heading dark:border-white/25 dark:text-white"
          >
            Sales Rep Portal
          </a>
          <a href={company.phoneHref} className="mt-4 block text-center text-sm text-ink/50 dark:text-white/50">
            Or call {company.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
