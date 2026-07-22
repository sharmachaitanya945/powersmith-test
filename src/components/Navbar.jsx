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
      {/* The floating pill gets its own, wider max-width — it doesn't need to
          match the 76rem body-content column below it, and the bigger portal
          buttons need the room. Capping it at max-w-wrap was the real cause
          of "FAQ" colliding with Portal Login: the row simply had nowhere to
          grow even on a wide screen. */}
      <div
        className={`mx-auto flex max-w-[100rem] items-center gap-3 rounded-full border border-black/5 bg-white/85 px-4 py-3 ring-1 ring-black/5 backdrop-blur-xl transition-shadow duration-300 dark:border-white/20 dark:bg-navy/95 sm:px-5 ${
          scrolled
            ? 'shadow-2xl shadow-black/15 dark:shadow-black/50'
            : 'shadow-lg shadow-black/10 dark:shadow-black/40'
        }`}
      >
        {/* LEFT — logo only, pinned to the edge */}
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <img src={logoNavy} alt="PowerSmith" className="h-7 w-auto dark:hidden sm:h-8" />
          <img src={logoWhite} alt="PowerSmith" className="hidden h-7 w-auto dark:block sm:h-8" />
        </Link>

        {/* CENTER — nav links get the whole middle span (flex-1) and center
            within it with a wide gap, instead of clustering next to the logo
            and leaving the middle of the wide pill empty. */}
        <nav className="hidden flex-1 items-center justify-center gap-7 2xl:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT — actions, pinned to the edge. No "Get a Quote" pill here —
            Portal Login (solid orange, the primary action now) and Rep Portal
            spread out to fill the space. Everything in this row shares the
            SAME breakpoint (2xl) as the nav links and the hamburger below —
            mismatched breakpoints (nav at xl, portals at lg) were letting
            both show together and overlap before the row had room, e.g. "FAQ"
            colliding with the Portal Login pill around 1440px. One shared
            breakpoint means there's no in-between width where that can
            happen again. */}
        <div className="flex shrink-0 items-center gap-4">
          <a
            href={PORTAL_LOGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden whitespace-nowrap px-6 py-3 text-base 2xl:inline-flex"
          >
            Portal Login
          </a>
          <a
            href={SALES_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border-2 border-line/25 px-6 py-3 text-base font-semibold text-heading transition hover:border-accent hover:text-accent dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10 2xl:inline-flex"
          >
            Rep Portal
          </a>

          <ThemeToggle />

          <button
            className="flex flex-col gap-1.5 p-2 2xl:hidden"
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
        <nav className="mx-auto mt-2 max-w-wrap rounded-3xl border border-black/5 bg-white/95 px-5 pb-6 pt-3 shadow-2xl shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-navy/95 dark:shadow-navy/30 2xl:hidden">
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
