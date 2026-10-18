import type { Lang } from './lang'
import type { Localized } from '../types/content'

export function localize(value: Localized, lang: Lang) {
  return value[lang]
}

// Prefixes a `public/` path with the site's base path.
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}
