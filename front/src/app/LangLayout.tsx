import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router'
import Drawer from '../components/Drawer'
import Library from '../components/Library'
import TopBar from '../components/TopBar'
import { useSyncLang } from '../hooks/useLang'
import { isLang, type Lang } from '../lib/lang'
import { StandaloneNotFound } from '../pages/NotFound'

const SIDEBAR_KEY = 'sidebar'

function readCollapsed() {
  try {
    return localStorage.getItem(SIDEBAR_KEY) === 'collapsed'
  } catch {
    return false
  }
}

function saveCollapsed(collapsed: boolean) {
  try {
    localStorage.setItem(SIDEBAR_KEY, collapsed ? 'collapsed' : 'expanded')
  } catch {
    // Storage can be unavailable; the sidebar still toggles.
  }
}

function LangLayout() {
  const { lang } = useParams()

  if (!isLang(lang)) {
    return <StandaloneNotFound />
  }

  return <Shell lang={lang} />
}

function Shell({ lang }: { lang: Lang }) {
  useSyncLang(lang)

  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  // The drawer stays open only on the page it was opened from, so navigating closes it.
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const menuOpen = menuPath === pathname
  const closeMenu = useCallback(() => setMenuPath(null), [])

  const [collapsed, setCollapsed] = useState(readCollapsed)
  const toggleSidebar = () => {
    saveCollapsed(!collapsed)
    setCollapsed(!collapsed)
  }

  // The main panel scrolls on its own, so reset it on page change.
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex h-dvh flex-col">
      <TopBar onOpenMenu={() => setMenuPath(pathname)} />

      <div className="flex min-h-0 flex-1 gap-2 px-2 pb-2">
        <aside
          className={`hidden shrink-0 overflow-hidden transition-[width] duration-300 lg:block ${
            collapsed ? 'w-[4.5rem]' : 'w-80'
          }`}
        >
          <Library collapsed={collapsed} onToggle={toggleSidebar} />
        </aside>
        <main ref={mainRef} className="flex min-w-0 flex-1 flex-col overflow-y-auto rounded-lg bg-surface">
          <Outlet />
        </main>
      </div>

      <Drawer open={menuOpen} onClose={closeMenu}>
        <Library />
      </Drawer>
    </div>
  )
}

export default LangLayout
