import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import RichText from '../components/RichText'
import { getProject } from '../data/projects'
import { getTag } from '../data/tags'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLang } from '../hooks/useLang'
import { asset, localize } from '../lib/content'
import type { Project as ProjectData } from '../types/content'
import NotFound from './NotFound'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'

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
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:justify-start">
            <span className="font-bold">{localize(project.role, lang)}</span>
            <span className="text-muted" aria-hidden="true">•</span>
            <span className="text-muted">{project.year}</span>
            <span className="text-muted" aria-hidden="true">•</span>
            <span className="text-muted">{project.tags.map((id) => localize(getTag(id).label, lang)).join(', ')}</span>
          </p>
        </div>
      </header>

      <div className="space-y-10 px-6 md:px-8">
        <Reveal>
          <section aria-labelledby="stack-title">
            <h2 id="stack-title" className="text-2xl font-bold">
              {t('project.stack')}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full bg-elevated px-4 py-1.5 text-sm font-bold shadow-card">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="description-title" className="max-w-3xl">
            <h2 id="description-title" className="text-2xl font-bold">
              {t('project.description')}
            </h2>
            <RichText text={localize(project.description, lang)} className="mt-4 leading-relaxed text-muted" />
          </section>
        </Reveal>

        {gallery.length > 0 && (
          <Reveal>
            <section aria-labelledby="gallery-title">
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
              <Lightbox images={gallery} index={imageIndex} onChange={setImageIndex} />
            </section>
          </Reveal>
        )}

      </div>
    </article>
  )
}

export default Project
