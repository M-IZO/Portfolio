import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { featured } from '../data/projects'
import { getTag } from '../data/tags'
import { useLang } from '../hooks/useLang'
import { asset, localize, projectYear } from '../lib/content'
import type { Project } from '../types/content'
import { PinIcon } from './icons'

// Shared column layout for the project rows and their header.
export const projectRowColumns = 'grid-cols-[1.5rem_3rem_1fr_1.25rem] md:grid-cols-[1.5rem_3rem_1fr_14rem_3rem_1.25rem]'

// One project as a list row: number, cover, title and tagline, tags, year.
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation()
  const lang = useLang()
  const tagLabels = project.tags.map((id) => localize(getTag(id).label, lang))

  return (
    <Link
      to={`/${lang}/projects/${project.slug}`}
      className={`group grid w-full items-center gap-4 rounded-md px-3 py-2 transition-colors hover:bg-elevated focus-visible:outline-2 focus-visible:outline-accent ${projectRowColumns}`}
    >
      <span className="text-right text-muted tabular-nums">{index + 1}</span>
      <img src={asset(project.cover)} alt="" loading="lazy" className="size-12 rounded object-cover" />
      <span className="min-w-0">
        <span className="block truncate font-bold">
          {localize(project.title, lang)}
          {project.ongoing && <span className="ml-2 inline-flex items-center gap-1.5 align-middle text-xs font-medium text-accent-hover"><span aria-hidden="true" className="size-1.5 rounded-full bg-accent-hover" />{t('project.ongoing')}</span>}
        </span>
        <span className="block truncate text-sm text-muted">{localize(project.tagline, lang)}</span>
      </span>
      <span className="hidden truncate text-sm text-muted md:block">{tagLabels.join(', ')}</span>
      <span className="hidden text-right text-sm text-muted tabular-nums md:block">{projectYear(project)}</span>
      <span className="flex justify-center text-accent-hover">
        {featured.includes(project) && (
          <span title={t('home.featured')}>
            <PinIcon />
            <span className="sr-only">{t('home.featured')}</span>
          </span>
        )}
      </span>
    </Link>
  )
}

export default ProjectCard
