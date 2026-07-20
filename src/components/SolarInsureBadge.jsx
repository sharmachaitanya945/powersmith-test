// Solar Insure warranty seal. Solar Insure is a third-party WARRANTY (not an
// installer credential), so this reads "30-Year Warranty" with the current year
// — no "certified installer" / "authorized dealer" wording. Custom PowerSmith
// styling (navy + orange), not a copy of the Solar Insure logo.
export default function SolarInsureBadge({ className = '' }) {
  return (
    <div
      role="img"
      aria-label="Solar Insure 2026 — 30-Year Warranty"
      className={`inline-flex flex-col items-center rounded-2xl border-2 border-accent/80 bg-navy-700 px-5 py-3 text-center shadow-lg shadow-navy/40 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-accent"
        aria-hidden="true"
      >
        <path d="M12 3l7 3v5c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6l7-3z" />
        <path d="M9.2 12.2l1.9 1.9 3.7-3.9" />
      </svg>
      <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">
        Solar Insure
      </span>
      <span className="text-2xl font-extrabold leading-none text-white">2026</span>
      <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70">
        30-Year Warranty
      </span>
    </div>
  )
}
