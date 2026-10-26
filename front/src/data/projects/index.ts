import type { Project } from '../../types/content'

// One file per project; add new ones to the list below.
const all: Project[] = []

// Newest first.
export const projects = [...all].sort((a, b) => b.date.start.localeCompare(a.date.start))

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
