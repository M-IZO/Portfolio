import { useTranslation } from 'react-i18next'
import { about } from '../data/about'
import { useLang } from '../hooks/useLang'
import { cvDownload } from '../lib/content'
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './icons'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'
const year = new Date().getFullYear()
const link = `inline-flex items-center gap-2 text-muted transition-colors hover:text-text ${focusRing}`

// Bottom of the main panel: copyright and contact links.
function Footer() {
  const { t } = useTranslation()
  const lang = useLang()
  const cv = cvDownload(lang)

  return (
    <footer className="mx-6 mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-text/15 py-8 text-sm md:mx-8">
      <p className="text-muted">
        © {year} {about.name}
      </p>
      <ul className="flex flex-wrap items-center gap-6">
        <li>
          <a href={about.socials.linkedin} target="_blank" rel="noreferrer" className={link}>
            <LinkedInIcon className="size-4" />
            LinkedIn
            <span className="sr-only">({t('about.newTab')})</span>
          </a>
        </li>
        <li>
          <a href={about.socials.github} target="_blank" rel="noreferrer" className={link}>
            <GitHubIcon className="size-4" />
            GitHub
            <span className="sr-only">({t('about.newTab')})</span>
          </a>
        </li>
        <li>
          <a href={cv.href} download={cv.fileName} className={link}>
            <DownloadIcon className="size-4" />
            {t('aboutLink.downloadCv')}
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
