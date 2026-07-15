// Custom Solar Insure badge. Replaces the old yellow "2023 Certified Installer"
// image — PowerSmith is an authorized dealer (not an installer), so it reads
// "Authorized Dealer" and carries the current 2026 year with a three-star mark.
export default function SolarInsureBadge({ className = '' }) {
  return (
    <div
      role="img"
      aria-label="Solar Insure 2026 — Authorized Dealer"
      className={`inline-flex flex-col items-center rounded-2xl border-2 border-accent/80 bg-navy-700 px-4 py-2.5 text-center shadow-lg shadow-navy/40 ${className}`}
    >
      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-accent">
        Solar Insure
      </span>
      <span className="my-1 flex gap-1 text-accent" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5">
            <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8L12 2z" />
          </svg>
        ))}
      </span>
      <span className="text-2xl font-extrabold leading-none text-white">2026</span>
      <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70">
        Authorized Dealer
      </span>
    </div>
  )
}
