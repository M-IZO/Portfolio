import type { Project } from '../../types/content'
import { aixpert } from './aixpert'
import { betterboxd } from './betterboxd'
import { dofusArena } from './dofus-arena'
import { electionPresidentielle } from './election-presidentielle'
import { gestionnaireDeTournois } from './gestionnaire-de-tournois'
import { jyotih } from './jyotih'
import { presentationReact } from './presentation-react'
import { sallesOperatoires } from './salles-operatoires'
import { sudoku } from './sudoku'
import { synthetiseur } from './synthetiseur'
import { visualiseurCgshop } from './visualiseur-cgshop'

// One file per project; add new ones to the list below.
const all: Project[] = [gestionnaireDeTournois, electionPresidentielle, sudoku, betterboxd, visualiseurCgshop, synthetiseur, dofusArena, presentationReact, sallesOperatoires, jyotih, aixpert]

// Newest first.
export const projects = [...all].sort((a, b) => b.date.start.localeCompare(a.date.start))

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
