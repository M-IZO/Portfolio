import { useTranslation } from 'react-i18next'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function About() {
  const { t } = useTranslation()
  useDocumentTitle(t('nav.about'))

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">{t('nav.about')}</h1>
      <p className="text-muted">{t('placeholder.text')}</p>
    </section>
  )
}

export default About
