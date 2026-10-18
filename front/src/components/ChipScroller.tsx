import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronIcon } from './icons'

// Horizontal row that scrolls with arrows, the mouse wheel, or touch.
function ChipScroller({ label, children }: { label: string; children: ReactNode }) {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    setCanLeft(el.scrollLeft > 1)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    update()

    // A vertical wheel scrolls the row sideways instead of the page.
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      if (el.scrollWidth <= el.clientWidth) return
      event.preventDefault()
      el.scrollLeft += event.deltaY
    }

    const observer = new ResizeObserver(update)
    observer.observe(el)
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      observer.disconnect()
      el.removeEventListener('wheel', onWheel)
    }
  }, [update])

  const scrollBy = (direction: 1 | -1) => {
    ref.current?.scrollBy({ left: direction * 160, behavior: 'smooth' })
  }

  const arrow = 'absolute top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-elevated text-text shadow-md shadow-black/30 transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-accent'

  return (
    <div className="relative">
      <div
        ref={ref}
        role="group"
        aria-label={label}
        onScroll={update}
        className="flex gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {canLeft && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-surface to-transparent" />
          <button type="button" onClick={() => scrollBy(-1)} aria-label={t('library.scrollLeft')} className={`${arrow} left-0`}>
            <ChevronIcon direction="left" />
          </button>
        </>
      )}
      {canRight && (
        <>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface to-transparent" />
          <button type="button" onClick={() => scrollBy(1)} aria-label={t('library.scrollRight')} className={`${arrow} right-0`}>
            <ChevronIcon direction="right" />
          </button>
        </>
      )}
    </div>
  )
}

export default ChipScroller
