import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, nav, logo } from '../content/site'

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-night/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-wrap items-center justify-between px-5">
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="PowerSmith Energy — Veteran Owned"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-night transition hover:bg-accent-dim"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-night/95 px-5 pb-6 pt-2 backdrop-blur md:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-white/80 hover:text-white"
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-accent px-5 py-3 text-center font-semibold text-night"
          >
            Get a Quote
          </Link>
          <a href={company.phoneHref} className="mt-4 block text-center text-sm text-white/50">
            Or call {company.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
