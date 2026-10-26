import type { Project } from '../../types/content'

const dir = 'images/projects/visualiseur-cgshop'

export const visualiseurCgshop: Project = {
  slug: 'visualiseur-cgshop',
  title: { fr: 'Visualiseur CG:SHOP', en: 'CG:SHOP visualiser' },
  tagline: {
    fr: 'Site web généré en C++ pour explorer les instances et les solutions de la compétition CG:SHOP 2024',
    en: 'Website generated in C++ to explore the instances and solutions of the CG:SHOP 2024 competition',
  },
  course: 'SAE S3 et S4',
  date: { start: '2023-09', end: '2024-03' },
  teamSize: 4,
  tags: ['dev', 'database'],
  stack: ['C++', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SVG', 'JSON', 'Doxygen', 'Jira', 'Scrum'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `La compétition [CG:SHOP 2024](https://cgshop.ibr.cs.tu-bs.de/competition/cg-shop-2024/#problem-description) porte sur un problème de packing de polygones, le Maximum Polygon Packing. Chaque instance fournit un grand polygone convexe, le conteneur, et un ensemble de petits polygones, les items, qui ont chacun une valeur et une quantité. Le but est de placer dans le conteneur les items qui rapportent le plus, sans les superposer ni les tourner. Les équipes soumettent leurs meilleures solutions pour chaque instance, et celle qui obtient le score total le plus élevé gagne.

Le sujet nous place dans une entreprise fictive, Griffon, qui propose des produits d'optimisation et d'aide à la décision et participe à la compétition pour démontrer ses compétences. Nous faisons partie de son secteur de visualisation de données et devons écrire un visualiseur des instances et des solutions, pour aider l'équipe d'optimisation et diffuser les résultats obtenus.

Le commanditaire attend un programme qui lit les fichiers JSON des instances et des solutions et génère un site web. Les langages du programme et du site étaient imposés, nous ne les avons pas choisis. Il y a environ 200 instances et une cinquantaine de solutions par instance, soit près de 10 000 fichiers. Le programme doit donc être très optimisé et ne regénérer que les fichiers modifiés, à la manière d'un Makefile. Le site doit être facile à utiliser et à partager, et les visuels sont exportés en SVG. Le projet se déroule sur deux semestres en méthode agile, avec des sprints de deux à trois semaines et une réunion avec le commanditaire au début et à la fin de chaque sprint.`,
    en: `The [CG:SHOP 2024](https://cgshop.ibr.cs.tu-bs.de/competition/cg-shop-2024/#problem-description) competition is about a polygon packing problem, Maximum Polygon Packing. Each instance gives a large convex polygon, the container, and a set of small polygons, the items, each with a value and a quantity. The goal is to place in the container the items worth the most, without overlapping or rotating them. Teams submit their best solutions for each instance, and the one with the highest total score wins.

The brief places us in a fictional company, Griffon, which offers optimisation and decision support products and takes part in the competition to show its skills. We belong to its data visualisation team and have to write a visualiser for the instances and solutions, to help the optimisation team and share the results.

The client expects a program that reads the JSON files of the instances and solutions and generates a website. The languages of the program and the website were imposed, we did not choose them. There are about 200 instances and around fifty solutions per instance, nearly 10,000 files. The program therefore has to be highly optimised and only regenerate the files that changed, like a Makefile. The website must be easy to use and to share, and the visuals are exported as SVG. The project runs over two semesters with an agile method, with two to three week sprints and a meeting with the client at the start and end of each sprint.`,
  },
  description: {
    fr: `### Organisation

Nous étions quatre, avec un product owner, une scrum master et deux développeurs. J'avais le rôle de scrum master. Les user stories sont suivies dans Jira et triées par importance dans le backlog, et chaque membre tient une feuille de temps qui sépare le code, la recherche et l'organisation. Les personas du développeur et de l'utilisateur nous ont aidés à garder en tête les besoins de chacun, et les roadmaps fixent les objectifs de chaque période.

![Persona du développeur](${dir}/illustrations/persona-dev.webp)
![Persona de l'utilisateur](${dir}/illustrations/persona-utilisateur.webp)
![Roadmap de septembre à novembre](${dir}/illustrations/roadmap-s3-1.webp)
![Roadmap de novembre à janvier](${dir}/illustrations/roadmap-s3-2.webp)
![Roadmap de janvier à mars](${dir}/illustrations/roadmap-s4.webp)

### Architecture

Une application C++ lit les fichiers JSON des instances, fournis par les organisateurs, et ceux des solutions, fournis par les participants. Elle génère plusieurs jeux de fichiers SVG, puis les pages HTML du site qui les affichent. Pendant le développement, le site était déployé sur Pedaweb.

![Génération du site web](${dir}/illustrations/generation.webp)

Le code s'organise autour des instances, des solutions, des polygones, des items et des items placés. La base de données sert à transmettre les informations de la génération des SVG à celle des pages HTML, surtout pour les détails des solutions. Elle ne contenait qu'une table au premier semestre, puis une table des équipes a été ajoutée et celle des solutions est devenue plus de trois fois plus large.

![Diagramme de classes](${dir}/illustrations/diagramme-classes.webp)
![Premier et nouveau modèle physique de la base de données](${dir}/illustrations/modeles-physiques.webp)

### Premier semestre

Les maquettes ont d'abord fixé deux pages, la liste des instances et la page des solutions d'une instance. Les données de ce semestre étaient les solutions de l'équipe Shadoks, dont la démarche est présentée dans [cet article](https://lipn.univ-paris13.fr/~mustafa/ANR-ADDS/CGV/fonseca-Shadoks.pdf).

![Maquette de la liste des instances](${dir}/illustrations/maquette-instances.webp)
![Maquette de la page des solutions](${dir}/illustrations/maquette-solutions.webp)

Le site affiche toutes les instances dans des cartes, avec une recherche et un tri par nombre d'items. La page d'une instance montre le conteneur et tous les items, avec un zoom. La page des solutions présente toutes les solutions d'une instance dans des cartes triables par valeur ou par nombre d'items. Pour la solution choisie, un panneau compare le nombre d'items placés, la valeur par rapport à la meilleure solution et l'aire occupée. Les items peuvent être coloriés de trois façons, selon leur valeur, selon leur valeur divisée par leur aire, ou avec une couleur par item.

![Liste des instances](${dir}/gallery/1-s3-instances.webp)
![Page d'une instance](${dir}/gallery/2-s3-instance.webp)
![Page des solutions d'une instance](${dir}/gallery/3-s3-solutions.webp)

### Second semestre

À la fin du premier semestre, le commanditaire a validé le site et voulait le publier. Les besoins ont ensuite changé plusieurs fois. Il était d'abord prévu de créer des comptes pour que chaque équipe dépose ses solutions, puis le site est devenu statique, avec les solutions ajoutées sur Git par le commanditaire. Le site affiche maintenant la meilleure solution des trois premières équipes de la compétition. Une quatrième équipe fictive nous a servi à vérifier qu'une nouvelle équipe s'ajoute sans modifier le code.

Nous avons ajouté un classement des équipes, une page par équipe, une recherche par expression régulière, le téléchargement des solutions en SVG et en JSON et un zoom à la molette, centré par défaut sur le conteneur. Les couleurs viennent maintenant d'une bibliothèque, et un même item garde la même couleur qu'il soit placé ou non. Le site final est [en ligne](https://pageperso.lis-lab.fr/guilherme.fonseca/cgshop24view/index.html).

![Maquette du classement](${dir}/illustrations/maquette-classement.webp)
![Accueil du site](${dir}/gallery/4-s4-accueil.webp)
![Page d'une instance](${dir}/gallery/5-s4-instance.webp)
![Détails d'un item au survol](${dir}/gallery/6-s4-details-item.webp)
![Classement des équipes](${dir}/gallery/8-s4-classement.webp)

### Optimisation

Le programme génère environ 5 Go de fichiers SVG et HTML. L'instance atris49462, une des plus grandes, donne à elle seule un fichier de 225 000 lignes. Nous avons créé un second jeu de SVG réduits, qui ne gardent que le conteneur et les items placés, sans les titres. Sans ces titres, les retours à la ligne ne servent plus et chaque fichier tient sur une seule ligne. L'accueil les charge avec des balises img au lieu d'intégrer tout le SVG, et les instances s'affichent de la plus petite à la plus grande pour que les premières apparaissent sans attendre. Le Makefile compile aussi avec l'option -Ofast.

![Solution de l'instance atris49462](${dir}/gallery/7-s4-grande-solution.webp)
![Fichier SVG avec les retours à la ligne](${dir}/illustrations/svg-avec-retours.webp)
![Fichier SVG réduit sur une seule ligne](${dir}/illustrations/svg-sans-retours.webp)

### Tests et bilan

Les fichiers JSON sont vérifiés avec la bibliothèque Python fournie par la compétition, et une suite de tests unitaires couvre le code C++ depuis le premier semestre. Le code est documenté en ligne avec Doxygen.

Les principaux défis ont été les demandes changeantes du commanditaire et l'échelle du projet, qui nous a obligés à revoir nos structures de données. Nous sommes fiers du résultat final et de la satisfaction du client, et la communication reste notre principal point d'amélioration.`,
    en: `### Organisation

There were four of us, with a product owner, a scrum master and two developers. I was the scrum master. User stories are tracked in Jira and sorted by priority in the backlog, and each member keeps a timesheet that separates code, research and organisation. The developer and user personas helped us keep everyone's needs in mind, and the roadmaps set the goals of each period.

![Developer persona](${dir}/illustrations/persona-dev.webp)
![User persona](${dir}/illustrations/persona-utilisateur.webp)
![Roadmap from September to November](${dir}/illustrations/roadmap-s3-1.webp)
![Roadmap from November to January](${dir}/illustrations/roadmap-s3-2.webp)
![Roadmap from January to March](${dir}/illustrations/roadmap-s4.webp)

### Architecture

A C++ application reads the JSON files of the instances, provided by the organisers, and those of the solutions, provided by the participants. It generates several sets of SVG files, then the HTML pages of the website that display them. During development, the website was deployed on Pedaweb.

![Website generation](${dir}/illustrations/generation.webp)

The code is built around instances, solutions, polygons, items and placed items. The database passes information from the SVG generation to the HTML generation, mostly for the solution details. It had a single table in the first semester, then a teams table was added and the solutions table became more than three times wider.

![Class diagram](${dir}/illustrations/diagramme-classes.webp)
![First and new physical model of the database](${dir}/illustrations/modeles-physiques.webp)

### First semester

The mockups first set two pages, the list of instances and the solutions page of an instance. The data for this semester were the solutions of the Shadoks team, whose approach is presented in [this paper](https://lipn.univ-paris13.fr/~mustafa/ANR-ADDS/CGV/fonseca-Shadoks.pdf).

![Mockup of the list of instances](${dir}/illustrations/maquette-instances.webp)
![Mockup of the solutions page](${dir}/illustrations/maquette-solutions.webp)

The website shows every instance in cards, with a search and a sort by number of items. An instance page shows the container and all the items, with a zoom. The solutions page lists every solution of an instance in cards that can be sorted by value or by number of items. For the selected solution, a panel compares the number of placed items, the value against the best solution and the area used. Items can be coloured in three ways, by value, by value divided by area, or with one colour per item.

![List of instances](${dir}/gallery/1-s3-instances.webp)
![Instance page](${dir}/gallery/2-s3-instance.webp)
![Solutions page of an instance](${dir}/gallery/3-s3-solutions.webp)

### Second semester

At the end of the first semester, the client approved the website and wanted to publish it. The needs then changed several times. The first plan was to create accounts so each team could upload its solutions, then the website became static, with the solutions added to Git by the client. The website now shows the best solution of the top three teams of the competition. A fourth, fictional team let us check that a new team can be added without changing the code.

We added a team leaderboard, a page per team, a regular expression search, downloading solutions as SVG and JSON and a mouse wheel zoom, centred on the container by default. Colours now come from a library, and the same item keeps the same colour whether it is placed or not. The final website is [online](https://pageperso.lis-lab.fr/guilherme.fonseca/cgshop24view/index.html).

![Leaderboard mockup](${dir}/illustrations/maquette-classement.webp)
![Home page](${dir}/gallery/4-s4-accueil.webp)
![Instance page](${dir}/gallery/5-s4-instance.webp)
![Item details on hover](${dir}/gallery/6-s4-details-item.webp)
![Team leaderboard](${dir}/gallery/8-s4-classement.webp)

### Optimisation

The program generates about 5 GB of SVG and HTML files. The atris49462 instance, one of the largest, produces a single file of 225,000 lines. We created a second set of reduced SVGs that only keep the container and the placed items, without the titles. Without these titles, line breaks are no longer needed and each file fits on a single line. The home page loads them with img tags instead of embedding the whole SVG, and instances are shown from smallest to largest so the first ones appear right away. The Makefile also compiles with the -Ofast flag.

![Solution of the atris49462 instance](${dir}/gallery/7-s4-grande-solution.webp)
![SVG file with line breaks](${dir}/illustrations/svg-avec-retours.webp)
![Reduced SVG file on a single line](${dir}/illustrations/svg-sans-retours.webp)

### Tests and takeaways

JSON files are checked with the Python library provided by the competition, and a unit test suite has covered the C++ code since the first semester. The code is documented online with Doxygen.

The main challenges were the client's changing requests and the scale of the project, which made us rework our data structures. We are proud of the final result and of the client's satisfaction, and communication remains our main area for improvement.`,
  },
  gallery: [
    { src: `${dir}/gallery/1-s3-instances.webp`, alt: { fr: 'Liste des instances, premier semestre', en: 'List of instances, first semester' } },
    { src: `${dir}/gallery/2-s3-instance.webp`, alt: { fr: "Page d'une instance, premier semestre", en: 'Instance page, first semester' } },
    { src: `${dir}/gallery/3-s3-solutions.webp`, alt: { fr: 'Page des solutions, premier semestre', en: 'Solutions page, first semester' } },
    { src: `${dir}/gallery/4-s4-accueil.webp`, alt: { fr: 'Accueil, second semestre', en: 'Home page, second semester' } },
    { src: `${dir}/gallery/5-s4-instance.webp`, alt: { fr: "Page d'une instance, second semestre", en: 'Instance page, second semester' } },
    { src: `${dir}/gallery/6-s4-details-item.webp`, alt: { fr: "Détails d'un item au survol", en: 'Item details on hover' } },
    { src: `${dir}/gallery/7-s4-grande-solution.webp`, alt: { fr: "Solution de l'instance atris49462", en: 'Solution of the atris49462 instance' } },
    { src: `${dir}/gallery/8-s4-classement.webp`, alt: { fr: 'Classement des équipes', en: 'Team leaderboard' } },
  ],
}
