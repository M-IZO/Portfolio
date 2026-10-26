import { useTranslation } from 'react-i18next'
import { getTag } from '../data/tags'
import { useLang } from '../hooks/useLang'
import { formatPeriod, localize } from '../lib/content'
import type { Project } from '../types/content'
import { DocumentIcon, ImagesIcon, PlayIcon, UserIcon, VideoIcon, WrenchIcon } from './icons'

export type ContentsItem = { id: string; label: string; meta: string; kind: 'brief' | 'description' | 'videos' | 'gallery' }

type Props = {
  project: Project
  contents: ContentsItem[]
  activeId: string | null
  onSelect: (id: string) => void
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'

const kindIcons = {
  brief: DocumentIcon,
  description: WrenchIcon,
  videos: VideoIcon,
  gallery: ImagesIcon,
}

// Side panel of the project page: details card and contents list.
function ProjectDetails({ project, contents, activeId, onSelect }: Props) {
  const { t } = useTranslation()
  const lang = useLang()

  const period = formatPeriod(project.date, lang)
  const tagLabels = project.tags.map((id) => localize(getTag(id).label, lang))
  const teamLabel = t('project.team', { count: project.teamSize })
  const team = (
    <span className="inline-flex items-center gap-1" title={teamLabel}>
      <UserIcon className="size-4" />
      <span aria-hidden="true">×{project.teamSize}</span>
      <span className="sr-only">{teamLabel}</span>
    </span>
  )
  const stackPills = (pillClass: string) => (
    <ul className="flex flex-wrap gap-2">
      {project.stack.map((item) => (
        <li key={item} className={`rounded-full px-3 py-1.5 text-sm ${pillClass}`}>
          {item}
        </li>
      ))}
    </ul>
  )
  const contentsTitle = (className = '') => (
    <h2 id="contents-title" className={`font-bold ${className}`}>
      {t('project.contents')}
    </h2>
  )

  // Contents list, styled like the "Popular" tracks of an artist page.
  const contentsNav = (
      <nav aria-labelledby="contents-title" className="hidden rounded-lg bg-elevated p-4 shadow-card xl:block">
        {contentsTitle('text-xl')}
        <ol className="-mx-2 mt-3">
          {contents.map((item, index) => {
            const Icon = kindIcons[item.kind]
            const active = item.id === activeId
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelect(item.id)}
                  aria-current={active ? 'location' : undefined}
                  className={`group flex w-full items-center gap-3 rounded-md p-2 text-left transition-colors hover:bg-hover ${focusRing}`}
                >
                  <span className="w-5 text-center text-muted tabular-nums">
                    <span className="group-hover:hidden">{index + 1}</span>
                    <PlayIcon className="mx-auto hidden size-3.5 text-text group-hover:block" />
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded bg-surface text-muted">
                    <Icon />
                  </span>
                  <span className={`min-w-0 flex-1 truncate ${active ? 'font-bold text-accent-hover' : ''}`}>{item.label}</span>
                  <span className="text-sm text-muted tabular-nums">{item.meta}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </nav>
  )

  const [startYear, startMonth] = project.date.start.split('-').map(Number)
  const monthShort = new Intl.DateTimeFormat(lang, { month: 'short' }).format(new Date(startYear, startMonth - 1)).replace('.', '')

  // Concert-card style: calendar tile on the left, like the tour dates on Spotify.
  const details = (
    <section aria-label={t('project.details')} className="space-y-4 rounded-lg bg-elevated p-4 shadow-card">
      <div className="flex items-center gap-4">
        <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-md bg-surface">
          <span className="text-sm font-bold text-accent-hover uppercase">{monthShort}</span>
          <span className="text-2xl font-black">{startYear}</span>
        </div>
        <div className="min-w-0">
          <p className="text-xl font-bold">{project.course}</p>
          {project.date.end && <p className="text-sm text-muted first-letter:uppercase">{period}</p>}
          <p className="mt-1 text-sm">{team}</p>
        </div>
      </div>
      <p className="text-sm text-muted">{tagLabels.join(', ')}</p>
      {stackPills('bg-surface')}
    </section>
  )

  return (
    <div className="space-y-2">
      {details}
      {contentsNav}
    </div>
  )
}


export default ProjectDetails
