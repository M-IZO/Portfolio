import { useId } from 'react'

// Fanned project cards with an empty one and a magnifying glass.
function LostCards({ className }: { className?: string }) {
  const coverId = useId()

  return (
    <svg viewBox="0 0 420 320" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={coverId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: 'var(--color-accent-hover)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.35 }} />
        </linearGradient>
      </defs>

      <g transform="rotate(-12 110 170)">
        <rect x="40" y="70" width="140" height="190" rx="12" className="fill-elevated" />
        <rect x="52" y="82" width="116" height="116" rx="6" fill={`url(#${coverId})`} />
        <rect x="52" y="212" width="90" height="10" rx="5" className="fill-muted" opacity="0.6" />
        <rect x="52" y="232" width="60" height="8" rx="4" className="fill-muted" opacity="0.35" />
      </g>

      <g transform="rotate(12 310 170)">
        <rect x="240" y="70" width="140" height="190" rx="12" className="fill-elevated" />
        <rect x="252" y="82" width="116" height="116" rx="6" fill={`url(#${coverId})`} />
        <rect x="252" y="212" width="90" height="10" rx="5" className="fill-muted" opacity="0.6" />
        <rect x="252" y="232" width="60" height="8" rx="4" className="fill-muted" opacity="0.35" />
      </g>

      <rect x="140" y="40" width="140" height="200" rx="12" className="fill-surface stroke-accent" strokeWidth="3" strokeDasharray="10 8" />
      <text x="210" y="165" textAnchor="middle" fontSize="88" fontFamily="inherit" className="fill-accent">?</text>

      <g className="stroke-text" strokeWidth="10" strokeLinecap="round" fill="none">
        <circle cx="300" cy="235" r="38" className="fill-bg" fillOpacity="0.4" />
        <path d="M327 262 L362 297" />
      </g>

      <g className="fill-accent-hover">
        <path d="M70 30 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" />
        <path d="M360 40 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
        <path d="M30 280 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
      </g>
    </svg>
  )
}

export default LostCards
