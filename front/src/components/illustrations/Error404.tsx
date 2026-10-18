import { useId } from 'react'

// "404" stacked vertically so it can fill a tall, narrow column.
function Error404({ className }: { className?: string }) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 200 560" className={className} role="img" aria-label="404">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: 'var(--color-accent-hover)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--color-accent)' }} />
        </linearGradient>
      </defs>
      <g fontSize="220" fontWeight="900" textAnchor="middle" fontFamily="inherit">
        <text x="100" y="180" fill={`url(#${gradientId})`}>4</text>
        <text x="100" y="365" fill="none" strokeWidth="4" className="stroke-accent">0</text>
        <text x="100" y="550" fill={`url(#${gradientId})`}>4</text>
      </g>
    </svg>
  )
}

export default Error404
