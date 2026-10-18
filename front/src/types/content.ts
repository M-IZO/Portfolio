import type { Lang } from '../lib/lang'

export type Localized = Record<Lang, string>

export type TagId = 'database' | 'dev' | 'ai' | 'data-science' | 'data-viz' | 'cloud' | 'mlops'

export interface Tag {
  id: TagId
  label: Localized
}

export interface GalleryImage {
  src: string
  alt: Localized
}

export interface Project {
  slug: string
  title: Localized
  tagline: Localized
  // Paragraphs are separated by a blank line; lines starting with "- " form a list.
  description: Localized
  year: number
  role: Localized
  tags: TagId[]
  stack: string[]
  // Paths relative to `public/`, resolved with `asset()`.
  cover: string
  accentColor: string
  // Optional: the gallery section is hidden when absent or empty.
  gallery?: GalleryImage[]
}

export interface SkillGroup {
  name: Localized
  skills: string[]
}

export interface TimelineItem {
  title: Localized
  place: string
  location: Localized
  start: string // YYYY-MM
  end?: string // YYYY-MM, absent when ongoing
  description: Localized
  stack?: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string // YYYY-MM
  url?: string
}

export interface About {
  name: string
  title: Localized
  shortBio: Localized
  bio: Localized
  mainSkills: string[]
  skills: SkillGroup[]
  experience: TimelineItem[]
  education: TimelineItem[]
  certifications: Certification[]
  hobbies: Localized[]
  availability: {
    position: Localized
    duration: Localized
    from: string // YYYY-MM
  }
  socials: {
    github: string
    linkedin: string
  }
  cv: Localized // path per language, relative to `public/`
}
