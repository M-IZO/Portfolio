import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import ChipScroller from '../components/ChipScroller'
import { BriefcaseIcon, CalendarIcon, ClockIcon } from '../components/icons'
import ProjectCard, { projectRowColumns } from '../components/ProjectCard'
import { about } from '../data/about'
import { featured, projects } from '../data/projects'
import { tags } from '../data/tags'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLang } from '../hooks/useLang'
import { SORTS, useProjectFilters, type Sort } from '../hooks/useProjectFilters'
import { asset, formatMonth, localize } from '../lib/content'

// Only offer tags that at least one project uses.
const usedTags = tags.filter((tag) => projects.some((project) => project.tags.includes(tag.id)))

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'

function Home() {
  const { t } = useTranslation()
  const lang = useLang()
  useDocumentTitle(t('nav.home'))

  const availableFrom = formatMonth(about.availability.from, lang)
  const details = [
    { label: t('home.position'), value: localize(about.availability.position, lang), Icon: BriefcaseIcon },
    { label: t('home.duration'), value: localize(about.availability.duration, lang), Icon: ClockIcon },
    { label: t('home.availableFrom'), value: availableFrom, Icon: CalendarIcon },
  ]

  const { query, selectedTags, sort, results, isFiltered, toggleTag, clearTags, setSort, reset } = useProjectFilters(lang)

  const chip = (selected: boolean) =>
    `shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors ${focusRing} ${
      selected ? 'bg-text text-bg' : 'bg-elevated text-text hover:bg-hover'
    }`

  return (
    <div className="flex-1">
      <header className="flex flex-col items-center gap-8 px-6 pt-12 pb-8 text-center md:flex-row md:px-8 md:pt-16 md:text-left">
        <section aria-label={t('home.status')} className="w-full max-w-[22rem] shrink-0 rounded-lg border-2 border-text/15 p-6 text-left">
          <dl className="space-y-5">
            {details.map(({ label, value, Icon }) => (
              <div key={label}>
                <dt className="flex items-center gap-2 text-xs tracking-wider text-muted uppercase">
                  <Icon className="size-4" />
                  {label}
                </dt>
                <dd className="text-2xl font-black tracking-tight first-letter:uppercase">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <div className="min-w-0">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl xl:text-8xl">{about.name}</h1>
          <p className="mt-4 max-w-2xl text-muted">{localize(about.shortBio, lang)}</p>
          <Link
            to={`/${lang}/about`}
            className={`mt-6 inline-flex items-center rounded-full border-2 border-border px-5 py-2 font-bold transition-colors hover:border-text ${focusRing}`}
          >
            {t('home.aboutMe')}
          </Link>
        </div>
      </header>


      <section aria-labelledby="featured-title" className="px-6 pb-10 md:px-8">
        <h2 id="featured-title" className="text-2xl font-bold">
          {t('home.featured')}
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
          {featured.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/${lang}/projects/${project.slug}`}
                className={`group block rounded-lg p-3 transition-colors hover:bg-elevated ${focusRing}`}
              >
                <img src={asset(project.cover)} alt="" className="aspect-square w-full rounded-md object-cover shadow-card" />
                <p className="mt-3 truncate font-bold">{localize(project.title, lang)}</p>
                <p className="line-clamp-2 text-sm text-muted">{localize(project.tagline, lang)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="projects-title" className="px-6 pb-10 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="projects-title" className="text-2xl font-bold">
              {t('home.projects')}
            </h2>
            <p className="sr-only" aria-live="polite">
              {t('home.results', { count: results.length })}
              {query && ` ${t('home.resultsFor', { query })}`}
            </p>
          </div>
          <label className="flex items-center gap-2 text-sm text-muted">
            {t('home.sortLabel')}
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className={`rounded-full bg-elevated px-3 py-1.5 text-text shadow-card transition-colors hover:bg-hover ${focusRing}`}
            >
              {SORTS.map((value) => (
                <option key={value} value={value}>
                  {t(`home.sort.${value}`)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4">
          <ChipScroller label={t('home.filterLabel')}>
            <button type="button" aria-pressed={selectedTags.length === 0} onClick={clearTags} className={chip(selectedTags.length === 0)}>
              {t('home.all')}
            </button>
            {usedTags.map((tag) => (
              <button
                key={tag.id}
                type="button"
                aria-pressed={selectedTags.includes(tag.id)}
                onClick={() => toggleTag(tag.id)}
                className={chip(selectedTags.includes(tag.id))}
              >
                {localize(tag.label, lang)}
              </button>
            ))}
          </ChipScroller>
        </div>

        {results.length > 0 ? (
          <div className="mt-6">
            <div
              aria-hidden="true"
              className={`grid items-center gap-4 border-b border-border px-3 pb-2 text-sm text-muted ${projectRowColumns}`}
            >
              <span className="text-right">#</span>
              <span />
              <span>{t('home.columns.title')}</span>
              <span className="hidden md:block">{t('home.columns.tags')}</span>
              <span className="hidden text-right md:block">{t('home.columns.year')}</span>
            </div>
            <ul className="mt-2 flex flex-col">
              {results.map((project, index) => (
                <li key={project.slug} className="flex">
                  <ProjectCard project={project} index={index} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center gap-3 rounded-lg bg-elevated px-6 py-12 text-center shadow-card">
            <p className="text-lg font-bold">{t('home.emptyTitle')}</p>
            <p className="text-sm text-muted">{t('home.emptyText')}</p>
            {isFiltered && (
              <button
                type="button"
                onClick={reset}
                className={`mt-2 rounded-full border-2 border-accent px-5 py-2 text-sm font-bold transition-colors hover:bg-accent hover:text-white ${focusRing}`}
              >
                {t('home.reset')}
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
