import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import { about } from '../data/about'
import { projects } from '../data/projects'
import { getTag, tags } from '../data/tags'
import { useLang } from '../hooks/useLang'
import { asset, localize } from '../lib/content'
import type { TagId } from '../types/content'
import ChipScroller from './ChipScroller'
import { DownloadIcon, IdCardIcon, StackIcon, UserIcon } from './icons'

// Only offer tags that at least one project uses.
const usedTags = tags.filter((tag) => projects.some((project) => project.tags.includes(tag.id)))

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'

type LibraryProps = {
  // Icons only: covers and round buttons, no text.
  collapsed?: boolean
  // Shows the collapse/expand button when provided.
  onToggle?: () => void
}

// Sidebar: an About panel with the CV, then the projects panel with tag chips to filter them.
function Library({ collapsed = false, onToggle }: LibraryProps) {
  const { t } = useTranslation()
  const lang = useLang()
  const [activeTag, setActiveTag] = useState<TagId | null>(null)

  const visible = activeTag ? projects.filter((project) => project.tags.includes(activeTag)) : projects
  const cvName = `CV-${about.name.replace(/\s+/g, '-')}-${lang.toUpperCase()}.pdf`

  const rowClass = (isActive: boolean) =>
    `flex items-center gap-3 rounded-md transition-colors ${focusRing} ${collapsed ? 'justify-center p-1' : 'p-2'} ${
      isActive ? 'bg-hover' : 'hover:bg-elevated'
    }`

  const chip = (selected: boolean) =>
    `shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors ${focusRing} ${
      selected ? 'bg-text text-bg' : 'bg-elevated text-text hover:bg-hover'
    }`

  const cvHref = asset(localize(about.cv, lang))

  return (
    <div className="flex h-full flex-col gap-2">
      <section aria-label={t('nav.about')} className="shrink-0 rounded-lg bg-surface p-2">
        {!collapsed && (
          <h2 className="flex items-center gap-3 px-3 pt-3 pb-3 font-bold text-muted">
            <IdCardIcon />
            <span>{t('nav.about')}</span>
          </h2>
        )}
        <div className="relative">
          <NavLink
            to={`/${lang}/about`}
            title={collapsed ? t('aboutLink.title') : undefined}
            aria-label={collapsed ? t('aboutLink.title') : undefined}
            className={({ isActive }) => `${rowClass(isActive)} ${collapsed ? '' : 'pr-12'}`}
          >
            {({ isActive }) => (
              <>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-accent-hover to-accent text-white">
                  <UserIcon />
                </span>
                {!collapsed && (
                  <span className="min-w-0">
                    <span className={`block truncate ${isActive ? 'text-accent-hover' : 'text-text'}`}>{t('aboutLink.title')}</span>
                    <span className="block truncate text-sm text-muted">{t('aboutLink.subtitle')}</span>
                  </span>
                )}
              </>
            )}
          </NavLink>
          <a
            href={cvHref}
            download={cvName}
            aria-label={t('aboutLink.downloadCv')}
            title={t('aboutLink.downloadCv')}
            className={
              collapsed
                ? `${rowClass(false)} mt-0.5 text-muted hover:text-text`
                : `absolute top-1/2 right-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-elevated hover:text-text ${focusRing}`
            }
          >
            {collapsed ? (
              <span className="flex size-12 items-center justify-center rounded-md bg-elevated">
                <DownloadIcon className="size-6" />
              </span>
            ) : (
              <DownloadIcon />
            )}
          </a>
        </div>
      </section>

      <section aria-label={t('library.title')} className="flex min-h-0 flex-1 flex-col rounded-lg bg-surface">
        <div className={`flex items-center gap-3 pt-4 pb-3 ${collapsed ? 'justify-center px-2' : 'px-4'}`}>
          {onToggle ? (
            <button
              type="button"
              onClick={onToggle}
              aria-label={collapsed ? t('library.expand') : t('library.collapse')}
              aria-expanded={!collapsed}
              title={collapsed ? t('library.expand') : t('library.collapse')}
              className={`flex items-center gap-3 rounded-md p-1 font-bold text-muted transition-colors hover:text-text ${focusRing}`}
            >
              <StackIcon />
              {!collapsed && <span>{t('library.title')}</span>}
            </button>
          ) : (
            <h2 className="flex items-center gap-3 p-1 font-bold text-muted">
              <StackIcon />
              <span className="text-text">{t('library.title')}</span>
            </h2>
          )}
        </div>

        {!collapsed && (
          <div className="px-4 pb-3">
            <ChipScroller label={t('library.filter')}>
              <button type="button" aria-pressed={activeTag === null} onClick={() => setActiveTag(null)} className={chip(activeTag === null)}>
                {t('library.all')}
              </button>
              {usedTags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  aria-pressed={activeTag === tag.id}
                  onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
                  className={chip(activeTag === tag.id)}
                >
                  {localize(tag.label, lang)}
                </button>
              ))}
            </ChipScroller>
          </div>
        )}

        <ul className="flex-1 space-y-0.5 overflow-y-auto px-2 pb-2 [scrollbar-width:thin]">
          {visible.map((project) => {
            const title = localize(project.title, lang)
            const tagLabels = project.tags.map((id) => localize(getTag(id).label, lang))
            return (
              <li key={project.slug}>
                <NavLink
                  to={`/${lang}/projects/${project.slug}`}
                  title={collapsed ? title : undefined}
                  aria-label={collapsed ? title : undefined}
                  className={({ isActive }) => rowClass(isActive)}
                >
                  {({ isActive }) => (
                    <>
                      <img
                        src={asset(project.cover)}
                        alt=""
                        className={`size-12 shrink-0 rounded-md object-cover ${collapsed && isActive ? 'ring-2 ring-accent' : ''}`}
                      />
                      {!collapsed && (
                        <span className="min-w-0">
                          <span className={`block truncate ${isActive ? 'text-accent-hover' : 'text-text'}`}>{title}</span>
                          <span className="block truncate text-sm text-muted" title={tagLabels.join(', ')}>
                            {project.year} · {tagLabels.join(', ')}
                          </span>
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
          {!collapsed && visible.length === 0 && <li className="px-3 py-4 text-sm text-muted">{t('library.empty')}</li>}
        </ul>
      </section>
    </div>
  )
}

export default Library
