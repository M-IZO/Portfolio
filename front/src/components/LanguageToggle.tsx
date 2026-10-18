import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router'
import { useLang } from '../hooks/useLang'
import { LANGS, saveLang, type Lang } from '../lib/lang'

function LanguageToggle() {
  const { t } = useTranslation()
  const lang = useLang()
  const location = useLocation()
  const navigate = useNavigate()

  // Same page in the other language: only the first path segment changes.
  const switchTo = (next: Lang) => {
    if (next === lang) return
    saveLang(next)
    const rest = location.pathname.split('/').slice(2).join('/')
    navigate({
      pathname: rest ? `/${next}/${rest}` : `/${next}`,
      search: location.search,
      hash: location.hash,
    })
  }

  return (
    <div role="group" aria-label={t('language.label')} className="inline-flex items-center gap-1 text-sm font-bold">
      {LANGS.map((code, index) => (
        <span key={code} className="inline-flex items-center gap-1">
          {index > 0 && <span className="text-muted" aria-hidden="true">·</span>}
          <button
            type="button"
            onClick={() => switchTo(code)}
            aria-pressed={code === lang}
            aria-label={t('language.switchTo', { lng: code })}
            lang={code}
            className={`border-b-2 px-1 pb-0.5 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
              code === lang ? 'border-accent text-text' : 'border-transparent text-muted hover:text-text'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}

export default LanguageToggle
