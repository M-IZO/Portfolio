import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { DownloadIcon, ExternalLinkIcon, GitHubIcon, LinkedInIcon } from '../components/icons'
import RichText from '../components/RichText'
import { about } from '../data/about'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLang } from '../hooks/useLang'
import { cvDownload, formatMonth, localize } from '../lib/content'
import type { Lang } from '../lib/lang'
import type { TimelineItem } from '../types/content'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent'
const roundLink = `flex size-11 items-center justify-center rounded-full border-2 border-text/15 text-muted transition-colors hover:border-text hover:text-text ${focusRing}`

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-bold">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function Timeline({ items, lang, present }: { items: TimelineItem[]; lang: Lang; present: string }) {
  return (
    <ol className="space-y-8 border-l-2 border-text/15 pl-6">
      {items.map((item) => (
        <li key={`${item.place}-${item.start}`} className="relative">
          <span aria-hidden="true" className="absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 border-bg bg-accent-hover" />
          <p className="text-sm text-muted first-letter:uppercase">
            {formatMonth(item.start, lang)} – {item.end ? formatMonth(item.end, lang) : present}
          </p>
          <h3 className="mt-1 text-lg font-bold">{localize(item.title, lang)}</h3>
          <p className="text-sm">
            {item.place} <span className="text-muted">· {localize(item.location, lang)}</span>
          </p>
          <p className="mt-2 max-w-3xl text-muted">{localize(item.description, lang)}</p>
          {item.stack && (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {item.stack.map((tool) => (
                <li key={tool} className="rounded-full bg-elevated px-2.5 py-0.5 text-xs shadow-card">
                  {tool}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

function About() {
  const { t } = useTranslation()
  const lang = useLang()
  useDocumentTitle(t('nav.about'))

  const cv = cvDownload(lang)

  return (
    <div className="flex-1 pb-12">
      <header className="px-6 pt-12 pb-10 text-center md:px-8 md:pt-16 md:text-left">
        <h1 className="text-5xl font-black tracking-tight md:text-7xl xl:text-8xl">{about.name}</h1>
        <p className="mt-3 text-lg text-muted">{localize(about.title, lang)}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href={cv.href}
            download={cv.fileName}
            className={`inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2 font-bold transition-colors hover:border-text ${focusRing}`}
          >
            <DownloadIcon />
            {t('aboutLink.downloadCv')}
          </a>
          <a href={about.socials.github} target="_blank" rel="noreferrer" aria-label={`GitHub (${t('about.newTab')})`} title="GitHub" className={roundLink}>
            <GitHubIcon />
          </a>
          <a href={about.socials.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn (${t('about.newTab')})`} title="LinkedIn" className={roundLink}>
            <LinkedInIcon />
          </a>
        </div>
      </header>

      <div className="space-y-12 px-6 md:px-8">
        <Section id="bio-title" title={t('about.bio')}>
          <RichText text={localize(about.bio, lang)} className="max-w-3xl leading-relaxed text-muted" />
        </Section>

        <Section id="skills-title" title={t('about.skills')}>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {about.skills.map((group) => (
              <li key={group.name.en} className="rounded-lg border-2 border-text/15 p-5">
                <h3 className="font-bold">{localize(group.name, lang)}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-elevated px-3 py-1 text-sm shadow-card">
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience-title" title={t('about.experience')}>
          <Timeline items={about.experience} lang={lang} present={t('about.present')} />
        </Section>

        <Section id="education-title" title={t('about.education')}>
          <Timeline items={about.education} lang={lang} present={t('about.present')} />
        </Section>

        <Section id="certifications-title" title={t('about.certifications')}>
          <ul className="divide-y divide-text/10">
            {about.certifications.map((certification) => (
              <li key={certification.name} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div>
                  <p className="font-bold">{certification.name}</p>
                  <p className="text-sm text-muted first-letter:uppercase">
                    {certification.issuer} · {formatMonth(certification.date, lang)}
                  </p>
                </div>
                {certification.url && (
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-bold text-accent-hover hover:underline ${focusRing}`}
                  >
                    {t('about.viewCertificate')}
                    <ExternalLinkIcon />
                    <span className="sr-only">({t('about.newTab')})</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="hobbies-title" title={t('about.hobbies')}>
          <ul className="flex flex-wrap gap-2">
            {about.hobbies.map((hobby) => (
              <li key={hobby.en} className="rounded-full bg-elevated px-4 py-1.5 shadow-card">
                {localize(hobby, lang)}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}

export default About
