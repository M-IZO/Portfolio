import type { Project } from '../../types/content'

const dir = 'images/projects/sudoku'

export const sudoku: Project = {
  slug: 'sudoku',
  title: { fr: 'Sudoku', en: 'Sudoku' },
  tagline: {
    fr: 'Jeu de Sudoku en Java, conçu en programmation orientée objet',
    en: 'Sudoku game in Java, designed with object oriented programming',
  },
  course: 'PR70',
  date: { start: '2024-11' },
  teamSize: 2,
  tags: ['dev'],
  stack: ['Java', 'Swing', 'JSON', 'API REST', 'UML', 'Astah'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `Le Sudoku est un jeu de logique qui consiste à remplir une grille de 9x9 avec des chiffres de 1 à 9, de manière que chaque ligne, chaque colonne et chaque région de 3x3 contienne tous les chiffres de 1 à 9, sans répétition.

Le principe de base minimal est de programmer une partie avec un joueur. Les différentes interactions se font via une interface graphique simple qui propose de jouer, et l'ordinateur doit valider les coups effectués par le joueur. Il faut aussi pouvoir commencer une nouvelle partie, sauvegarder une partie en cours et charger une ancienne partie. Un administrateur peut ajouter de nouvelles grilles et définir des niveaux de difficulté, et l'utilisateur choisit son niveau parmi ceux définis par l'administrateur. Les scores des joueurs sont affichés, avec des points selon la difficulté de la grille, un malus pour chaque erreur et un bonus de temps.

Les interfaces doivent être conviviales, l'implémentation doit respecter les principes de l'orienté objet en Java et les codes doivent être bien commentés. La gestion des fichiers est obligatoire. Le rapport présente le projet, le diagramme de classes, les fonctionnalités implémentées et les difficultés rencontrées, et la soutenance se termine par une démonstration en direct du jeu.`,
    en: `Sudoku is a logic game where you fill a 9x9 grid with digits from 1 to 9, so that each row, each column and each 3x3 region contains all the digits from 1 to 9, without repetition.

The minimum is to program a game for one player. Interactions go through a simple graphical interface, and the computer must validate the player's moves. It must also be possible to start a new game, save a game in progress and load an old one. An administrator can add new grids and define difficulty levels, and the user picks their level among those defined by the administrator. Player scores are displayed, with points based on the grid difficulty, a penalty for each mistake and a time bonus.

The interfaces must be user friendly, the implementation must follow object oriented principles in Java and the code must be well commented. File handling is mandatory. The report presents the project, the class diagram, the implemented features and the difficulties met, and the defence ends with a live demo of the game.`,
  },
  description: {
    fr: `### Conception

Ce projet consistait à développer un jeu de Sudoku en Java avec une interface simple et intuitive. L'idée est de permettre au joueur de lancer une partie, sauvegarder sa progression, choisir un niveau de difficulté et voir ses scores. Un administrateur peut aussi personnaliser les grilles et les niveaux.

Le modèle du jeu repose sur quelques classes. Game instancie une nouvelle partie avec un puzzle et sa solution, et gère le score et la sauvegarde. Grid contient les cellules et initialise la grille, Cell garde la valeur choisie par le joueur, et Note représente les chiffres que le joueur pense possibles pour une case, comme dans les jeux de sudoku en ligne. ApiFetcher récupère les puzzles et leur solution depuis une API, pour plusieurs difficultés, en s'assurant que la solution de la grille vide est unique.

L'interface est séparée du modèle. HomeInterface représente le menu, avec la nouvelle partie, le chargement et l'interface administrateur. MainInterface affiche la grille et les boutons, et gère la vérification automatique. GridPanel et CellPanel affichent la grille et les cellules et vérifient les valeurs, une par une ou sur toute la grille. ThemeUtils applique le même style à tous les boutons et à tous les textes.

Les sauvegardes passent par la classe abstraite FileManager, dont héritent ReadFile et WriteFile. ReadFile relit une partie enregistrée pour remettre les données dans une grille, et WriteFile écrit les valeurs entrées par le joueur et la solution dans un fichier.

![Diagramme UML simplifié](${dir}/illustrations/uml-simplifie.webp)
![Diagramme UML complet](${dir}/illustrations/uml-complet.webp)

### Fonctionnalités

Toutes les fonctionnalités du cahier des charges ont été implémentées. L'accueil affiche le score total, le nombre de parties restantes pour la journée et le nombre de parties jouées. Le joueur peut commencer une nouvelle partie en choisissant la difficulté, ou reprendre une partie sauvegardée.

![Accueil du jeu](${dir}/gallery/1-accueil.webp)
![Choix de la difficulté](${dir}/gallery/2-difficulte.webp)
![Chargement d'une partie sauvegardée](${dir}/gallery/7-chargement.webp)

Pendant la partie, le joueur remplit la grille avec les boutons de chiffres ou le clavier. Quand il choisit un chiffre, les cases qui le contiennent sont mises en évidence. Il peut effacer une case, demander un indice, sauvegarder avec Ctrl+S et valider sa grille avec Ctrl+Entrée. La vérification automatique montre les cases justes, et le score baisse à chaque erreur ou indice.

![Grille en cours de partie](${dir}/gallery/3-grille.webp)
![Mise en évidence d'un chiffre](${dir}/gallery/4-mise-en-evidence.webp)
![Vérification automatique](${dir}/gallery/5-verification.webp)
![Grille terminée](${dir}/gallery/6-victoire.webp)

Les règles du jeu sont accessibles depuis l'icône des paramètres de l'accueil.

![Règles du jeu](${dir}/gallery/9-regles.webp)

L'administrateur accède à son panneau avec un mot de passe. Il choisit les difficultés proposées aux joueurs et le nombre de nouvelles grilles qu'ils peuvent jouer par jour.

![Panneau administrateur](${dir}/gallery/8-administration.webp)

### Bilan

Nous avons fait attention à ce que les interfaces soient conviviales et que le code respecte les principes de la programmation orientée objet en Java. Les parties sont gérées par fichiers, et le code est commenté pour en faciliter la compréhension et la maintenance.`,
    en: `### Design

This project was about building a Sudoku game in Java with a simple and intuitive interface. The player can start a game, save their progress, choose a difficulty level and see their scores. An administrator can also customise the grids and the levels.

The game model relies on a few classes. Game creates a new game with a puzzle and its solution, and handles the score and saving. Grid holds the cells and initialises the grid, Cell keeps the value chosen by the player, and Note represents the digits the player thinks are possible for a cell, as in online sudoku games. ApiFetcher gets puzzles and their solutions from an API, for several difficulties, making sure the empty grid has a unique solution.

The interface is separate from the model. HomeInterface is the menu, with new game, loading and the administrator interface. MainInterface displays the grid and the buttons, and handles the automatic check. GridPanel and CellPanel display the grid and the cells and check the values, one by one or for the whole grid. ThemeUtils applies the same style to every button and text.

Saving goes through the abstract class FileManager, extended by ReadFile and WriteFile. ReadFile reads a saved game back into a grid, and WriteFile writes the player's values and the solution to a file.

![Simplified UML diagram](${dir}/illustrations/uml-simplifie.webp)
![Full UML diagram](${dir}/illustrations/uml-complet.webp)

### Features

Every feature of the specification was implemented. The home screen shows the total score, the number of games left for the day and the number of games played. The player can start a new game by choosing the difficulty, or resume a saved game.

![Game home screen](${dir}/gallery/1-accueil.webp)
![Choosing the difficulty](${dir}/gallery/2-difficulte.webp)
![Loading a saved game](${dir}/gallery/7-chargement.webp)

During a game, the player fills the grid with the digit buttons or the keyboard. When a digit is selected, the cells that contain it are highlighted. The player can erase a cell, ask for a hint, save with Ctrl+S and submit the grid with Ctrl+Enter. The automatic check shows the correct cells, and the score drops with each mistake or hint.

![Grid during a game](${dir}/gallery/3-grille.webp)
![Highlighting a digit](${dir}/gallery/4-mise-en-evidence.webp)
![Automatic check](${dir}/gallery/5-verification.webp)
![Completed grid](${dir}/gallery/6-victoire.webp)

The rules of the game are available from the settings icon on the home screen.

![Game rules](${dir}/gallery/9-regles.webp)

The administrator opens their panel with a password. They choose the difficulties offered to players and the number of new grids they can play each day.

![Administrator panel](${dir}/gallery/8-administration.webp)

### Takeaways

We made sure the interfaces were user friendly and that the code followed object oriented principles in Java. Games are stored in files, and the code is commented to make it easier to understand and maintain.`,
  },
}
