import type { Project } from '../../types/content'

const dir = 'images/projects/dofus-arena'

export const dofusArena: Project = {
  slug: 'dofus-arena',
  title: { fr: 'Dofus Arena', en: 'Dofus Arena' },
  tagline: {
    fr: 'Jeu de combat au tour par tour inspiré de Dofus, en C avec Allegro 5',
    en: 'Turn based fighting game inspired by Dofus, in C with Allegro 5',
  },
  course: 'ECE ING1',
  date: { start: '2022-12' },
  teamSize: 2,
  hidden: true,
  tags: ['dev'],
  stack: ['C', 'Allegro 5', 'Photoshop', 'Whimsical', 'GitHub'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `Le projet consiste à programmer en C, avec la bibliothèque graphique Allegro 5, un jeu de combat au tour par tour inspiré de Dofus.

Le cahier des charges prévoit un jeu entièrement jouable à la souris, pour 2 à 4 joueurs qui choisissent chacun une classe et commencent à une position aléatoire. Les interfaces attendues sont la sélection du nombre de joueurs, le choix des classes, la partie sur la carte et le classement final, qui propose de quitter, de rejouer la même partie ou d'en lancer une nouvelle. Pendant la partie, le jeu affiche les décors, les personnages, l'ordre de passage et le choix des actions du joueur.`,
    en: `The project is about programming in C, with the Allegro 5 graphics library, a turn based fighting game inspired by Dofus.

The specification calls for a game fully playable with the mouse, for 2 to 4 players who each choose a class and start at a random position. The expected interfaces are choosing the number of players, choosing the classes, the match on the map and the final ranking, which offers to quit, replay the same match or start a new one. During the match, the game shows the scenery, the characters, the turn order and the actions available to the player.`,
  },
  description: {
    fr: `### Règles du jeu

Chaque joueur commence avec 40 PV, 3 PA et 3 PM. À son tour, il peut se déplacer ou attaquer, au corps à corps ou avec l'un des sorts de sa classe. Chaque sort coûte des PA, a 10 % de chances d'échouer et retire un nombre aléatoire de PV. Le corps à corps, Intimidation, coûte 2 PA pour 1 à 5 PV. Les quatre classes sont inspirées de Dofus et ont chacune quatre sorts.

- Le portail Eliotrope, avec Rayon de Wakfu, Portail, Cicatrisation et Odyssée
- L'ombre de Sram, avec Piège sournois, Brume, Double et Épidémie
- Le sablier de Xélor, avec Pendule, Sablier de Xélor, Rayons ténébreux et Flou
- La pièce d'Ecaflip, avec Pile ou Face, Coussinets, Roue de la fortune et Tromperie

Chaque classe a son propre panneau d'actions, qui décrit ses sorts avec leur coût en PA et les PV qu'ils retirent.

@[Actions de l'Ecaflip](${dir}/illustrations/actions-ecaflip.webp)
@[Actions de l'Eliotrope](${dir}/illustrations/actions-eliotrope.webp)
@[Actions du Sram](${dir}/illustrations/actions-sram.webp)
@[Actions du Xélor](${dir}/illustrations/actions-xelor.webp)

### Architecture

Le jeu repose sur trois structures, la case, le joueur et le sort, rangées dans des tableaux pour le plateau, les sorts et les joueurs. Nous les avons schématisées avec Whimsical avant de coder.

![Structure d'un sort](${dir}/illustrations/schema-sorts.webp)
![Structure d'un joueur](${dir}/illustrations/schema-joueur.webp)
![Déroulement d'une attaque](${dir}/illustrations/schema-attaque.webp)

La partie graphique utilise Allegro 5 pour charger les bitmaps, dessiner des formes, afficher du texte et gérer la souris et le clavier. Une boucle while générale contient une boucle par écran, chacune pilotée par un booléen.

![Enchaînement des écrans](${dir}/illustrations/schema-ecrans.webp)
![Boucle de fonctionnement du jeu](${dir}/illustrations/schema-boucle.webp)

### Le jeu

Les bitmaps des menus et des panneaux ont été retravaillées dans le style de Dofus. Le menu mène à la sélection du nombre de joueurs, puis au choix des classes. La partie se joue ensuite sur une carte quadrillée, avec les portraits des joueurs et le panneau d'actions du joueur dont c'est le tour. Nous avons changé de carte en cours de projet. À la fin, un écran de classement propose de rejouer la même partie, d'en lancer une nouvelle ou de quitter.

![Menu](${dir}/gallery/1-menu.webp)
![Choix du nombre de joueurs](${dir}/gallery/2-nombre-joueurs.webp)
![Choix des classes](${dir}/gallery/3-classes.webp)
![Partie en cours](${dir}/gallery/4-partie.webp)
![Classement](${dir}/gallery/5-classement.webp)

### Bilan

Nous sommes fiers de l'assemblage, de l'architecture et de la qualité des bitmaps. Le tour de joueur, le déplacement et l'attaque nous ont posé le plus de difficultés, et le résultat final est un peu en dessous de nos attentes. Il aurait fallu s'y prendre plus à l'avance et mieux équilibrer les tâches. Ce projet nous a fait progresser en code et nous a appris à mieux utiliser GitHub.`,
    en: `### Game rules

Each player starts with 40 HP, 3 AP and 3 MP. On their turn, they can move or attack, in melee or with one of their class spells. Each spell costs AP, has a 10% chance to fail and removes a random number of HP. The melee attack, Intimidation, costs 2 AP for 1 to 5 HP. The four classes are inspired by Dofus and each have four spells.

- The Eliotrope portal, with Wakfu Ray, Portal, Healing and Odyssey
- The Sram shadow, with Sneaky Trap, Mist, Double and Epidemic
- The Xelor hourglass, with Pendulum, Xelor's Hourglass, Dark Rays and Blur
- The Ecaflip coin, with Heads or Tails, Paws, Wheel of Fortune and Deceit

Each class has its own action panel, which describes its spells with their AP cost and the HP they remove.

@[Ecaflip actions](${dir}/illustrations/actions-ecaflip.webp)
@[Eliotrope actions](${dir}/illustrations/actions-eliotrope.webp)
@[Sram actions](${dir}/illustrations/actions-sram.webp)
@[Xelor actions](${dir}/illustrations/actions-xelor.webp)

### Architecture

The game relies on three structures, the cell, the player and the spell, stored in arrays for the board, the spells and the players. We drew them in Whimsical before coding.

![Spell structure](${dir}/illustrations/schema-sorts.webp)
![Player structure](${dir}/illustrations/schema-joueur.webp)
![How an attack works](${dir}/illustrations/schema-attaque.webp)

The graphics use Allegro 5 to load bitmaps, draw shapes, display text and handle the mouse and keyboard. A main while loop contains one loop per screen, each driven by a boolean.

![Screen flow](${dir}/illustrations/schema-ecrans.webp)
![Game loop](${dir}/illustrations/schema-boucle.webp)

### The game

The bitmaps of the menus and panels were reworked in the Dofus style. The menu leads to choosing the number of players, then the classes. The match is then played on a grid map, with the players' portraits and the action panel of the player whose turn it is. We changed the map during the project. At the end, a ranking screen offers to replay the same match, start a new one or quit.

![Menu](${dir}/gallery/1-menu.webp)
![Choosing the number of players](${dir}/gallery/2-nombre-joueurs.webp)
![Choosing the classes](${dir}/gallery/3-classes.webp)
![Match in progress](${dir}/gallery/4-partie.webp)
![Ranking](${dir}/gallery/5-classement.webp)

### Takeaways

We are proud of how the parts came together, of the architecture and of the quality of the bitmaps. The player turn, movement and attacks gave us the most trouble, and the final result is a little below our expectations. We should have started earlier and shared the tasks more evenly. This project improved our coding skills and taught us to use GitHub better.`,
  },
}
