import type { Project } from '../types/content'

const description = {
  en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n- Lorem ipsum dolor sit amet\n- Consectetur adipiscing elit\n- Sed do eiusmod tempor\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n- Lorem ipsum dolor sit amet\n- Consectetur adipiscing elit\n- Sed do eiusmod tempor\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

// Placeholder projects, newest first.
export const projects: Project[] = [
  {
    slug: 'lorem-analytics',
    title: { en: 'Lorem Analytics', fr: 'Lorem Analytics' },
    tagline: { en: 'Lorem ipsum dolor sit amet', fr: 'Lorem ipsum dolor sit amet' },
    description,
    year: 2025,
    role: { en: 'Data Scientist', fr: 'Data scientist' },
    tags: ['data-science', 'data-viz'],
    stack: ['Python', 'pandas', 'scikit-learn', 'Plotly'],
    cover: 'images/projects/lorem-analytics/cover.svg',
    accentColor: '#9147FF',
    gallery: [
      { src: 'images/projects/lorem-analytics/gallery/1.svg', alt: { en: 'Screenshot 1', fr: 'Capture 1' } },
      { src: 'images/projects/lorem-analytics/gallery/2.svg', alt: { en: 'Screenshot 2', fr: 'Capture 2' } },
      { src: 'images/projects/lorem-analytics/gallery/3.svg', alt: { en: 'Screenshot 3', fr: 'Capture 3' } },
      { src: 'images/projects/lorem-analytics/gallery/4.svg', alt: { en: 'Screenshot 4', fr: 'Capture 4' } },
    ],
  },
  {
    slug: 'ipsum-vision',
    title: { en: 'Ipsum Vision', fr: 'Ipsum Vision' },
    tagline: { en: 'Consectetur adipiscing elit', fr: 'Consectetur adipiscing elit' },
    description,
    year: 2025,
    role: { en: 'ML Engineer', fr: 'Ingénierie ML' },
    tags: ['ai', 'data-science'],
    stack: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    cover: 'images/projects/ipsum-vision/cover.svg',
    accentColor: '#E04FD3',
    gallery: [
      { src: 'images/projects/ipsum-vision/gallery/1.svg', alt: { en: 'Screenshot 1', fr: 'Capture 1' } },
      { src: 'images/projects/ipsum-vision/gallery/2.svg', alt: { en: 'Screenshot 2', fr: 'Capture 2' } },
      { src: 'images/projects/ipsum-vision/gallery/3.svg', alt: { en: 'Screenshot 3', fr: 'Capture 3' } },
    ],
  },
  {
    slug: 'dolor-api',
    title: { en: 'Dolor API', fr: 'Dolor API' },
    tagline: { en: 'Sed do eiusmod tempor', fr: 'Sed do eiusmod tempor' },
    description,
    year: 2024,
    role: { en: 'Backend Developer', fr: 'Développement backend' },
    tags: ['dev', 'database'],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    cover: 'images/projects/dolor-api/cover.svg',
    accentColor: '#4F6BFF',
  },
  {
    slug: 'sit-amet-dashboard',
    title: { en: 'Sit Amet Dashboard', fr: 'Sit Amet Dashboard' },
    tagline: { en: 'Ut labore et dolore magna', fr: 'Ut labore et dolore magna' },
    description,
    year: 2024,
    role: { en: 'Full-stack Developer', fr: 'Développement full-stack' },
    tags: ['dev', 'data-viz'],
    stack: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    cover: 'images/projects/sit-amet-dashboard/cover.svg',
    accentColor: '#00A3A3',
    gallery: [
      { src: 'images/projects/sit-amet-dashboard/gallery/1.svg', alt: { en: 'Screenshot 1', fr: 'Capture 1' } },
      { src: 'images/projects/sit-amet-dashboard/gallery/2.svg', alt: { en: 'Screenshot 2', fr: 'Capture 2' } },
      { src: 'images/projects/sit-amet-dashboard/gallery/3.svg', alt: { en: 'Screenshot 3', fr: 'Capture 3' } },
      { src: 'images/projects/sit-amet-dashboard/gallery/4.svg', alt: { en: 'Screenshot 4', fr: 'Capture 4' } },
      { src: 'images/projects/sit-amet-dashboard/gallery/5.svg', alt: { en: 'Screenshot 5', fr: 'Capture 5' } },
    ],
  },
  {
    slug: 'consectetur-pipeline',
    title: { en: 'Consectetur Pipeline', fr: 'Consectetur Pipeline' },
    tagline: { en: 'Quis nostrud exercitation', fr: 'Quis nostrud exercitation' },
    description,
    year: 2023,
    role: { en: 'Data Engineer', fr: 'Data engineering' },
    tags: ['database', 'cloud', 'mlops'],
    stack: ['Python', 'Airflow', 'SQL', 'AWS'],
    cover: 'images/projects/consectetur-pipeline/cover.svg',
    accentColor: '#FF7A59',
  },
  {
    slug: 'adipiscing-chat',
    title: { en: 'Adipiscing Chat', fr: 'Adipiscing Chat' },
    tagline: { en: 'Duis aute irure dolor', fr: 'Duis aute irure dolor' },
    description,
    year: 2023,
    role: { en: 'AI Developer', fr: 'Développement IA' },
    tags: ['ai', 'dev'],
    stack: ['Python', 'LangChain', 'React', 'Vector DB'],
    cover: 'images/projects/adipiscing-chat/cover.svg',
    accentColor: '#5B3FE0',
    gallery: [
      { src: 'images/projects/adipiscing-chat/gallery/1.svg', alt: { en: 'Screenshot 1', fr: 'Capture 1' } },
      { src: 'images/projects/adipiscing-chat/gallery/2.svg', alt: { en: 'Screenshot 2', fr: 'Capture 2' } },
    ],
  },
]

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
