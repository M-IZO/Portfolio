import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { asset } from '../lib/content'
import { ChevronIcon } from './icons'
import Lightbox, { type LightboxImage } from './Lightbox'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'

// One image at a time with arrows, dots and swipe; clicking opens it full screen.
function Carousel({ images }: { images: LightboxImage[] }) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [viewer, setViewer] = useState<number | null>(null)
  const swipeStart = useRef<number | null>(null)
  // Set when the last pointer gesture was a swipe, so it doesn't also open the viewer.
  const swiped = useRef(false)

  const total = images.length
  const show = (next: number) => setIndex((next + total) % total)
  const image = images[index]

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') show(index - 1)
    if (event.key === 'ArrowRight') show(index + 1)
  }

  const onPointerDown = (event: PointerEvent) => {
    swipeStart.current = event.clientX
  }

  const onPointerUp = (event: PointerEvent) => {
    if (swipeStart.current === null) return
    const delta = event.clientX - swipeStart.current
    swipeStart.current = null
    swiped.current = Math.abs(delta) > 50
    if (swiped.current) show(delta > 0 ? index - 1 : index + 1)
  }

  const onClick = () => {
    if (swiped.current) swiped.current = false
    else setViewer(index)
  }

  const arrow = `absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 ${focusRing}`

  return (
    <figure className="py-2" role="group" aria-roledescription="carousel" onKeyDown={onKeyDown}>
      <div className="relative overflow-hidden rounded-md">
        <button
          type="button"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onClick={onClick}
          aria-label={`${t('project.openImage', { number: index + 1 })}. ${image.alt}`}
          className={`block w-full touch-pan-y ${focusRing}`}
        >
          <img src={asset(image.src)} alt={image.alt} draggable={false} className="aspect-video w-full object-scale-down select-none" />
        </button>
        <button type="button" onClick={() => show(index - 1)} aria-label={t('lightbox.previous')} className={`${arrow} left-3`}>
          <ChevronIcon direction="left" className="size-5" />
        </button>
        <button type="button" onClick={() => show(index + 1)} aria-label={t('lightbox.next')} className={`${arrow} right-3`}>
          <ChevronIcon direction="right" className="size-5" />
        </button>
      </div>

      <figcaption className="mt-2 flex items-center justify-between gap-4 text-sm">
        <span aria-live="polite">{image.alt}</span>
        <span className="shrink-0 tabular-nums">{t('lightbox.counter', { current: index + 1, total })}</span>
      </figcaption>
      <div className="mt-2 flex justify-center gap-1.5">
        {images.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => show(i)}
            aria-label={t('project.openImage', { number: i + 1 })}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-accent-hover' : 'w-1.5 bg-text/25 hover:bg-text/50'} ${focusRing}`}
          />
        ))}
      </div>

      <Lightbox images={images} index={viewer} onChange={setViewer} />
    </figure>
  )
}

export default Carousel
