import type { About } from '../types/content'

const lorem = {
  en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

export const about: About = {
  name: 'Lorem Ipsum',
  title: {
    en: 'Data Science / AI · Development',
    fr: 'Data Science / IA · Développement',
  },
  shortBio: lorem,
  bio: {
    en: `${lorem.en}\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    fr: `${lorem.fr}\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  mainSkills: ['Python', 'Machine Learning', 'SQL', 'React', 'TypeScript'],
  skills: [
    { name: { en: 'Data Science', fr: 'Data Science' }, skills: ['pandas', 'NumPy', 'scikit-learn', 'Statistics'] },
    { name: { en: 'AI', fr: 'IA' }, skills: ['PyTorch', 'NLP', 'Computer Vision', 'LLMs'] },
    { name: { en: 'Development', fr: 'Développement' }, skills: ['TypeScript', 'React', 'Node.js', 'FastAPI'] },
    { name: { en: 'Databases', fr: 'Bases de données' }, skills: ['PostgreSQL', 'MongoDB', 'SQL'] },
    { name: { en: 'Tools', fr: 'Outils' }, skills: ['Git', 'Docker', 'Linux', 'AWS'] },
  ],
  experience: [
    {
      title: { en: 'Lorem ipsum', fr: 'Lorem ipsum' },
      place: 'Dolor Company',
      location: { en: 'Paris, France', fr: 'Paris, France' },
      start: '2024-09',
      description: lorem,
      stack: ['Python', 'SQL', 'Airflow'],
    },
    {
      title: { en: 'Sit amet', fr: 'Sit amet' },
      place: 'Consectetur Labs',
      location: { en: 'Lyon, France', fr: 'Lyon, France' },
      start: '2023-02',
      end: '2024-08',
      description: lorem,
      stack: ['React', 'TypeScript', 'Node.js'],
    },
  ],
  education: [
    {
      title: { en: "Master's degree, lorem ipsum", fr: 'Master, lorem ipsum' },
      place: 'Adipiscing University',
      location: { en: 'Paris, France', fr: 'Paris, France' },
      start: '2022-09',
      end: '2024-06',
      description: lorem,
    },
    {
      title: { en: "Bachelor's degree, dolor sit", fr: 'Licence, dolor sit' },
      place: 'Elit University',
      location: { en: 'Bordeaux, France', fr: 'Bordeaux, France' },
      start: '2019-09',
      end: '2022-06',
      description: lorem,
    },
  ],
  certifications: [
    { name: 'Lorem Ipsum Certificate', issuer: 'Dolor Academy', date: '2024-05', url: 'https://example.com' },
    { name: 'Sit Amet Associate', issuer: 'Consectetur Institute', date: '2023-11' },
  ],
  hobbies: [
    { en: 'Lorem ipsum', fr: 'Lorem ipsum' },
    { en: 'Dolor sit amet', fr: 'Dolor sit amet' },
    { en: 'Consectetur', fr: 'Consectetur' },
  ],
  availability: {
    position: { en: 'Internship', fr: 'Stage' },
    duration: { en: '3 months minimum', fr: '3 mois minimum' },
    from: '2027-02',
  },
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  cv: {
    en: 'cv/cv-en.pdf',
    fr: 'cv/cv-fr.pdf',
  },
}
