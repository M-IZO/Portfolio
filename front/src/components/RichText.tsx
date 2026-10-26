import { useState, type ReactNode } from 'react'
import { asset } from '../lib/content'
import Carousel from './Carousel'
import Lightbox, { type LightboxImage } from './Lightbox'
import Screens from './Screens'

const IMAGE = /^!\[(.*)\]\((.+)\)$/
const SCREEN = /^@\[(.*)\]\((.+)\)$/
const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g

// Turns "[text](https://…)" inside a paragraph into external links.
function inline(text: string) {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(LINK)) {
    parts.push(text.slice(last, match.index))
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noreferrer"
        title={match[2]}
        className="underline underline-offset-2"
      >
        {match[1]}
      </a>,
    )
    last = match.index + match[0].length
  }
  parts.push(text.slice(last))
  return parts
}

// A video with its caption; the optional poster follows the path after a space.
function VideoFigure({ alt, src }: LightboxImage) {
  const [path, poster] = src.split(' ')
  return (
    <figure className="py-2">
      <video controls preload="metadata" poster={poster ? asset(poster) : undefined} className="aspect-video w-full rounded-md bg-black shadow-card">
        <source src={asset(path)} type="video/mp4" />
      </video>
      <figcaption className="mt-2 text-center text-sm">{alt}</figcaption>
    </figure>
  )
}

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
// A lone "![caption](video.mp4 poster.webp)" line is a video.
// "@[caption](path)" lines are phone screens, shown side by side, and "[text](https://…)" is a link.
function RichText({ text, className = '' }: { text: string; className?: string }) {
  const blocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean)

  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, index) => {
        const lines = block.split('\n')
        const images = lines.map((line) => line.trim().match(IMAGE))
        if (images.every(Boolean)) {
          const list = images.map((match) => ({ alt: match![1], src: match![2] }))
          if (list.length === 1 && list[0].src.split(' ')[0].endsWith('.mp4')) return <VideoFigure key={index} {...list[0]} />
          return list.length > 1 ? <Carousel key={index} images={list} /> : <Figure key={index} image={list[0]} />
        }
        const screens = lines.map((line) => line.trim().match(SCREEN))
        if (screens.every(Boolean)) {
          return <Screens key={index} images={screens.map((match) => ({ alt: match![1], src: match![2] }))} />
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
                <li key={i}>{inline(line.trim().slice(2))}</li>
              ))}
            </ul>
          )
        }
        return <p key={index}>{inline(block)}</p>
      })}
    </div>
  )
}

export default RichText
