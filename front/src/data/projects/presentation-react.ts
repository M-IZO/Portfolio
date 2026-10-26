import type { Project } from '../../types/content'

const dir = 'images/projects/presentation-react'

export const presentationReact: Project = {
  slug: 'presentation-react',
  title: { fr: 'Présentations en React', en: 'React presentations' },
  tagline: {
    fr: 'Bibliothèque de composants React pour construire et faire défiler une présentation',
    en: 'Library of React components to build and run a slide presentation',
  },
  course: 'R4.A.10',
  date: { start: '2024-02', end: '2024-03' },
  teamSize: 1,
  tags: ['dev'],
  stack: ['React', 'JavaScript', 'Tailwind CSS', 'React Markdown', 'React Syntax Highlighter'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `Le projet consiste à créer une liste de composants React qui permettent de construire une présentation.

Les composants doivent permettre de passer d'une diapositive à l'autre, d'aller directement à la première, à la dernière ou à une diapositive par son numéro, et d'afficher la diapositive courante, son numéro, le nombre total de diapositives, une barre d'outils, une mosaïque de toutes les diapositives et une miniature de la diapositive courante.

Une présentation doit pouvoir contenir des titres, des paragraphes, des listes à puces ou numérotées, des tableaux, des images, des figures avec légende, du code avec coloration syntaxique et du Markdown. Trois mises en page de diapositive sont prévues, titre seul, titre avec contenu et contenu seul, et le contenu peut tenir sur une colonne, sur deux colonnes ou être centré.`,
    en: `The project is about creating a set of React components that can be used to build a presentation.

The components must let users move from one slide to another, jump straight to the first, the last or a numbered slide, and show the current slide, its number, the total number of slides, a toolbar, a mosaic of every slide and a thumbnail of the current slide.

A presentation must be able to hold titles, paragraphs, bulleted or numbered lists, tables, images, figures with captions, code with syntax highlighting and Markdown. Three slide layouts are planned, title only, title with content and content only, and the content can fit in one column, in two columns or be centred.`,
  },
  description: {
    fr: `### Architecture

La présentation est décrite par un tableau d'objets, un par diapositive, avec un titre, une mise en page et un contenu. Chaque contenu a un type, texte, liste, tableau, image avec légende, code ou Markdown, qui détermine le composant utilisé pour l'afficher. Le composant Deck parcourt ce tableau et affiche la diapositive courante sous la barre d'outils.

L'état de la présentation passe par des contextes React, pour le nombre de diapositives, l'index de la diapositive courante et la fonction qui le modifie, et pour l'affichage des numéros. La barre d'outils et la mosaïque lisent et modifient ainsi le même état sans le recevoir en props à chaque niveau.

### Navigation

On passe d'une diapositive à l'autre avec les flèches du clavier ou les boutons de la barre d'outils, et les touches 1 à 9 mènent directement à la diapositive correspondante. La barre d'outils permet aussi d'aller à la première ou à la dernière diapositive, de choisir une diapositive dans un menu déroulant, d'afficher ou de masquer les numéros et de passer en plein écran avec l'API Fullscreen du navigateur. La mosaïque s'ouvre dans une fenêtre modale, rendue avec un portail React, et un clic sur une diapositive y mène directement.

![Diapositive de titre avec la barre d'outils](${dir}/gallery/1-titre.webp)
![Diapositive sur la navigation](${dir}/gallery/2-navigation.webp)
![Mosaïque des diapositives](${dir}/gallery/4-mosaique.webp)

### Contenus et mises en page

La présentation de démonstration montre chaque élément. La diapositive Affichage utilise deux colonnes, avec un paragraphe et une liste numérotée. Les tableaux existent avec ou sans en-tête et avec une légende, et les images ont leur légende. Le code est coloré avec React Syntax Highlighter et le Markdown est rendu avec React Markdown. La mise en forme s'appuie sur Tailwind CSS.

![Contenu sur deux colonnes](${dir}/gallery/3-affichage.webp)
![Tableaux avec et sans en-tête](${dir}/gallery/5-tableaux.webp)
![Images avec légende](${dir}/gallery/6-images.webp)
![Code coloré et Markdown](${dir}/gallery/7-code-markdown.webp)
![Diapositive sans titre](${dir}/gallery/8-sans-titre.webp)
![Diapositive de fin](${dir}/gallery/9-fin.webp)`,
    en: `### Architecture

The presentation is described by an array of objects, one per slide, with a title, a layout and some content. Each piece of content has a type, text, list, table, image with caption, code or Markdown, which sets the component used to display it. The Deck component goes through this array and shows the current slide under the toolbar.

The presentation state goes through React contexts, for the number of slides, the index of the current slide and the function that changes it, and for showing the slide numbers. The toolbar and the mosaic can therefore read and change the same state without receiving it as props at every level.

### Navigation

Users move from one slide to another with the keyboard arrows or the toolbar buttons, and the keys 1 to 9 jump straight to the matching slide. The toolbar also leads to the first or last slide, picks a slide from a dropdown menu, shows or hides the numbers and switches to full screen with the browser Fullscreen API. The mosaic opens in a modal window, rendered with a React portal, and clicking a slide goes straight to it.

![Title slide with the toolbar](${dir}/gallery/1-titre.webp)
![Slide about navigation](${dir}/gallery/2-navigation.webp)
![Mosaic of the slides](${dir}/gallery/4-mosaique.webp)

### Content and layouts

The demo presentation shows every element. The Display slide uses two columns, with a paragraph and a numbered list. Tables come with or without a header and with a caption, and images have their caption. Code is highlighted with React Syntax Highlighter and Markdown is rendered with React Markdown. The styling relies on Tailwind CSS.

![Content in two columns](${dir}/gallery/3-affichage.webp)
![Tables with and without a header](${dir}/gallery/5-tableaux.webp)
![Images with captions](${dir}/gallery/6-images.webp)
![Highlighted code and Markdown](${dir}/gallery/7-code-markdown.webp)
![Slide without a title](${dir}/gallery/8-sans-titre.webp)
![Closing slide](${dir}/gallery/9-fin.webp)`,
  },
}
