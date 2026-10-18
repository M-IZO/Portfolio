import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Project() {
  const { t } = useTranslation()
  const { slug } = useParams()
  useDocumentTitle(slug)

  return (
    <section>
      <h1 className="text-3xl font-bold">{slug}</h1>
      <p className="text-muted">{t('placeholder.text')}</p>
    </section>
  )
}

export default Project
