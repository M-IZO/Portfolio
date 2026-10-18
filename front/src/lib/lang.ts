export const LANGS = ['fr', 'en'] as const

export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = 'en'

const STORAGE_KEY = 'lang'

// Time zones of mostly French-speaking places, used when the browser language doesn't help.
const FRENCH_TIME_ZONES = new Set([
  'Europe/Paris',
  'Europe/Brussels',
  'Europe/Luxembourg',
  'Europe/Monaco',
  'Europe/Zurich',
  'Indian/Reunion',
  'Indian/Mayotte',
  'America/Martinique',
  'America/Guadeloupe',
  'America/Cayenne',
  'America/Miquelon',
  'Pacific/Noumea',
  'Pacific/Tahiti',
  'Pacific/Wallis',
  'Africa/Dakar',
  'Africa/Abidjan',
  'Africa/Kinshasa',
  'Africa/Douala',
  'Africa/Libreville',
  'Africa/Bamako',
  'Africa/Ouagadougou',
  'Africa/Niamey',
  'Africa/Lome',
  'Africa/Porto-Novo',
  'Africa/Conakry',
])

export function isLang(value: unknown): value is Lang {
  return LANGS.includes(value as Lang)
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Storage can be unavailable (private mode); detection still works.
  }
}

function getSavedLang(): Lang | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return isLang(saved) ? saved : null
  } catch {
    return null
  }
}

function getBrowserLang(): Lang | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split('-')[0]
    if (isLang(base)) return base
  }
  return null
}

function getTimeZoneLang(): Lang | null {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return FRENCH_TIME_ZONES.has(timeZone) ? 'fr' : null
  } catch {
    return null
  }
}

// Saved choice first, then browser language, then time zone, then English.
export function detectLang(): Lang {
  return getSavedLang() ?? getBrowserLang() ?? getTimeZoneLang() ?? DEFAULT_LANG
}
