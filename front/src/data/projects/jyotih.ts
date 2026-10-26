import type { Project } from '../../types/content'

const dir = 'images/projects/jyotih'
const play = 'https://napelic.itch.io/jyotih'

export const jyotih: Project = {
  slug: 'jyotih',
  title: { fr: 'Jyotih', en: 'Jyotih' },
  tagline: {
    fr: "Runner infini créé en 48 heures de game jam, gagnant et exposé à l'église des Trinitaires d'Arles",
    en: 'Endless runner made in a 48 hour game jam, winner and exhibited in the Église des Trinitaires in Arles',
  },
  course: 'Game jam',
  date: { start: '2023-10' },
  teamSize: 8,
  tags: ['dev'],
  stack: ['Godot', 'GDScript', 'Itch.io'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `La game jam a duré 48 heures, du 13 au 15 octobre 2023, dans le cadre d'[Octobre Numérique Faire Monde](https://octobre-numerique.fr/), un festival d'Arles consacré aux jeux vidéo et aux arts. Elle était organisée par Fabbula avec trois écoles arlésiennes, l'ENSP, MoPA et le BUT Informatique d'Arles. Le thème était « Anhad », l'incommensurable, un concept inatteignable et imperceptible qui pousse sans cesse à se dépasser.

Les jeux devaient être livrés compilés pour Windows, macOS, Android ou iOS, ou en WebGL, et adaptés à un contexte d'exposition, de préférence jouables à la manette. Chaque équipe présentait ensuite son jeu au jury en cinq minutes. Le jeu gagnant devait être présenté dans l'exposition principale du festival, à l'église des Trinitaires.`,
    en: `The game jam lasted 48 hours, from 13 to 15 October 2023, as part of [Octobre Numérique Faire Monde](https://octobre-numerique.fr/), a festival in Arles devoted to video games and the arts. It was organised by Fabbula with three schools in Arles, ENSP, MoPA and the BUT in Computer Science. The theme was "Anhad", the immeasurable, an unattainable and imperceptible concept that constantly pushes us to surpass ourselves.

Games had to be delivered as builds for Windows, macOS, Android or iOS, or in WebGL, and suited to an exhibition setting, ideally playable with a gamepad. Each team then presented its game to the jury in five minutes. The winning game was to be shown in the main exhibition of the festival, in the Église des Trinitaires.`,
  },
  description: {
    fr: `Notre équipe a gagné la game jam, avec le prix inter-écoles d'Arles, et le jeu a été exposé à l'église des Trinitaires. La démo est jouable sur itch.io, [jouer à Jyotih](${play}).

![Une partie de Jyotih, depuis le menu](videos/projects/jyotih/partie.mp4 ${dir}/posters/partie.webp)

### L'idée

Dans Jyotih, Anhad est abordé comme l'infini, et chaque aspect du jeu part de ce principe d'immensité, d'insaisissable et de solitude. Face à cette notion, comment ne pas se sentir seul quand on comprend que l'accomplissement total est hors de portée ? Le personnage, une ombre en quête de lumière, s'efface un peu plus à mesure que le temps passe. Son but est simple, combler ce vide qui se dérobe sans cesse.

Pour cela, il doit rassembler des feux follets parmi les décombres d'une civilisation éteinte. Le choix du feu follet comme source d'énergie vitale n'est pas anodin. Cette lumière faible et vacillante, souvent associée aux gaz qui s'échappent des marais, est une métaphore de ce qui est fugace et illusoire, et les peuples du passé en ont fait une légende. Le personnage erre parmi des monuments en ruine, vestiges d'un peuple autrefois habité par un désir de grandeur, et le thème prend alors tout son sens.

Le thème invitait à se tourner vers le sanskrit. Nous avons interprété Anhad à travers Jyotih, la lumière, un concept à la fois visible et imperceptible, inatteignable et omniprésent, qui reprend les principes fondamentaux d'Anhad.

![Menu du jeu, avec son titre en devanagari](${dir}/gallery/1-menu.webp)

### Le gameplay

Nous avons aussi voulu traduire l'infini dans la technique du jeu. Jyotih est un runner infini, qui peut se jouer sans fin. Son principe est de dépasser ses records et d'aller toujours plus loin, sans jamais pouvoir atteindre une fin.

Le personnage court sur deux niveaux de plateformes et peut passer de celle du haut à celle du bas, en sautant avec la barre d'espace et en se téléportant avec la touche E. Sa lumière diminue avec le temps, et il doit récupérer des feux follets pour rester en vie. Il faut donc sans cesse choisir sa plateforme, entre les obstacles à éviter et les feux follets à attraper. Comme le jeu était destiné à une exposition, les commandes restent volontairement simples, pour qu'un visiteur puisse le prendre en main en quelques secondes. Dans les crédits, on peut même déplacer une lumière au clavier.

![Partie en cours, parmi les ruines](${dir}/gallery/2-partie.webp)

@[Un feu follet](${dir}/illustrations/feu-follet.gif)
@[Un feu follet qui se dissipe](${dir}/illustrations/feu-follet-dissipation.gif)

### Génération procédurale et parallaxe

Un runner infini ne peut pas reposer sur un niveau dessiné à la main. Les éléments de décor sont donc générés de manière procédurale. Les ruines qui forment les plateformes et les obstacles s'enchaînent au hasard, si bien que chaque partie est différente et que la course peut continuer aussi longtemps que le joueur survit.

![Ruines assemblées par la génération procédurale](${dir}/illustrations/ruines-procedurales.webp)

Le décor est découpé en plusieurs couches qui défilent à des vitesses différentes. Les plus lointaines avancent lentement et le premier plan défile vite. Ce parallaxe donne de la profondeur à la scène, des grottes du fond jusqu'aux ruines du premier plan, et renforce l'impression d'immensité recherchée.

![Toutes les couches assemblées](${dir}/illustrations/parallax-assemble.webp)
![Couche du fond](${dir}/illustrations/parallax-1.webp)
![Deuxième couche](${dir}/illustrations/parallax-2.webp)
![Troisième couche](${dir}/illustrations/parallax-3.webp)
![Premier plan](${dir}/illustrations/parallax-4.webp)

### Mon rôle et le travail d'équipe

Nous étions huit, entre artistes et développeurs, et le jeu est le fruit d'un vrai travail d'équipe. J'ai participé au code du jeu, développé avec le moteur Godot. Les visuels sont l'œuvre des artistes de l'équipe, avec le personnage, les animations des feux follets, les ruines et les couches du décor.

En 48 heures, il fallait avancer en parallèle. Les artistes dessinaient pendant que nous codions les déplacements, la génération du décor et le parallaxe, puis nous intégrions leurs visuels au fur et à mesure. Une grande partie du travail a consisté à se mettre d'accord rapidement, à se répartir les tâches et à assembler le tout pour qu'il soit prêt à temps pour la présentation au jury.

![Le personnage](${dir}/illustrations/personnage.webp)
![Ruines servant de plateforme](${dir}/illustrations/ruines.webp)

### Victoire et exposition

Notre équipe a gagné la game jam, avec le prix inter-écoles d'Arles. Comme le prévoyait le règlement, Jyotih a ensuite été exposé pendant le festival à l'église des Trinitaires, une chapelle d'Arles, où les visiteurs ont pu y jouer. La démo est toujours en ligne, [jouer à Jyotih sur itch.io](${play}).

![Des visiteurs jouent à Jyotih pendant l'exposition](${dir}/gallery/3-exposition.webp)

J'ai aussi réalisé l'affiche de la compétition.

![Affiche de la compétition](${dir}/gallery/4-affiche.webp)

### Ce que ça m'a appris

Cette game jam m'a appris à concevoir et livrer un jeu complet en 48 heures, en faisant des choix rapides et en me concentrant sur l'essentiel. Elle m'a surtout appris à travailler en équipe avec des artistes, à intégrer leurs visuels et leurs animations au code et à avancer ensemble sous la contrainte du temps. J'ai aussi découvert des techniques propres au jeu vidéo, comme la génération procédurale et le parallaxe. Voir des visiteurs jouer à notre jeu pendant l'exposition a été une vraie récompense.`,
    en: `Our team won the game jam, with the Arles inter-school prize, and the game was exhibited in the Église des Trinitaires. The demo can be played on itch.io, [play Jyotih](${play}).

![A run of Jyotih, from the menu](videos/projects/jyotih/partie.mp4 ${dir}/posters/partie.webp)

### The idea

In Jyotih, Anhad is approached as infinity, and every aspect of the game comes from this principle of immensity, elusiveness and solitude. Faced with this notion, how can we avoid feeling alone when we realise that total fulfilment is out of reach? The character, a shadow in search of light, fades a little more as time goes by. Its goal is simple, to fill this ever escaping void.

To do so, it must gather will-o'-the-wisps from the rubble of an extinct civilisation. Choosing the will-o'-the-wisp as a source of vital energy was no accident. This faint, flickering light, often linked to the gas escaping from marshes, is a metaphor for what is fleeting and illusory, and people of the past turned it into a legend. The character wanders among ruined monuments, the remains of a people once driven by a desire for grandeur, and the theme takes on its full meaning.

The theme invited us to turn to Sanskrit. We interpreted Anhad through Jyotih, the light, a concept both visible and imperceptible, unattainable and omnipresent, which carries the fundamental principles of Anhad.

![Game menu, with its title in Devanagari](${dir}/gallery/1-menu.webp)

### Gameplay

We also wanted to bring infinity into the technical side of the game. Jyotih is an endless runner that can be played forever. The point is to beat your records and go further and further, without ever reaching an end.

The character runs on two levels of platforms and can move between the top and the bottom one, jumping with the space bar and teleporting with the E key. Its light fades over time, and it must collect will-o'-the-wisps to stay alive. You keep choosing your platform, between obstacles to avoid and will-o'-the-wisps to catch. Since the game was meant for an exhibition, the controls are deliberately simple, so a visitor can pick it up in a few seconds. In the credits, you can even move a light with the keyboard.

![A run among the ruins](${dir}/gallery/2-partie.webp)

@[A will-o'-the-wisp](${dir}/illustrations/feu-follet.gif)
@[A will-o'-the-wisp fading away](${dir}/illustrations/feu-follet-dissipation.gif)

### Procedural generation and parallax

An endless runner cannot rely on a hand drawn level. The scenery elements are therefore generated procedurally. The ruins that form the platforms and obstacles are chained at random, so every run is different and the race can go on as long as the player survives.

![Ruins assembled by the procedural generation](${dir}/illustrations/ruines-procedurales.webp)

The scenery is split into several layers that scroll at different speeds. The furthest ones move slowly and the foreground scrolls fast. This parallax gives depth to the scene, from the caves in the back to the ruins in the foreground, and strengthens the feeling of immensity we were after.

![All the layers together](${dir}/illustrations/parallax-assemble.webp)
![Back layer](${dir}/illustrations/parallax-1.webp)
![Second layer](${dir}/illustrations/parallax-2.webp)
![Third layer](${dir}/illustrations/parallax-3.webp)
![Foreground](${dir}/illustrations/parallax-4.webp)

### My role and teamwork

There were eight of us, artists and developers, and the game is the result of real teamwork. I worked on the code of the game, built with the Godot engine. The visuals are the work of the artists of the team, with the character, the will-o'-the-wisp animations, the ruins and the scenery layers.

In 48 hours, we had to work in parallel. The artists drew while we coded the movement, the scenery generation and the parallax, then we integrated their visuals as they came. A large part of the work was agreeing quickly, sharing the tasks and putting everything together in time for the presentation to the jury.

![The character](${dir}/illustrations/personnage.webp)
![Ruins used as a platform](${dir}/illustrations/ruines.webp)

### Win and exhibition

Our team won the game jam, with the Arles inter-school prize. As the rules planned, Jyotih was then exhibited during the festival in the Église des Trinitaires, a chapel in Arles, where visitors could play it. The demo is still online, [play Jyotih on itch.io](${play}).

![Visitors playing Jyotih during the exhibition](${dir}/gallery/3-exposition.webp)

I also made the poster of the competition.

![Poster of the competition](${dir}/gallery/4-affiche.webp)

### What I learned

This game jam taught me to design and ship a complete game in 48 hours, making quick choices and focusing on what matters. Above all, it taught me to work as a team with artists, to integrate their visuals and animations into the code and to move forward together under time pressure. I also discovered techniques specific to video games, such as procedural generation and parallax. Watching visitors play our game during the exhibition was a real reward.`,
  },
}
