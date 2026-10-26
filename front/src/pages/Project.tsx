import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import Lightbox from '../components/Lightbox'
import ProjectDetails, { type ContentsItem } from '../components/ProjectDetails'
import RichText from '../components/RichText'
import { getProject } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLang } from '../hooks/useLang'
import { asset, localize } from '../lib/content'
import type { Project as ProjectData } from '../types/content'
import NotFound from './NotFound'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'

// Smooth scroll inside the main panel, instant when the system asks for reduced motion.
function scrollToSection(id: string) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

function Project() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <NotFound />
  }

  // Keyed so the gallery state resets when moving to another project.
  return <ProjectDetail key={project.slug} project={project} />
}

function ProjectDetail({ project }: { project: ProjectData }) {
  const { t } = useTranslation()
  const lang = useLang()
  const [imageIndex, setImageIndex] = useState<number | null>(null)

  const title = localize(project.title, lang)
  useDocumentTitle(title)

  const gallery = project.gallery ?? []
  const videos = project.videos ?? []

  const readingTime = (text: string) => {
    const words = text.replace(/!\[.*\]\(.+\)/g, '').split(/\s+/).filter(Boolean).length
    return t('project.readingTime', { count: Math.max(1, Math.round(words / 200)) })
  }
  const contents: ContentsItem[] = [
    { id: 'brief', kind: 'brief', label: t('project.brief'), meta: readingTime(localize(project.brief, lang)) },
    { id: 'description', kind: 'description', label: t('project.description'), meta: readingTime(localize(project.description, lang)) },
    ...(videos.length > 0
      ? [{ id: 'videos', kind: 'videos' as const, label: t('project.videos'), meta: t('project.videosCount', { count: videos.length }) }]
      : []),
    ...(gallery.length > 0
      ? [{ id: 'gallery', kind: 'gallery' as const, label: t('project.gallery'), meta: t('project.images', { count: gallery.length }) }]
      : []),
  ]
  const contentsKey = contents.map((item) => item.id).join(',')

  // Highlights in the contents the section currently near the top of the screen.
  const [activeSection, setActiveSection] = useState<string | null>(null)
  useEffect(() => {
    const sections = contentsKey.split(',').map((id) => document.getElementById(id)).filter((el) => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [contentsKey])

  return (
    <article className="flex-1 pb-10">
      <header className="flex flex-col items-center gap-6 px-6 pt-12 pb-8 text-center md:flex-row md:px-8 md:pt-16 md:text-left">
        <img
          src={asset(project.cover)}
          alt=""
          className="size-48 shrink-0 rounded-md object-cover shadow-2xl shadow-black/50 md:size-56"
        />
        <div className="min-w-0">
          <h1 className="text-4xl font-black tracking-tight md:text-6xl xl:text-7xl">{title}</h1>
          <p className="mt-3 text-muted">{localize(project.tagline, lang)}</p>
        </div>
      </header>

      <div className="space-y-10 px-6 md:px-8">
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-16">
          <div className="xl:sticky xl:top-6 xl:order-last">
            <ProjectDetails
              project={project}
              contents={contents}
              activeId={activeSection}
              onSelect={scrollToSection}
            />
          </div>

          <div className="min-w-0 space-y-10">
            <section id="brief" aria-labelledby="brief-title" className="scroll-mt-6">
              <h2 id="brief-title" className="text-2xl font-bold">
                {t('project.brief')}
              </h2>
              <RichText text={localize(project.brief, lang)} className="mt-4 leading-relaxed text-muted" />
            </section>

            <section id="description" aria-labelledby="description-title" className="scroll-mt-6">
              <h2 id="description-title" className="text-2xl font-bold">
                {t('project.description')}
              </h2>
              <RichText text={localize(project.description, lang)} className="mt-4 leading-relaxed text-muted" />
            </section>

            {videos.length > 0 && (
              <section id="videos" aria-labelledby="videos-title" className="scroll-mt-6">
                <h2 id="videos-title" className="text-2xl font-bold">
                  {t('project.videos')}
                </h2>
                <ul className="mt-4 grid gap-6">
                  {videos.map((video) => (
                    <li key={video.src}>
                      <figure>
                        <video
                          controls
                          preload="metadata"
                          poster={video.poster ? asset(video.poster) : undefined}
                          className="aspect-video w-full rounded-md bg-black shadow-card"
                        >
                          <source src={asset(video.src)} type="video/mp4" />
                        </video>
                        <figcaption className="mt-2 text-sm text-muted">{localize(video.title, lang)}</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {gallery.length > 0 && (
          <section id="gallery" aria-labelledby="gallery-title" className="scroll-mt-6 border-t border-text/15 pt-10">
            <h2 id="gallery-title" className="text-2xl font-bold">
              {t('project.gallery')}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {gallery.map((image, index) => (
                <li key={image.src}>
                  <button
                    type="button"
                    onClick={() => setImageIndex(index)}
                    aria-label={t('project.openImage', { number: index + 1 })}
                    className={`group block w-full overflow-hidden rounded-md shadow-card ${focusRing}`}
                  >
                    <img
                      src={asset(image.src)}
                      alt={localize(image.alt, lang)}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <Lightbox
              images={gallery.map((image) => ({ src: image.src, alt: localize(image.alt, lang) }))}
              index={imageIndex}
              onChange={setImageIndex}
            />
          </section>
        )}
      </div>
    </article>
  )
}

export default Project
