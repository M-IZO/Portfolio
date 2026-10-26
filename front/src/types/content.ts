import type { Lang } from '../lib/lang'

export type Localized = Record<Lang, string>

export type TagId = 'database' | 'dev' | 'design' | 'electronics' | 'ai' | 'data-science' | 'data-viz' | 'cloud' | 'mlops'

export interface Tag {
  id: TagId
  label: Localized
}

export interface GalleryImage {
  src: string
  alt: Localized
}

export interface ProjectVideo {
  src: string // relative to `public/`
  title: Localized
  poster?: string // image shown before playing, relative to `public/`
}

export interface Project {
  slug: string
  title: Localized
  tagline: Localized
  course: string // UE code, e.g. "BD70"
  date: {
    start: string // YYYY-MM
    end?: string // YYYY-MM, only for projects spread over several months
  }
  teamSize: number
  tags: TagId[]
  stack: string[]
  // Paths relative to `public/`, resolved with `asset()`.
  cover: string
  // Gallery images and videos are phone screens (portrait) instead of landscape.
  portrait?: boolean
  // Rich text: blank line between blocks, "- " for list items, "### " for a subheading.
  brief: Localized
  description: Localized
  // Optional sections, hidden when absent or empty.
  videos?: ProjectVideo[]
  // The gallery shows every image of the texts; list here only the extra ones.
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
