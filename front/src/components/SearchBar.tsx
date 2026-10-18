import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useSearchParams } from 'react-router'
import { useLang } from '../hooks/useLang'
import { CloseIcon, SearchIcon } from './icons'

// Searches projects on the home page; the query lives in the URL (`?q=`).
function SearchBar() {
  const { t } = useTranslation()
  const lang = useLang()
  const location = useLocation()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()

  const isHome = location.pathname === `/${lang}`
  const value = isHome ? (params.get('q') ?? '') : ''

  const setQuery = (query: string) => {
    if (isHome) {
      const next = new URLSearchParams(params)
      if (query) next.set('q', query)
      else next.delete('q')
      setParams(next, { replace: true })
    } else if (query) {
      navigate({ pathname: `/${lang}`, search: `?q=${encodeURIComponent(query)}` })
    }
  }

  return (
    <div role="search" className="group relative flex h-12 w-full items-center">
      <SearchIcon className="pointer-events-none absolute left-4 size-5 text-muted transition-colors group-focus-within:text-text" />
      <input
        type="search"
        value={value}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t('search.placeholder')}
        aria-label={t('search.label')}
        className="h-full w-full rounded-full border-2 border-transparent bg-elevated pr-11 pl-12 text-text shadow-card transition-colors outline-none placeholder:text-muted hover:border-border hover:bg-hover focus:border-text [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => setQuery('')}
          aria-label={t('search.clear')}
          className="absolute right-3 rounded-full p-1 text-muted transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

export default SearchBar
