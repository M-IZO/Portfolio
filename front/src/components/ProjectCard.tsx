import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { getTag } from '../data/tags'
import { useLang } from '../hooks/useLang'
import { asset, localize, projectYear } from '../lib/content'
import type { Project } from '../types/content'

// Shared column layout for the project rows and their header.
export const projectRowColumns = 'grid-cols-[1.5rem_3rem_1fr] md:grid-cols-[1.5rem_3rem_1fr_14rem_3rem]'

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
          {project.ongoing && <span className="ml-2 inline-block rounded-full bg-accent px-2 py-0.5 align-middle text-xs font-bold text-white">{t('project.ongoing')}</span>}
        </span>
        <span className="block truncate text-sm text-muted">{localize(project.tagline, lang)}</span>
      </span>
      <span className="hidden truncate text-sm text-muted md:block">{tagLabels.join(', ')}</span>
      <span className="hidden text-right text-sm text-muted tabular-nums md:block">{projectYear(project)}</span>
    </Link>
  )
}

export default ProjectCard
