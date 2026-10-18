import { about } from '../data/about'
import type { Lang } from './lang'
import type { Localized } from '../types/content'

export function localize(value: Localized, lang: Lang) {
  return value[lang]
}

// Prefixes a `public/` path with the site's base path.
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

// "2027-02" → "February 2027" / "février 2027".
export function formatMonth(yearMonth: string, lang: Lang) {
  const [year, month] = yearMonth.split('-').map(Number)
  return new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(new Date(year, month - 1))
}

// Download link and file name of the CV in the given language.
export function cvDownload(lang: Lang) {
  return {
    href: asset(localize(about.cv, lang)),
    fileName: `CV-${about.name.replace(/\s+/g, '-')}-${lang.toUpperCase()}.pdf`,
  }
}
