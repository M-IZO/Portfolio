import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { detectLang, isLang, type Lang } from '../lib/lang'

// Current language: from the URL, or detected when the URL has none (e.g. 404 pages).
export function useLang(): Lang {
  const { lang } = useParams()
  return isLang(lang) ? lang : detectLang()
}

// Keeps i18next and <html lang> in sync with the given language.
export function useSyncLang(lang: Lang) {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
    document.documentElement.lang = lang
  }, [i18n, lang])
}
