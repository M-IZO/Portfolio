import { AnimatePresence } from 'motion/react'
import * as m from 'motion/react-m'
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { asset } from '../lib/content'
import { ChevronIcon, CloseIcon } from './icons'

export type LightboxImage = { src: string; alt: string }

type LightboxProps = {
  images: LightboxImage[]
  index: number | null
  onChange: (index: number | null) => void
}

// Full-screen image viewer: arrows, Escape, swipe, and a counter.
function Lightbox({ images, index, onChange }: LightboxProps) {
  const { t } = useTranslation()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const swipeStart = useRef<number | null>(null)
  // Direction of the last change, so the new image slides in from the right side.
  const [direction, setDirection] = useState<1 | -1>(1)

  const open = index !== null
  const total = images.length

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  if (total === 0) return null

  const show = (next: number) => {
    setDirection(next < (index ?? 0) ? -1 : 1)
    onChange((next + total) % total)
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (index === null) return
    if (event.key === 'ArrowLeft') show(index - 1)
    if (event.key === 'ArrowRight') show(index + 1)
  }

  const onPointerDown = (event: PointerEvent) => {
    swipeStart.current = event.clientX
  }

  const onPointerUp = (event: PointerEvent) => {
    if (index === null || swipeStart.current === null) return
    const delta = event.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(delta) > 50) show(delta > 0 ? index - 1 : index + 1)
  }

  const image = index !== null ? images[index] : null
  const control =
    'flex items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white'

  return (
    <dialog
      ref={dialogRef}
      aria-label={t('lightbox.label')}
      onClose={() => onChange(null)}
      onKeyDown={onKeyDown}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/90 p-0 text-white backdrop:bg-transparent open:flex"
    >
      {image && (
        <m.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden p-4 sm:p-16"
        >
          <p className="absolute top-5 left-5 text-sm text-white/70 tabular-nums" aria-live="polite">
            {t('lightbox.counter', { current: (index ?? 0) + 1, total })}
          </p>
          <button type="button" onClick={() => onChange(null)} aria-label={t('lightbox.close')} className={`${control} absolute top-3 right-3 size-10`}>
            <CloseIcon />
          </button>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <m.img
              key={index}
              custom={direction}
              variants={{
                enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2, ease: 'easeOut' }}
              src={asset(image.src)}
              alt={image.alt}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              draggable={false}
              className="max-h-[80vh] max-w-full touch-pan-y rounded-md object-contain select-none"
            />
          </AnimatePresence>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => show((index ?? 0) - 1)}
                aria-label={t('lightbox.previous')}
                className={`${control} absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 sm:flex`}
              >
                <ChevronIcon direction="left" className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => show((index ?? 0) + 1)}
                aria-label={t('lightbox.next')}
                className={`${control} absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 sm:flex`}
              >
                <ChevronIcon direction="right" className="size-6" />
              </button>
            </>
          )}
        </m.div>
      )}
    </dialog>
  )
}

export default Lightbox
