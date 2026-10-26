import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router'
import { about } from '../data/about'
import { useLang } from '../hooks/useLang'
import { HomeIcon, MenuIcon, OwlIcon } from './icons'
import LanguageToggle from './LanguageToggle'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

const roundButton =
  'inline-flex shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-accent'

function TopBar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <header className="flex flex-wrap items-center gap-2 px-2 py-2 lg:grid lg:grid-cols-[1fr_minmax(0,36rem)_1fr] lg:gap-4 lg:px-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label={t('menu.open')}
          className={`${roundButton} size-10 text-muted hover:bg-hover hover:text-text lg:hidden`}
        >
          <MenuIcon />
        </button>
        <Link to={`/${lang}`} className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-accent">
          <span className="flex size-9 items-center justify-center rounded-full bg-white text-black">
            <OwlIcon className="size-6" />
          </span>
          <span className="hidden font-bold sm:inline">{about.name}</span>
        </Link>
      </div>

      <div className="order-last flex w-full items-center gap-2 lg:order-none">
        <NavLink
          to={`/${lang}`}
          end
          aria-label={t('nav.home')}
          title={t('nav.home')}
          className={({ isActive }) =>
            `${roundButton} size-12 bg-elevated shadow-card hover:scale-105 hover:bg-hover ${isActive ? 'text-text' : 'text-muted'}`
          }
        >
          <HomeIcon />
        </NavLink>
        <SearchBar />
      </div>

      <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:justify-end">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default TopBar
