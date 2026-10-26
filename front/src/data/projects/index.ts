import type { Project } from '../../types/content'
import { betterboxd } from './betterboxd'
import { electionPresidentielle } from './election-presidentielle'
import { gestionnaireDeTournois } from './gestionnaire-de-tournois'
import { sudoku } from './sudoku'

// One file per project; add new ones to the list below.
const all: Project[] = [gestionnaireDeTournois, electionPresidentielle, sudoku, betterboxd]

// Newest first.
export const projects = [...all].sort((a, b) => b.date.start.localeCompare(a.date.start))

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
