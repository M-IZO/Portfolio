import { Link } from 'react-router'
import Error404 from '../components/illustrations/Error404'
import LostCards from '../components/illustrations/LostCards'
import { useLang } from '../hooks/useLang'

function NotFound() {
  const lang = useLang()

  return (
    <section className="grid flex-1 content-center items-center gap-8 md:grid-cols-3">
      <div className="flex flex-col items-center gap-6 text-center md:col-span-2">
        <LostCards className="w-full max-w-md" />
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="max-w-sm text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to={`/${lang}`} className="group inline-flex items-center gap-2 font-bold text-accent-hover">
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
          <span className="bg-gradient-to-r from-current to-current bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            Back to home
          </span>
        </Link>
      </div>
      <Error404 className="order-first mx-auto h-48 md:order-none md:h-auto md:max-h-[70vh] md:w-full" />
    </section>
  )
}

// Used outside the main layout (unknown language or path), so it fills the screen itself.
export function StandaloneNotFound() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <NotFound />
    </div>
  )
}

export default NotFound
