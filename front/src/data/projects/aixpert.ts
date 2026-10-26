import type { Project } from '../../types/content'

const dir = 'images/projects/aixpert'

export const aixpert: Project = {
  slug: 'aixpert',
  title: { fr: 'Aixpert', en: 'Aixpert' },
  tagline: {
    fr: "Outil web de visualisation du trafic aérien et des effectifs, pour les chefs de salle du contrôle aérien",
    en: 'Web tool that shows air traffic and staffing in real time, for air traffic control room supervisors',
  },
  course: 'Alternance',
  date: { start: '2024-04' },
  teamSize: 1,
  tags: ['data-viz', 'dev', 'database'],
  stack: ['PHP', 'JavaScript', 'CSS', 'ECharts', 'MariaDB', 'SQL', 'API REST', 'Postman', 'AWS', 'Power BI'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `Je réalise mon alternance dans l'équipe chargée des outils de performance du centre de contrôle aérien d'Aix-en-Provence, qui gère le trafic en route du sud-est de la France.

Au départ, la salle de contrôle n'avait aucun outil pour voir en temps réel, au même endroit, le trafic prévu et les contrôleurs disponibles. Les chefs de salle s'appuyaient sur une feuille Excel remplie à la main, qui donnait le nombre de contrôleurs présents toutes les quinze minutes. Les données utiles existaient, mais elles étaient dispersées entre plusieurs sources et stockées dans des fichiers locaux.

Ma mission a été de construire toute la chaîne, de la collecte des données jusqu'à un outil web utilisable en salle, disponible jour et nuit et mis à jour chaque minute.`,
    en: `I am doing my work-study programme in the performance tools team of the Aix-en-Provence air traffic control centre, which handles en-route traffic over south-eastern France.

At first, the control room had no tool to see, in real time and in one place, the expected traffic and the available controllers. Room supervisors relied on an Excel sheet filled in by hand, giving the number of controllers on site every fifteen minutes. The useful data existed, but it was scattered across several sources and stored in local files.

My mission was to build the whole chain, from collecting the data to a web tool used in the control room, available day and night and updated every minute.`,
  },
  description: {
    fr: `### Une architecture en services

J'ai conçu et développé l'ensemble de l'architecture. Elle est découpée en briques indépendantes qui communiquent entre elles, pour que chaque partie puisse évoluer sans casser les autres.

- La collecte, des scripts planifiés récupèrent chaque jour les données de quatre sources, au format JSON, XML ou texte, puis les vérifient et les insèrent.
- Le stockage, deux bases de données séparées, l'une légère pour les données du jour, l'autre pour l'historique sur deux ans.
- L'API, un service à part sur son propre domaine, qui expose les données à tous les outils.
- Les outils web, dont Aixpert, qui ne parlent qu'à l'API et partagent une charte graphique commune.

![Architecture en services, de la collecte aux outils web](${dir}/illustrations/architecture.svg)

### Des données rapides à interroger

La base historique dépasse les 100 millions de lignes. Au début, insérer une journée prenait plusieurs heures et certaines requêtes plus de quinze minutes. Après avoir revu la structure des tables, une journée s'insère en trois minutes et toutes les requêtes répondent en moins d'une seconde. Les insertions tournent seules chaque jour, et les données trop anciennes sont supprimées automatiquement.

### Une API pour tous les outils

C'était la première API que je développais. Elle est écrite en PHP natif et suit les principes REST. Chaque application utilise une clé chiffrée en base, avec ses propres permissions et une limite de requêtes par minute pour éviter les abus. Toutes les données reçues sont vérifiées avant d'être traitées, l'API est versionnée pour ne pas casser les outils existants, et chaque route est documentée et testée avec Postman.

Plus tard, la même API a été rendue générique pour servir plusieurs centres. Les règles propres à chaque centre sont dans des fichiers de configuration, et chaque centre a sa propre base de données, sans changer le code des routes.

### De la maquette à l'outil web

Une première maquette sous Power BI a permis de tester les idées avec les chefs de salle. Elle a vite montré ses limites, avec des données qui ne se mettent pas à jour à la minute, peu de réactivité et une personnalisation réduite. Nous avons donc choisi de développer une vraie application web.

![Maquette sous Power BI](${dir}/illustrations/maquette-power-bi.webp)

Aixpert est écrit en PHP, JavaScript natif et CSS, avec la bibliothèque ECharts pour les graphiques, et suit une organisation MVC. Le graphique principal montre la charge sur toute la journée. Les contrôleurs disponibles forment une ligne grise, le trafic estimé apparaît en vert pour le passé et en jaune pour la suite, et les régulations sont en rouge. Une ligne de temps indique l'instant présent, et tout se met à jour chaque minute. Un cache évite d'interroger l'API pour les données qui ne changent pas dans la journée.

![Tableau de bord d'Aixpert](${dir}/gallery/1-tableau-de-bord.webp)

### Simuler avant de décider

À la demande des chefs de salle, l'outil propose deux modes de simulation. Le premier ajuste les effectifs équipe par équipe en un clic, avec une infobulle qui détaille les horaires et le temps restant de chaque agent. Le second permet de modifier les plages horaires directement dans un tableau. Chaque modification met à jour le graphique en direct, ce qui permet de vérifier tout de suite si un manque de personnel est comblé.

![Infobulle sur la capacité](${dir}/gallery/3-infobulle.webp)
![Simulation sur les plages horaires](${dir}/gallery/4-simulation-horaires.webp)
![Modification d'une plage dans le tableau](${dir}/gallery/5-modification.webp)
![Graphique après la modification](${dir}/gallery/6-apres-modification.webp)

Le tableau des plages horaires a été la partie la plus technique. Pour afficher sur une seule barre les cellules voisines qui ont la même valeur, sans fusionner les cellules du tableau, le code calcule et place un calque par-dessus chaque groupe. La structure du tableau reste intacte, et l'affichage reste stable quand la taille ou le contenu change.

### Le trafic en détail

D'autres vues complètent le tableau de bord, avec les relèves entre équipes, les événements du trafic, un graphique de charge pour chaque zone de l'espace aérien et un diagramme de Gantt des régulations de la journée.

![Relèves et événements du trafic](${dir}/gallery/7-releves-evenements.webp)
![Charge d'une zone de l'espace aérien](${dir}/gallery/8-charge-secteur.webp)
![Régulations de la journée](${dir}/gallery/9-regulations.webp)

### En salle, à Aix puis à Reims

Après avoir intéressé d'autres centres, l'outil a été rendu générique puis mis à disposition en expérimentation dans les salles de contrôle d'Aix-en-Provence et de Reims, où nous sommes allés le présenter aux chefs de salle. Les tests couvrent plus de 75 % des modules critiques, et une documentation complète permet de reprendre le projet.

![Présentation d'Aixpert aux chefs de salle de Reims](${dir}/gallery/10-presentation.webp)

### Ce que j'en retiens

Ce projet m'a appris à construire une architecture complète et évolutive, de la donnée brute jusqu'à l'interface, et à concevoir des visualisations lisibles pour des utilisateurs qui doivent décider vite. Il m'a aussi appris à prioriser sous contrainte de temps et à partir des retours des utilisateurs, et je suis fière de voir l'outil utilisé en conditions réelles.`,
    en: `### A service-based architecture

I designed and built the whole architecture. It is split into independent building blocks that talk to each other, so each part can evolve without breaking the others.

- Collection, scheduled scripts fetch the data from four sources every day, in JSON, XML or plain text, then check and insert it.
- Storage, two separate databases, a light one for the day's data and another for two years of history.
- The API, a separate service on its own domain, which exposes the data to every tool.
- The web tools, including Aixpert, which only talk to the API and share a common design system.

![Service-based architecture, from collection to the web tools](${dir}/illustrations/architecture.svg)

### Data that is fast to query

The history database holds more than 100 million rows. At first, inserting a day took several hours and some queries more than fifteen minutes. After reworking the table structure, a day is inserted in three minutes and every query answers in under a second. Inserts run on their own every day, and outdated data is deleted automatically.

### One API for every tool

It was the first API I built. It is written in plain PHP and follows REST principles. Each application uses a key encrypted in the database, with its own permissions and a limit of requests per minute to prevent abuse. All incoming data is checked before being processed, the API is versioned so existing tools keep working, and every route is documented and tested with Postman.

Later, the same API was made generic to serve several centres. The rules specific to each centre live in configuration files, and each centre has its own database, without changing the code of the routes.

### From mockup to web tool

A first mockup in Power BI let us test ideas with the room supervisors. It quickly showed its limits, with data that does not refresh every minute, little reactivity and limited customisation. We therefore chose to build a real web application.

![Power BI mockup](${dir}/illustrations/maquette-power-bi.webp)

Aixpert is written in PHP, plain JavaScript and CSS, with the ECharts library for the charts, and follows an MVC structure. The main chart shows the load over the whole day. Available controllers form a grey line, the estimated traffic appears in green for the past and in yellow for what comes next, and regulations are in red. A time line marks the present moment, and everything updates every minute. A cache avoids calling the API for data that does not change during the day.

![Aixpert dashboard](${dir}/gallery/1-tableau-de-bord.webp)

### Simulate before deciding

At the request of the room supervisors, the tool offers two simulation modes. The first adjusts staffing team by team in one click, with a tooltip detailing each agent's hours and remaining time. The second lets users change time slots directly in a table. Every change updates the chart live, so they can check right away whether a staff shortage is covered.

![Capacity tooltip](${dir}/gallery/3-infobulle.webp)
![Simulation on time slots](${dir}/gallery/4-simulation-horaires.webp)
![Changing a slot in the table](${dir}/gallery/5-modification.webp)
![Chart after the change](${dir}/gallery/6-apres-modification.webp)

The time slot table was the most technical part. To show neighbouring cells with the same value as a single bar, without merging the table cells, the code computes and places an overlay on top of each group. The table structure stays intact, and the display stays stable when the size or content changes.

### Traffic in detail

Other views complete the dashboard, with handovers between teams, traffic events, a load chart for each airspace area and a Gantt chart of the day's regulations.

![Handovers and traffic events](${dir}/gallery/7-releves-evenements.webp)
![Load of an airspace area](${dir}/gallery/8-charge-secteur.webp)
![Regulations of the day](${dir}/gallery/9-regulations.webp)

### In the control room, in Aix then in Reims

After catching the interest of other centres, the tool was made generic and then rolled out on a trial basis in the control rooms of Aix-en-Provence and Reims, where we went to present it to the room supervisors. Tests cover more than 75% of the critical modules, and full documentation makes it possible to take over the project.

![Presenting Aixpert to the Reims room supervisors](${dir}/gallery/10-presentation.webp)

### What I take away

This project taught me to build a complete and scalable architecture, from raw data to the interface, and to design clear visualisations for users who have to decide fast. It also taught me to prioritise under time pressure and from user feedback, and I am proud to see the tool used in real conditions.`,
  },
}
