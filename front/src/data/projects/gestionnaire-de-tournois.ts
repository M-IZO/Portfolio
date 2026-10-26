import type { Project } from '../../types/content'

const dir = 'images/projects/gestionnaire-de-tournois'

export const gestionnaireDeTournois: Project = {
  slug: 'gestionnaire-de-tournois',
  title: { fr: 'Gestionnaire de tournois', en: 'Tournament manager' },
  tagline: {
    fr: 'Base de données relationnelle et site web pour gérer des tournois de jeux de société',
    en: 'Relational database and website to run board game tournaments',
  },
  course: 'BD70',
  date: { start: '2024-11' },
  teamSize: 2,
  tags: ['database', 'dev'],
  stack: ['MySQL', 'MariaDB', 'SQL', 'PHP', 'Symfony', 'UML'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `L'objectif de ce projet est de concevoir et de développer un système de base de données relationnelle pour gérer les tournois de jeux de société. Ce système permettra aux organisateurs d'enregistrer les joueurs, de planifier les matchs, de suivre les résultats et de gérer les scores pour divers jeux de société tels que les échecs, Les Colons de Catane, Les Aventuriers du Rail, ou tout autre jeu de plateau populaire. Le système prendra également en charge les jeux en équipe, suivra les performances individuelles ou d'équipe, et générera des classements.

Les organisateurs peuvent créer un nouveau tournoi, choisir le type de jeu de société, définir le nombre de joueurs ou d'équipes et établir les règles des matchs, par exemple élimination directe, système suisse ou format ligue. Les appariements sont générés automatiquement en fonction du nombre de participants, et les joueurs avancent au tour suivant en fonction des résultats. Les classements se mettent à jour à chaque match et le système peut attribuer des récompenses aux meilleurs joueurs ou équipes.

Le modèle de base de données doit permettre toutes ces fonctionnalités, mais la partie web n'est demandée que pour la connexion, l'inscription des joueurs, la configuration des tournois, le suivi des scores et les classements. La base doit être conçue correctement et respecter la 3NF, avec MySQL ou MariaDB, des données factices en quantité, des requêtes optimisées et une historisation automatisée. Les livrables comprennent le diagramme de cas d'utilisation UML, le modèle conceptuel, le modèle logique, la documentation et un rapport sur les performances des requêtes principales.`,
    en: `The goal of this project is to design and build a relational database system to manage board game tournaments. The system lets organisers register players, schedule matches, track results and manage scores for various board games such as chess, The Settlers of Catan, Ticket to Ride, or any other popular board game. It also supports team games, tracks individual or team performance, and generates rankings.

Organisers can create a new tournament, choose the board game, set the number of players or teams and define the match rules, for example single elimination, Swiss system or league format. Pairings are generated automatically from the number of participants, and players move on to the next round based on the results. Rankings are updated after every match and the system can give awards to the best players or teams.

The database model has to support all of these features, but the website is only required for login, player registration, tournament setup, score tracking and rankings. The database must be designed properly and follow the third normal form, with MySQL or MariaDB, a large amount of dummy data, optimised queries and automated history tracking. The deliverables include the UML use case diagram, the conceptual and logical data models, the documentation and a report on the performance of the main queries.`,
  },
  description: {
    fr: `### Conception

Avant d'écrire la base, nous avons dessiné les pages du site et ce que chacune devait contenir. On y retrouve la page de connexion, la création de compte, le tableau de bord, la création et la modification d'un tournoi, l'inscription à un tournoi et le classement.

![Maquettes des pages du site](${dir}/illustrations/maquettes.webp)

Ces maquettes ont ensuite été reliées dans un parcours utilisateur. Après la connexion ou la création de compte, le joueur arrive sur le tableau de bord. De là, il accède aux tournois, à son profil et, s'il est organisateur, à la création des tournois et à la mise à jour des matchs.

![Parcours utilisateur entre les pages](${dir}/illustrations/parcours.webp)

### Base de données

Le parcours a servi à construire le schéma relationnel. Il relie les utilisateurs, leurs jeux préférés, les tournois, les équipes et les matchs, avec des tables pour les inscriptions et pour les règles de tournoi et d'élimination.

![Schéma relationnel de la base de données](${dir}/illustrations/schema-relationnel.webp)

### Site web

Le site est développé en PHP avec le framework Symfony et reprend ces pages avec une interface sombre. L'accueil présente les tournois en cours, chaque tournoi a sa page avec ses informations et le déroulement des matchs, et le classement des participants se met à jour avec les résultats. Chaque joueur dispose aussi d'une page Mon compte et de l'historique de ses tournois.

![Liste des tournois](${dir}/gallery/1-tournois.webp)
![Page d'un tournoi et déroulement des matchs](${dir}/gallery/2-tournoi.webp)
![Classement des participants](${dir}/gallery/3-classement.webp)
![Page Mon compte](${dir}/gallery/4-compte.webp)
![Historique des tournois](${dir}/gallery/5-historique.webp)`,
    en: `### Design

Before writing the database, we drew the pages of the website and what each one had to contain. They include the login page, account creation, the dashboard, creating and editing a tournament, signing up for a tournament and the rankings.

![Mockups of the website pages](${dir}/illustrations/maquettes.webp)

These mockups were then linked into a user flow. After logging in or creating an account, the player lands on the dashboard. From there they reach the tournaments, their profile and, for organisers, tournament creation and match updates.

![User flow between the pages](${dir}/illustrations/parcours.webp)

### Database

The user flow was used to build the relational schema. It links users, their favourite games, tournaments, teams and matches, with tables for sign-ups and for tournament and elimination rules.

![Relational database schema](${dir}/illustrations/schema-relationnel.webp)

### Website

The website is built in PHP with the Symfony framework and follows these pages with a dark interface. The home page shows the current tournaments, each tournament has its own page with its details and match schedule, and the participant rankings update with the results. Every player also has a My account page and the history of their tournaments.

![Tournament list](${dir}/gallery/1-tournois.webp)
![Tournament page and match schedule](${dir}/gallery/2-tournoi.webp)
![Participant rankings](${dir}/gallery/3-classement.webp)
![My account page](${dir}/gallery/4-compte.webp)
![Tournament history](${dir}/gallery/5-historique.webp)`,
  },
  gallery: [
    { src: `${dir}/gallery/1-tournois.webp`, alt: { fr: 'Liste des tournois', en: 'Tournament list' } },
    { src: `${dir}/gallery/2-tournoi.webp`, alt: { fr: "Page d'un tournoi et déroulement des matchs", en: 'Tournament page and match schedule' } },
    { src: `${dir}/gallery/3-classement.webp`, alt: { fr: 'Classement des participants', en: 'Participant rankings' } },
    { src: `${dir}/gallery/4-compte.webp`, alt: { fr: 'Page Mon compte', en: 'My account page' } },
    { src: `${dir}/gallery/5-historique.webp`, alt: { fr: 'Historique des tournois', en: 'Tournament history' } },
  ],
}
