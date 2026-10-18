import type { Tag, TagId } from '../types/content'

export const tags: Tag[] = [
  { id: 'data-science', label: { en: 'Data Science', fr: 'Data Science' } },
  { id: 'ai', label: { en: 'AI', fr: 'IA' } },
  { id: 'dev', label: { en: 'Dev', fr: 'Dev' } },
  { id: 'database', label: { en: 'Database', fr: 'Base de données' } },
  { id: 'data-viz', label: { en: 'Data Viz', fr: 'Data Viz' } },
  { id: 'cloud', label: { en: 'Cloud', fr: 'Cloud' } },
  { id: 'mlops', label: { en: 'MLOps', fr: 'MLOps' } },
]

export function getTag(id: TagId) {
  return tags.find((tag) => tag.id === id)!
}
