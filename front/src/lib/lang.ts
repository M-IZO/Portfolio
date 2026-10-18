export const LANGS = ['fr', 'en'] as const

export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = 'en'

export function isLang(value: unknown): value is Lang {
  return LANGS.includes(value as Lang)
}

// Placeholder until the detection logic is added.
export function detectLang(): Lang {
  return DEFAULT_LANG
}
