import { useTranslation } from 'react-i18next'
import { Link, Outlet, useParams } from 'react-router'
import LanguageToggle from '../components/LanguageToggle'
import ThemeToggle from '../components/ThemeToggle'
import { useSyncLang } from '../hooks/useLang'
import { isLang, type Lang } from '../lib/lang'
import { StandaloneNotFound } from '../pages/NotFound'

function LangLayout() {
  const { lang } = useParams()

  if (!isLang(lang)) {
    return <StandaloneNotFound />
  }

  return <Shell lang={lang} />
}

function Shell({ lang }: { lang: Lang }) {
  const { t } = useTranslation()
  useSyncLang(lang)

  return (
    <div className="flex min-h-screen flex-col gap-2 p-2">
      <nav className="flex items-center gap-4 rounded-lg bg-surface px-6 py-3">
        <Link to={`/${lang}`} className="font-bold hover:text-accent-hover">{t('nav.home')}</Link>
        <Link to={`/${lang}/about`} className="font-bold hover:text-accent-hover">{t('nav.about')}</Link>
        <Link to={`/${lang}/projects/lorem-ipsum`} className="font-bold hover:text-accent-hover">Lorem ipsum</Link>
        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
      <main className="flex flex-1 flex-col rounded-lg bg-surface p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default LangLayout
