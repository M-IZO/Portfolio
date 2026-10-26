import type { Project } from '../../types/content'

const dir = 'images/projects/betterboxd'
const videos = 'videos/projects/betterboxd'

export const betterboxd: Project = {
  slug: 'betterboxd',
  title: { fr: 'Betterboxd', en: 'Betterboxd' },
  tagline: {
    fr: 'Application mobile qui réunit les fans de cinéma, conçue avec une démarche centrée utilisateur',
    en: 'Mobile app that brings film fans together, designed with a user centred approach',
  },
  course: 'PR73',
  date: { start: '2026-05' },
  teamSize: 3,
  tags: ['design'],
  stack: ['Figma', 'Play & Pulse', 'Personas', 'User flow', 'Storyboard', 'Wireframes'],
  cover: `${dir}/cover.svg`,
  portrait: true,
  brief: {
    fr: `Ce projet d'IHM consiste à concevoir l'interface d'une application en suivant une démarche centrée sur l'utilisateur, de l'étude des besoins jusqu'au prototype. Il s'agit de concevoir des interfaces hommes-machines adaptées aux utilisateurs, en prenant en considération les besoins et les préférences culturelles des utilisateurs finaux, et de conduire le projet de la phase d'étude à sa réalisation.

La démarche est documentée dans un guide des connaissances, construit avec les fiches outils de la méthode [Play & Pulse](https://openlab.utbm.fr/play-n-pulse/). Notre groupe a choisi d'étudier l'activité « discuter de films et de séries ».

L'évaluation porte notamment sur l'ergonomie des interfaces, le découpage des tâches et la réalité de la collaboration entre les membres du projet, le respect du planning et la qualité des rendus, du cahier des charges à la vidéo et à la présentation.`,
    en: `This HCI project is about designing the interface of an application with a user centred approach, from the study of needs to the prototype. The goal is to design human machine interfaces suited to their users, taking into account the needs and cultural preferences of the end users, and to run the project from the study phase to its delivery.

The approach is documented in a knowledge guide, built with the tool sheets of the [Play & Pulse](https://openlab.utbm.fr/play-n-pulse/) method. Our group chose to study the activity "talking about films and series".

The assessment covers in particular the ergonomics of the interfaces, how tasks are split and how the team really works together, keeping to the schedule and the quality of the deliverables, from the specification to the video and the presentation.`,
  },
  description: {
    fr: `### Problématique

Lors des parcours d'expérience, un problème est remonté. Les applications actuelles sont parfois dures à prendre en main, et interagir avec la communauté d'une œuvre est difficile faute d'un espace commun de partage. Betterboxd a donc pour but de pallier ces problèmes en offrant une solution simple et agréable qui réunit les fans de cinéma.

L'application permet de partager sa passion pour les films et les séries avec ses proches et la communauté. On peut rejoindre des communautés, créer du contenu, écrire et lire des avis ou collectionner des badges, obtenus lors d'événements de communauté ou en allant voir le film au cinéma.

### Les personnes

Nous avons étudié la génération Z, les 15 à 25 ans. Leur consommation vidéo est dictée par les réseaux sociaux et par leur budget, et 73 % d'entre eux découvrent de nouveaux films via TikTok et les Reels Instagram. Depuis le Covid, beaucoup cherchent des espaces communautaires en ligne pour éviter l'isolement, et 53 % cherchent quelqu'un à qui parler de ce qu'ils aiment. Donner son avis devient une façon d'affirmer son identité, avec le besoin de partager visuellement par des mèmes et des images et de débattre en groupe. On observe aussi une méfiance envers le contenu généré par IA, jugé sans âme.

Une question en est ressortie. Comment transformer une activité considérée comme isolée en une communauté qui crée du lien social ?

![Fiche sur la génération Z, ses habitudes de consommation](${dir}/illustrations/cible-1.webp)
![Fiche sur la génération Z, son besoin de communauté](${dir}/illustrations/cible-2.webp)

Ces recherches ont donné quatre personas, avec leur situation, leurs habitudes, leurs compétences, ce qui les satisfait et ce qui les frustre.

![Premier persona](${dir}/illustrations/persona-1.webp)
![Deuxième persona](${dir}/illustrations/persona-2.webp)
![Troisième persona](${dir}/illustrations/persona-3.webp)
![Quatrième persona](${dir}/illustrations/persona-4.webp)

### Immersion

Nous avons ensuite observé des situations réelles où l'on parle de films. Deux vidéastes qui débattent d'un film comme entre amis, un youtubeur qui analyse les films avec humour, un autre qui résume les sorties des plateformes de streaming, mais aussi l'usage de Letterboxd et les discussions sur X.

Letterboxd est avant tout une application personnelle, dont le seul aspect social est la lecture des avis des autres. Ses utilisateurs se heurtent surtout à la confusion entre les fonctionnalités et à une pression sociale implicite. Sur X, l'ambiance est souvent toxique, le cinéma se perd parmi les autres sujets et il est très difficile d'entretenir un dialogue sain. Nous avons aussi évalué les interfaces de Letterboxd et d'IMDb avec les questionnaires DEEP, COOL et SUS.

![Immersion dans une vidéo de critique entre amis](${dir}/illustrations/immersion-critique.webp)
![Immersion sur Letterboxd](${dir}/illustrations/immersion-letterboxd.webp)
![Immersion dans les discussions de films sur X](${dir}/illustrations/immersion-x.webp)

### Parcours d'expérience et défis

Les parcours d'expérience suivent les émotions de chaque persona au fil de l'activité, avec ses moments d'enthousiasme et de frustration.

![Premier parcours d'expérience](${dir}/illustrations/parcours-1.webp)
![Deuxième parcours d'expérience](${dir}/illustrations/parcours-2.webp)
![Troisième parcours d'expérience](${dir}/illustrations/parcours-3.webp)

Ils ont fait émerger deux thèmes. Le premier est le partage. Les spectateurs aiment donner leur avis, mais les haters sont nombreux sur internet et il faut que les proches aient vu le film. Le second est la création. La génération Z crée beaucoup de contenu, ce qui fait naître des communautés, à condition qu'elles soient assez grandes pour prospérer.

Nous en avons tiré des défis, comme simplifier l'interface pour qu'elle soit comprise dès la première utilisation et utilise le moins de texte possible, inciter l'entourage à voir le film pour en parler ensuite, ou simplifier la création et le partage de contenu. Les expériences projetées décrivent ce que l'utilisateur doit ressentir. Il doit être curieux de l'avis des autres, heureux de communiquer dans la bienveillance, avoir un sentiment d'appartenance et se sentir accompli quand sa review reçoit un like ou un commentaire positif.

![Défis autour du partage](${dir}/illustrations/defis-partage.webp)
![Défis autour de la création](${dir}/illustrations/defis-creation.webp)
![Expériences projetées](${dir}/illustrations/experiences-projetees.webp)

### Ambiance

Nous avons comparé deux ambiances, une ambiance 70s old cinema vintage et une ambiance Y2K web nostalgia. Nous avons retenu la première, avec des couleurs chaudes, du grain et des formes géométriques.

![Ambiance 70s old cinema vintage](${dir}/illustrations/ambiance-70s.webp)
![Ambiance Y2K web nostalgia](${dir}/illustrations/ambiance-y2k.webp)

### Structure de l'application

L'arborescence organise l'application autour de la page d'accueil en cinq parties, la recherche, le profil, la messagerie, le feed et la création.

![Arborescence de l'application](${dir}/illustrations/arborescence.webp)

Le user flow détaille le parcours principal, de l'inscription jusqu'à la publication d'une review. Le storyboard raconte la même histoire du point de vue d'un fan qui sort du cinéma, ajoute le film à sa watchlist, laisse une review, lit celles des autres, puis crée du contenu et le partage avec la communauté. Les wireframes posent ensuite les écrans principaux, l'accueil, la recherche, la page d'un film avec ses commentaires et l'écriture d'une review.

![User flow](${dir}/illustrations/user-flow.webp)
![Storyboard](${dir}/illustrations/storyboard.webp)
![Wireframes](${dir}/illustrations/wireframe.webp)

### Prototype

Le prototype a été réalisé sur Figma. À la première ouverture, l'utilisateur crée son compte puis dit ce qu'il pense de quelques films, aimés, vus ou pas encore vus, pour remplir ses favoris. Un court tutoriel présente ensuite les fonctionnalités.

@[Inscription](${dir}/gallery/02-inscription.webp)
@[Choix des favoris](${dir}/gallery/03-favoris.webp)
@[Bienvenue](${dir}/gallery/04-bienvenue.webp)
@[Tutoriel](${dir}/gallery/05-tutoriel.webp)

Le feed réunit les publications des amis et des communautés, avec des likes et des commentaires. La recherche trouve des films, des séries, des utilisateurs et des communautés, que l'on peut rejoindre.

@[Feed](${dir}/gallery/06-fil.webp)
@[Commentaires](${dir}/gallery/07-commentaires.webp)
@[Recherche](${dir}/gallery/08-recherche.webp)
@[Communauté](${dir}/gallery/10-communaute.webp)

Chaque film ou série a sa page avec sa description, les avis de la communauté et les amis qui l'ont déjà vu. On peut y écrire sa review et cocher les épisodes vus, saison par saison.

@[Page d'un film](${dir}/gallery/11-film.webp)
@[Avis](${dir}/gallery/12-avis.webp)
@[Écriture d'une review](${dir}/gallery/13-ecrire-avis.webp)
@[Épisodes d'une série](${dir}/gallery/14-episodes.webp)

Le profil affiche le nombre de films et d'épisodes vus, les badges, les films et séries favoris et toutes les reviews. On peut aussi consulter le profil de ses amis et leur écrire.

@[Mon profil](${dir}/gallery/15-profil.webp)
@[Profil d'un ami](${dir}/gallery/16-profil-ami.webp)
@[Reviews d'un ami](${dir}/gallery/17-avis-ami.webp)
@[Messagerie](${dir}/gallery/18-messagerie.webp)

La messagerie permet de discuter et de s'envoyer des images. Enfin, le bouton de création propose de publier un post dans une communauté ou de créer un mème à partir d'une image, avec un texte en haut et en bas.

@[Conversation](${dir}/gallery/19-conversation.webp)
@[Bouton de création](${dir}/gallery/20-creation.webp)
@[Création d'un mème](${dir}/gallery/21-meme.webp)
@[Publication d'un post](${dir}/gallery/22-publication.webp)`,
    en: `### Problem

During the experience journeys, a problem came up. Current apps are sometimes hard to get to grips with, and interacting with the community around a film or series is difficult because there is no shared space. Betterboxd aims to solve this with a simple and pleasant app that brings film fans together.

The app lets people share their passion for films and series with their friends and the community. They can join communities, create content, write and read reviews or collect badges, earned during community events or by going to see the film at the cinema.

### The people

We studied Generation Z, people aged 15 to 25. Their video consumption is driven by social media and by their budget, and 73% of them find new films through TikTok and Instagram Reels. Since Covid, many look for online communities to avoid isolation, and 53% look for someone to talk to about what they love. Giving an opinion becomes a way to assert one's identity, with a need to share visually through memes and pictures and to debate in groups. There is also a distrust of AI generated content, seen as soulless.

One question came out of it. How can an activity seen as solitary become a community that creates social bonds?

![Sheet on Generation Z and its viewing habits](${dir}/illustrations/cible-1.webp)
![Sheet on Generation Z and its need for community](${dir}/illustrations/cible-2.webp)

This research led to four personas, with their situation, their habits, their skills, what satisfies them and what frustrates them.

![First persona](${dir}/illustrations/persona-1.webp)
![Second persona](${dir}/illustrations/persona-2.webp)
![Third persona](${dir}/illustrations/persona-3.webp)
![Fourth persona](${dir}/illustrations/persona-4.webp)

### Immersion

We then observed real situations where people talk about films. Two video makers debating a film like friends, a YouTuber who analyses films with humour, another who sums up the new releases on streaming platforms, as well as the use of Letterboxd and film discussions on X.

Letterboxd is above all a personal app, whose only social side is reading other people's reviews. Its users mostly struggle with confusing features and an implicit social pressure. On X, the mood is often toxic, cinema gets lost among other topics and keeping a healthy conversation is very hard. We also assessed the interfaces of Letterboxd and IMDb with the DEEP, COOL and SUS questionnaires.

![Immersion in a review video between friends](${dir}/illustrations/immersion-critique.webp)
![Immersion on Letterboxd](${dir}/illustrations/immersion-letterboxd.webp)
![Immersion in film discussions on X](${dir}/illustrations/immersion-x.webp)

### Experience journeys and challenges

The experience journeys follow the emotions of each persona throughout the activity, with their moments of excitement and frustration.

![First experience journey](${dir}/illustrations/parcours-1.webp)
![Second experience journey](${dir}/illustrations/parcours-2.webp)
![Third experience journey](${dir}/illustrations/parcours-3.webp)

Two themes came out of them. The first is sharing. Viewers love giving their opinion, but there are many haters online and friends need to have seen the film. The second is creation. Generation Z creates a lot of content, which gives rise to communities, as long as they are big enough to thrive.

We turned this into challenges, such as making the interface simple enough to be understood on first use with as little text as possible, encouraging friends and family to watch the film so they can talk about it afterwards, or making it easier to create and share content. The projected experiences describe what users should feel. They should be curious about other people's opinions, happy to communicate kindly, feel they belong and feel accomplished when their review gets a like or a positive comment.

![Challenges around sharing](${dir}/illustrations/defis-partage.webp)
![Challenges around creation](${dir}/illustrations/defis-creation.webp)
![Projected experiences](${dir}/illustrations/experiences-projetees.webp)

### Mood

We compared two moods, a 70s old cinema vintage mood and a Y2K web nostalgia mood. We kept the first one, with warm colours, grain and geometric shapes.

![70s old cinema vintage mood](${dir}/illustrations/ambiance-70s.webp)
![Y2K web nostalgia mood](${dir}/illustrations/ambiance-y2k.webp)

### App structure

The site map organises the app around the home page in five parts, search, profile, messages, feed and creation.

![Site map of the app](${dir}/illustrations/arborescence.webp)

The user flow details the main journey, from signing up to posting a review. The storyboard tells the same story from the point of view of a fan who leaves the cinema, adds the film to their watchlist, leaves a review, reads other people's, then creates content and shares it with the community. The wireframes then lay out the main screens, the home page, search, a film page with its comments and writing a review.

![User flow](${dir}/illustrations/user-flow.webp)
![Storyboard](${dir}/illustrations/storyboard.webp)
![Wireframes](${dir}/illustrations/wireframe.webp)

### Prototype

The prototype was made in Figma. On first launch, users create their account and say what they think of a few films, loved, seen or not seen yet, to fill in their favourites. A short tutorial then presents the features.

@[Sign up](${dir}/gallery/02-inscription.webp)
@[Choosing favourites](${dir}/gallery/03-favoris.webp)
@[Welcome](${dir}/gallery/04-bienvenue.webp)
@[Tutorial](${dir}/gallery/05-tutoriel.webp)

The feed gathers posts from friends and communities, with likes and comments. Search finds films, series, users and communities, which users can join.

@[Feed](${dir}/gallery/06-fil.webp)
@[Comments](${dir}/gallery/07-commentaires.webp)
@[Search](${dir}/gallery/08-recherche.webp)
@[Community](${dir}/gallery/10-communaute.webp)

Every film or series has its own page with its description, the community's reviews and the friends who have already seen it. Users can write their review there and tick the episodes they have seen, season by season.

@[Film page](${dir}/gallery/11-film.webp)
@[Reviews](${dir}/gallery/12-avis.webp)
@[Writing a review](${dir}/gallery/13-ecrire-avis.webp)
@[Episodes of a series](${dir}/gallery/14-episodes.webp)

The profile shows the number of films and episodes seen, the badges, the favourite films and series and every review. Users can also look at their friends' profiles and message them.

@[My profile](${dir}/gallery/15-profil.webp)
@[A friend's profile](${dir}/gallery/16-profil-ami.webp)
@[A friend's reviews](${dir}/gallery/17-avis-ami.webp)
@[Messages](${dir}/gallery/18-messagerie.webp)

Messages let users chat and send each other pictures. Finally, the create button offers to publish a post in a community or to make a meme from a picture, with a top and a bottom caption.

@[Conversation](${dir}/gallery/19-conversation.webp)
@[Create button](${dir}/gallery/20-creation.webp)
@[Making a meme](${dir}/gallery/21-meme.webp)
@[Publishing a post](${dir}/gallery/22-publication.webp)`,
  },
  videos: [
    {
      src: `${videos}/visite.mp4`,
      poster: `${dir}/posters/visite.webp`,
      title: { fr: 'Visite du prototype', en: 'Prototype tour' },
    },
    {
      src: `${videos}/publication.mp4`,
      poster: `${dir}/posters/publication.webp`,
      title: { fr: "Parcours complet jusqu'à la publication d'un post", en: 'Full journey up to publishing a post' },
    },
  ],
  gallery: [
    { src: `${dir}/gallery/01-lancement.webp`, alt: { fr: 'Lancement', en: 'Launch screen' } },
    { src: `${dir}/gallery/02-inscription.webp`, alt: { fr: 'Inscription', en: 'Sign up' } },
    { src: `${dir}/gallery/03-favoris.webp`, alt: { fr: 'Choix des favoris', en: 'Choosing favourites' } },
    { src: `${dir}/gallery/04-bienvenue.webp`, alt: { fr: 'Bienvenue', en: 'Welcome' } },
    { src: `${dir}/gallery/05-tutoriel.webp`, alt: { fr: 'Tutoriel', en: 'Tutorial' } },
    { src: `${dir}/gallery/06-fil.webp`, alt: { fr: 'Feed', en: 'Feed' } },
    { src: `${dir}/gallery/07-commentaires.webp`, alt: { fr: 'Commentaires', en: 'Comments' } },
    { src: `${dir}/gallery/08-recherche.webp`, alt: { fr: 'Recherche', en: 'Search' } },
    { src: `${dir}/gallery/09-recherche-communautes.webp`, alt: { fr: 'Recherche de communautés', en: 'Searching communities' } },
    { src: `${dir}/gallery/10-communaute.webp`, alt: { fr: 'Communauté', en: 'Community' } },
    { src: `${dir}/gallery/11-film.webp`, alt: { fr: "Page d'un film", en: 'Film page' } },
    { src: `${dir}/gallery/12-avis.webp`, alt: { fr: 'Avis', en: 'Reviews' } },
    { src: `${dir}/gallery/13-ecrire-avis.webp`, alt: { fr: "Écriture d'une review", en: 'Writing a review' } },
    { src: `${dir}/gallery/14-episodes.webp`, alt: { fr: "Épisodes d'une série", en: 'Episodes of a series' } },
    { src: `${dir}/gallery/15-profil.webp`, alt: { fr: 'Mon profil', en: 'My profile' } },
    { src: `${dir}/gallery/16-profil-ami.webp`, alt: { fr: "Profil d'un ami", en: "A friend's profile" } },
    { src: `${dir}/gallery/17-avis-ami.webp`, alt: { fr: "Reviews d'un ami", en: "A friend's reviews" } },
    { src: `${dir}/gallery/18-messagerie.webp`, alt: { fr: 'Messagerie', en: 'Messages' } },
    { src: `${dir}/gallery/19-conversation.webp`, alt: { fr: 'Conversation', en: 'Conversation' } },
    { src: `${dir}/gallery/20-creation.webp`, alt: { fr: 'Bouton de création', en: 'Create button' } },
    { src: `${dir}/gallery/21-meme.webp`, alt: { fr: "Création d'un mème", en: 'Making a meme' } },
    { src: `${dir}/gallery/22-publication.webp`, alt: { fr: "Publication d'un post", en: 'Publishing a post' } },
  ],
}
