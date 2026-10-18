import { Link, Outlet, useParams } from 'react-router'
import ThemeToggle from '../components/ThemeToggle'
import { isLang } from '../lib/lang'
import { StandaloneNotFound } from '../pages/NotFound'

function LangLayout() {
  const { lang } = useParams()

  if (!isLang(lang)) {
    return <StandaloneNotFound />
  }

  return (
    <div className="flex min-h-screen flex-col gap-2 p-2">
      <nav className="flex items-center gap-4 rounded-lg bg-surface px-6 py-3">
        <Link to={`/${lang}`} className="font-bold hover:text-accent-hover">Home</Link>
        <Link to={`/${lang}/about`} className="font-bold hover:text-accent-hover">About</Link>
        <Link to={`/${lang}/projects/lorem-ipsum`} className="font-bold hover:text-accent-hover">Project</Link>
        <div className="ml-auto">
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
