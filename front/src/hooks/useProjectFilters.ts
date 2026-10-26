import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { projects } from '../data/projects'
import { getTag, tags } from '../data/tags'
import { localize } from '../lib/content'
import type { Lang } from '../lib/lang'
import type { Project, TagId } from '../types/content'

export const SORTS = ['newest', 'oldest', 'az', 'za'] as const
export type Sort = (typeof SORTS)[number]

const DEFAULT_SORT: Sort = 'newest'
const tagIds = new Set<string>(tags.map((tag) => tag.id))

// Lowercase without accents, so "donnees" matches "Données".
function normalize(text: string) {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
}

function matches(project: Project, query: string, lang: Lang) {
  const haystack = [
    localize(project.title, lang),
    localize(project.tagline, lang),
    ...project.tags.map((id) => localize(getTag(id).label, lang)),
    ...project.stack,
    project.course,
  ]
  return haystack.some((text) => normalize(text).includes(query))
}

function compare(sort: Sort, lang: Lang) {
  return (a: Project, b: Project) => {
    switch (sort) {
      case 'oldest':
        return a.date.start.localeCompare(b.date.start)
      case 'az':
        return localize(a.title, lang).localeCompare(localize(b.title, lang), lang)
      case 'za':
        return localize(b.title, lang).localeCompare(localize(a.title, lang), lang)
      default:
        return b.date.start.localeCompare(a.date.start)
    }
  }
}

// Search, tag filters and sort for the home grid, all stored in the URL.
export function useProjectFilters(lang: Lang) {
  const [params, setParams] = useSearchParams()

  const query = params.get('q') ?? ''
  const selectedTags = (params.get('tags') ?? '').split(',').filter((id): id is TagId => tagIds.has(id))
  const sortParam = params.get('sort')
  const sort: Sort = SORTS.includes(sortParam as Sort) ? (sortParam as Sort) : DEFAULT_SORT
  const tagsKey = selectedTags.join(',')

  const results = useMemo(() => {
    const normalized = normalize(query.trim())
    const selected = tagsKey ? tagsKey.split(',') : []
    return projects
      .filter((project) => !normalized || matches(project, normalized, lang))
      .filter((project) => selected.length === 0 || project.tags.some((id) => selected.includes(id)))
      .sort(compare(sort, lang))
  }, [query, tagsKey, sort, lang])

  const update = (changes: Record<string, string | null>) => {
    const next = new URLSearchParams(params)
    for (const [key, value] of Object.entries(changes)) {
      if (value) next.set(key, value)
      else next.delete(key)
    }
    setParams(next, { replace: true, preventScrollReset: true })
  }

  const toggleTag = (id: TagId) => {
    const next = selectedTags.includes(id) ? selectedTags.filter((tag) => tag !== id) : [...selectedTags, id]
    update({ tags: next.join(',') || null })
  }

  return {
    query,
    selectedTags,
    sort,
    results,
    isFiltered: Boolean(query || selectedTags.length),
    toggleTag,
    clearTags: () => update({ tags: null }),
    setSort: (value: Sort) => update({ sort: value === DEFAULT_SORT ? null : value }),
    reset: () => update({ q: null, tags: null }),
  }
}
