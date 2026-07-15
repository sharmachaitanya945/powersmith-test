import { Link } from 'react-router-dom'
import { company, footerLinks, logo } from '../content/site'
import { cities } from '../content/cities'
import VeteranBadge from './VeteranBadge'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon">
      <div className="mx-auto grid max-w-wrap gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <img src={logo} alt="PowerSmith Energy — Veteran Owned" className="h-10 w-auto" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
            Premier solar: complete solutions for panels, EV chargers &amp; batteries. Clean,
            reliable energy — affordably.
          </p>
          <VeteranBadge className="mt-5" />
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Company</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((l) =>
              l.to ? (
                <li key={l.label}>
                  <Link to={l.to} className="text-white/60 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ) : (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Service Areas
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link to={`/solar/${c.slug}`} className="text-white/60 transition hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>{company.address}</li>
            <li>
              <a href={company.phoneHref} className="transition hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="transition hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/30">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
