import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import Error404 from '../components/illustrations/Error404'
import LostCards from '../components/illustrations/LostCards'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLang, useSyncLang } from '../hooks/useLang'

function NotFound() {
  const { t } = useTranslation()
  const lang = useLang()
  useDocumentTitle(t('notFound.title'))

  return (
    <section className="grid flex-1 content-center items-center gap-8 p-6 md:grid-cols-3">
      <div className="flex flex-col items-center gap-6 text-center md:col-span-2">
        <LostCards className="w-full max-w-md" />
        <h1 className="text-3xl font-bold">{t('notFound.title')}</h1>
        <p className="max-w-sm text-muted">{t('notFound.text')}</p>
        <Link to={`/${lang}`} className="group inline-flex items-center gap-2 font-bold text-accent-hover">
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
          <span className="bg-gradient-to-r from-current to-current bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            {t('notFound.back')}
          </span>
        </Link>
      </div>
      <Error404 className="order-first mx-auto h-48 md:order-none md:h-auto md:max-h-[70vh] md:w-full" />
    </section>
  )
}

// Used outside the main layout (unknown language or path), so it fills the screen itself.
export function StandaloneNotFound() {
  useSyncLang(useLang())

  return (
    <div className="flex min-h-screen flex-col">
      <NotFound />
    </div>
  )
}

export default NotFound
