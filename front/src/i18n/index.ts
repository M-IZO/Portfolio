import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { detectLang, isLang } from '../lib/lang'
import en from './locales/en.json'
import fr from './locales/fr.json'

export const resources = {
  en: { translation: en },
  fr: { translation: fr },
} as const

// Start in the URL's language when there is one, so the first render is already right.
function initialLang() {
  const base = import.meta.env.BASE_URL
  const segment = window.location.pathname.slice(base.length).split('/')[0]
  return isLang(segment) ? segment : detectLang()
}

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang(),
  fallbackLng: 'en',
  initAsync: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
