export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const listeners = new Set<() => void>()

export function getTheme(): Theme {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

export function setTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove('dark', 'light')
  root.classList.add(theme)

  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode); the theme still applies.
  }

  listeners.forEach((listener) => listener())
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
