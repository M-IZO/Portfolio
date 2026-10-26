import type { About } from '../types/content'

export const about: About = {
  name: 'Marine Izoulet',
  title: {
    en: 'Data Science / AI · Development',
    fr: 'Data Science / IA · Développement',
  },
  shortBio: {
    en: 'Computer science engineering student at UTBM, on a work-study programme at the French Civil Aviation Authority (DGAC), where I build databases and web tools.',
    fr: "Élève ingénieure en informatique à l'UTBM, en alternance à la DGAC, où je conçois des bases de données et des outils web.",
  },
  bio: {
    en: `I am a computer science engineering student at UTBM, on a work-study programme since April 2024 at the French Civil Aviation Authority (DGAC), at the South-East air traffic control centre in Aix-en-Provence. There I design and set up databases, automate tasks with PHP scripts and build web tools in PHP and JavaScript, while learning the technical vocabulary and the stakes of air traffic control.

I enjoy teamwork, especially in group projects, and I adapt quickly when needs change. Rigorous and organised, I can also move forward on my own. My curiosity draws me to very different fields, from video games to air traffic control, and I like to combine an analytical mind with creativity to find solutions that are both solid and original.`,
    fr: `Je suis élève ingénieure en informatique à l'UTBM, en alternance depuis avril 2024 à la DGAC, au CRNA Sud-Est d'Aix-en-Provence. J'y conçois et implante des bases de données, j'automatise des tâches avec des scripts PHP et je développe des outils web en PHP et JavaScript, tout en découvrant les termes techniques et les enjeux du contrôle aérien.

J'aime travailler en équipe, notamment en projet de groupe, et je m'adapte vite quand les besoins changent. Rigoureuse et organisée, je sais aussi avancer en autonomie. Ma curiosité me pousse vers des domaines très différents, du jeu vidéo au contrôle aérien, et j'aime associer l'esprit d'analyse à la créativité pour trouver des solutions à la fois solides et originales.`,
  },
  skills: [
    { name: { en: 'Languages', fr: 'Langages' }, skills: ['C', 'C++', 'Java', 'PHP', 'Python', 'JavaScript', 'SQL', 'GDScript'] },
    { name: { en: 'Web', fr: 'Web' }, skills: ['HTML/CSS', 'React', 'Angular', 'Node.js', 'Symfony', 'Bootstrap', 'Tailwind CSS', 'Webpack'] },
    { name: { en: 'Data', fr: 'Données' }, skills: ['MySQL', 'MariaDB', 'Power BI', 'Power Query', 'JSON'] },
    { name: { en: 'Design', fr: 'Conception' }, skills: ['UML', 'Figma', 'Personas', 'Wireframes', 'Storyboard', 'Photoshop'] },
    { name: { en: 'Games and electronics', fr: 'Jeu et électronique' }, skills: ['Godot', 'Allegro 5', 'Arduino', 'Processing', 'Proteus'] },
    { name: { en: 'Tools and methods', fr: 'Outils et méthodes' }, skills: ['Git', 'Linux', 'Make', 'Doxygen', 'Jira', 'Scrum', 'Agile', 'Office'] },
  ],
  languages: [
    { name: { en: 'French', fr: 'Français' }, level: { en: 'Native language', fr: 'Langue maternelle' } },
    { name: { en: 'English', fr: 'Anglais' }, level: { en: 'C2, Linguaskill Business certificate', fr: 'C2, certification Linguaskill Business' } },
    { name: { en: 'Italian', fr: 'Italien' }, level: { en: 'A2, good reading comprehension', fr: 'A2, bonne compréhension écrite' } },
  ],
  experience: [
    {
      title: { en: 'Work-study, databases and web tools', fr: 'Alternance, bases de données et outils web' },
      place: 'DGAC, CRNA Sud-Est',
      location: { en: 'Aix-en-Provence, France', fr: 'Aix-en-Provence' },
      start: '2024-04',
      description: {
        en: 'Design and implementation of a database, task automation with PHP scripts and development of web tools in PHP and JavaScript, while learning the technical terms and the stakes of air traffic control.',
        fr: "Conception et implantation d'une base de données, automatisation de tâches avec des scripts PHP et développement d'outils web en PHP et JavaScript, avec l'acquisition des termes techniques et des enjeux du contrôle aérien.",
      },
      stack: ['PHP', 'JavaScript', 'SQL'],
      project: 'aixpert',
    },
    {
      title: { en: 'Game jam, 1st place with Jyotih', fr: 'Game jam, 1re place avec Jyotih' },
      place: 'Octobre Numérique, Faire Monde',
      location: { en: 'Arles, France', fr: 'Arles' },
      start: '2023-10',
      end: '2023-10',
      description: {
        en: 'Development of a video game in 48 hours as a team, which won the competition and was exhibited during the festival.',
        fr: "Réalisation d'un jeu vidéo en 48 heures en équipe, qui a remporté la compétition et a été exposé pendant le festival.",
      },
      stack: ['Godot'],
      project: 'jyotih',
    },
    {
      title: { en: 'Student ambassador', fr: 'Missions ambassadeur' },
      place: 'INSEEC OMNES',
      location: { en: 'Lyon, France', fr: 'Lyon' },
      start: '2021-09',
      end: '2022-06',
      description: {
        en: 'Student ambassador missions for the school.',
        fr: "Missions d'ambassadeur étudiant pour l'école.",
      },
    },
    {
      title: { en: 'Summer job in a dental laboratory', fr: "Job d'été en laboratoire dentaire" },
      place: 'Laboratoire dentaire',
      location: { en: "Bourg-d'Oisans, France", fr: "Bourg-d'Oisans" },
      start: '2021-05',
      end: '2021-08',
      description: {
        en: 'Digitisation, preparation and milling of dental models, deliveries and administrative support.',
        fr: 'Numérisation, préparation et usinage de modèles, livraisons et secrétariat.',
      },
    },
  ],
  education: [
    {
      title: { en: 'Engineering degree, computer science', fr: "Cycle ingénieur, informatique" },
      place: 'UTBM',
      location: { en: 'Belfort, France', fr: 'Belfort' },
      start: '2024-09',
      end: '2027-08',
      description: {
        en: 'Engineering school, on a work-study programme at the DGAC.',
        fr: "École d'ingénieur, en alternance à la DGAC.",
      },
    },
    {
      title: { en: 'BUT in Computer Science', fr: 'BUT informatique' },
      place: "IUT d'Aix-Marseille, site d'Arles",
      location: { en: 'Arles, France', fr: 'Arles' },
      start: '2022-09',
      end: '2024-06',
      description: {
        en: 'Bachelor of Technology in Computer Science.',
        fr: 'Bachelor universitaire de technologie en informatique.',
      },
    },
    {
      title: { en: 'Electronics engineering preparatory class', fr: 'Prépa ingénieur électronique' },
      place: 'ECE',
      location: { en: 'Lyon, France', fr: 'Lyon' },
      start: '2021-09',
      end: '2022-06',
      description: {
        en: 'Integrated preparatory class of an engineering school.',
        fr: "Classe préparatoire intégrée d'une école d'ingénieur.",
      },
    },
    {
      title: { en: 'Architecture studies', fr: 'Formation architecture' },
      place: 'ENSAP Lille',
      location: { en: 'Lille, France', fr: 'Lille' },
      start: '2020-09',
      end: '2021-06',
      description: {
        en: 'A year at the national school of architecture and landscape of Lille.',
        fr: "Une année à l'École nationale supérieure d'architecture et de paysage de Lille.",
      },
    },
    {
      title: { en: 'Scientific Baccalauréat', fr: 'Baccalauréat S' },
      place: 'Lycée ITEC Boisfleury',
      location: { en: 'Corenc, France', fr: 'Corenc' },
      start: '2020-07',
      end: '2020-07',
      description: {
        en: 'French high school diploma, science track.',
        fr: 'Baccalauréat général, série scientifique.',
      },
    },
  ],
  certifications: [{ name: 'Linguaskill Business, C2', issuer: 'Cambridge English' }],
  hobbies: [
    {
      icon: 'art',
      name: { en: 'Arts', fr: 'Arts' },
      items: [
        { en: 'Violin, 6 years', fr: 'Violon, 6 ans' },
        { en: 'Reading', fr: 'Lecture' },
        { en: 'Traditional and digital drawing', fr: 'Dessin traditionnel et numérique' },
        { en: 'Painting', fr: 'Peinture' },
      ],
    },
    {
      icon: 'sport',
      name: { en: 'Sport', fr: 'Sport' },
      items: [
        { en: 'Skiing', fr: 'Ski' },
        { en: 'Climbing', fr: 'Escalade' },
      ],
    },
  ],
  availability: {
    position: { en: 'Internship', fr: 'Stage' },
    duration: { en: '3 months', fr: '3 mois' },
    from: '2027-01',
  },
  socials: {
    github: 'https://github.com/M-IZO',
    linkedin: 'https://www.linkedin.com/in/marine-i-816683234',
  },
  cv: {
    en: 'cv/IZOULET-en.pdf',
    fr: 'cv/IZOULET-fr.pdf',
  },
}
