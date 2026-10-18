import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useDocumentTitle(title?: string) {
  const { t } = useTranslation()
  const siteName = t('site.name')

  useEffect(() => {
    document.title = title ? `${title} · ${siteName}` : siteName
  }, [title, siteName])
}
