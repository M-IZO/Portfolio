import { useState } from 'react'
import { asset } from '../lib/content'
import Carousel from './Carousel'
import Lightbox, { type LightboxImage } from './Lightbox'

const IMAGE = /^!\[(.*)\]\((.+)\)$/

// A single illustration that opens full screen on click.
function Figure({ image }: { image: LightboxImage }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <figure className="py-2">
      <button type="button" onClick={() => setOpen(0)} className="block w-full focus-visible:outline-2 focus-visible:outline-accent">
        <img src={asset(image.src)} alt={image.alt} loading="lazy" className="mx-auto block h-auto max-w-full rounded-md shadow-card" />
      </button>
      <figcaption className="mt-2 text-center text-sm">{image.alt}</figcaption>
      <Lightbox images={[image]} index={open} onChange={setOpen} />
    </figure>
  )
}

// Renders plain text: blank lines separate blocks, blocks of "- " lines become lists,
// a block starting with "### " is a subheading, and "![caption](path)" lines are illustrations
// (one image per line, path relative to `public/`; several lines in a block make a carousel).
function RichText({ text, className = '' }: { text: string; className?: string }) {
  const blocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean)

  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, index) => {
        const lines = block.split('\n')
        const images = lines.map((line) => line.trim().match(IMAGE))
        if (images.every(Boolean)) {
          const list = images.map((match) => ({ alt: match![1], src: match![2] }))
          return list.length > 1 ? <Carousel key={index} images={list} /> : <Figure key={index} image={list[0]} />
        }
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="pt-2 text-lg font-bold text-text">
              {block.slice(4)}
            </h3>
          )
        }
        if (lines.every((line) => line.trim().startsWith('- '))) {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5 marker:text-accent-hover">
              {lines.map((line, i) => (
                <li key={i}>{line.trim().slice(2)}</li>
              ))}
            </ul>
          )
        }
        return <p key={index}>{block}</p>
      })}
    </div>
  )
}

export default RichText
