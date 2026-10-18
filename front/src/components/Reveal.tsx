import * as m from 'motion/react-m'
import type { ReactNode } from 'react'

// Fades and slides its content in the first time it scrolls into view.
function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </m.div>
  )
}

export default Reveal
