import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { asset } from '../lib/content'
import Lightbox, { type LightboxImage } from './Lightbox'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'

// Phone screens side by side; clicking one opens them full screen.
function Screens({ images }: { images: LightboxImage[] }) {
  const { t } = useTranslation()
  const [viewer, setViewer] = useState<number | null>(null)

  return (
    <figure className="py-2">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setViewer(index)}
              aria-label={`${t('project.openImage', { number: index + 1 })}. ${image.alt}`}
              className={`block w-full overflow-hidden rounded-md shadow-card ${focusRing}`}
            >
              <img src={asset(image.src)} alt={image.alt} loading="lazy" className="block h-auto w-full" />
            </button>
            <p className="mt-2 text-center text-sm">{image.alt}</p>
          </li>
        ))}
      </ul>
      <Lightbox images={images} index={viewer} onChange={setViewer} />
    </figure>
  )
}

export default Screens
