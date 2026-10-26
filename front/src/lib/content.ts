import { about } from '../data/about'
import type { Lang } from './lang'
import type { Localized, Project } from '../types/content'

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

export function projectYear(project: Project) {
  return Number(project.date.start.slice(0, 4))
}

// "novembre 2024", or "novembre 2025 à mai 2026" for a period.
export function formatPeriod({ start, end }: Project['date'], lang: Lang) {
  if (!end) return formatMonth(start, lang)
  return `${formatMonth(start, lang)} ${lang === 'fr' ? 'à' : 'to'} ${formatMonth(end, lang)}`
}

// Every picture of the project page, in reading order: the images of the texts,
// then the extra ones listed in `gallery`, each only once.
export function projectImages(project: Project, lang: Lang) {
  const text = `${localize(project.brief, lang)}\n${localize(project.description, lang)}`
  const images = [...text.matchAll(/^[!@]\[(.*)\]\((.+)\)$/gm)].map((match) => ({ alt: match[1], src: match[2] }))
  for (const image of project.gallery ?? []) {
    images.push({ alt: localize(image.alt, lang), src: image.src })
  }
  return images.filter((image, index) => images.findIndex((other) => other.src === image.src) === index)
}
