export default function VeteranBadge({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8L12 2z" />
      </svg>
      Veteran-Owned &amp; Operated
    </span>
  )
}
