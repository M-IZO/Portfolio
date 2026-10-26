import type { Project } from '../../types/content'

const dir = 'images/projects/completion-musicale'

export const completionMusicale: Project = {
  slug: 'completion-musicale',
  title: { fr: 'Complétion musicale', en: 'Music completion' },
  tagline: {
    fr: "Copilote de composition qui suggère la suite d'un morceau, comme l'autocomplétion du code",
    en: 'Composition copilot that suggests how a piece continues, like code autocompletion',
  },
  course: 'AI50',
  date: { start: '2026-09', end: '2027-01' },
  teamSize: 6,
  ongoing: true,
  tags: ['ai', 'data-science'],
  stack: ['Python', 'MidiTok', 'LSTM', 'Transformer', 'MIDI', 'Notion'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `Le projet consiste à créer un copilote pour aider les compositeurs. Comme l'autocomplétion du code, il suggère les notes suivantes à partir de la musique déjà écrite. Il ne compose pas un morceau entier à la place de l'artiste. Il propose des suites possibles, et le compositeur garde la main sur ce qu'il conserve.

Nous travaillons sur de la musique symbolique, au format MIDI, plutôt que sur de l'audio. Nous commençons par le piano seul, et plusieurs modèles de séquences seront entraînés et comparés, au moins un LSTM et un Transformer. Seul le meilleur sera intégré au logiciel final.

Ce projet est en cours, de septembre 2026 à janvier 2027. Cette page présente la spécification fonctionnelle rendue en octobre, et sera complétée au fil des résultats.`,
    en: `The project is about building a copilot to help composers. Like code autocompletion, it suggests the next notes from the music already written. It does not compose a whole piece instead of the artist. It offers possible continuations, and the composer stays in control of what is kept.

We work on symbolic music, in MIDI format, rather than audio. We start with solo piano, and several sequence models will be trained and compared, at least an LSTM and a Transformer. Only the best one will go into the final software.

This project is in progress, from September 2026 to January 2027. This page presents the functional specification delivered in October, and will be updated as results come in.`,
  },
  description: {
    fr: `### Le logiciel

Le modèle sera intégré à un éditeur MIDI dans le navigateur, pensé pour des compositeurs qui connaissent déjà les logiciels de musique. Ils peuvent importer et exporter leurs fichiers, enregistrer, éditer et mixer leurs pistes. Le cœur de l'outil est le copilote. On règle la créativité du modèle, on choisit les mesures à compléter et le sens de la génération, à la suite de la mélodie ou en harmonie dessous. Les suggestions apparaissent sur la ligne de temps, on les écoute dans leur contexte puis on les accepte ou on en demande une autre.

![Cas d'utilisation de l'éditeur](${dir}/illustrations/cas-utilisation.webp)

Pour ne pas réécrire tout un éditeur, nous partons d'un logiciel de composition open source auquel nous ajoutons la connexion à un serveur de prédiction en Python. L'objectif est de faire tourner le modèle en local, sans dépendre de serveurs coûteux.

![Prototype avec une suggestion, données simulées](${dir}/gallery/1-prototype.webp)

### Des fonctionnalités en option

Si le temps le permet, la génération pourra respecter la tonalité du morceau et la tessiture du piano. Un pinceau magique permettrait de peindre directement la zone à compléter sur le piano roll, et des suggestions en temps réel apparaîtraient sous le curseur pendant l'écriture.

![Détection de la tonalité à partir des accords](${dir}/illustrations/tonalite.webp)
![Modes de sélection du pinceau magique](${dir}/illustrations/pinceau-magique.webp)

### Choisir la représentation

Un fichier MIDI est une liste de notes, alors que les modèles attendent une suite de symboles, comme les mots d'une phrase. Avant d'entraîner quoi que ce soit, nous avons comparé huit tokenizers de la bibliothèque MidiTok sur 292 morceaux de piano classique, selon la longueur des séquences, la taille du vocabulaire et la fidélité après encodage puis décodage. Nous penchons vers REMI, très utilisé et bien documenté, dont les repères de mesure facilitent la génération d'un nombre précis de mesures.

![Taille du vocabulaire selon le nombre de pas par mesure](${dir}/illustrations/tokenizers.webp)

### La suite

Nous préparons maintenant le jeu de données et la chaîne d'entraînement commune, avant d'entraîner et de comparer les premiers modèles sur la complétion horizontale en novembre, puis verticale en décembre. Nous nous réunissons chaque semaine pour mettre nos résultats en commun.

![Feuille de route d'octobre à janvier](${dir}/illustrations/roadmap.webp)`,
    en: `### The software

The model will be built into a browser MIDI editor, designed for composers who already know music software. They can import and export their files, record, edit and mix their tracks. The heart of the tool is the copilot. You set the model's creativity, choose the bars to complete and the direction of generation, continuing the melody or harmonising under it. Suggestions appear on the timeline, you listen to them in context then accept them or ask for another one.

![Use cases of the editor](${dir}/illustrations/cas-utilisation.webp)

To avoid rewriting a whole editor, we start from an open-source composition software and add a connection to a Python prediction server. The goal is to run the model locally, without relying on expensive servers.

![Prototype with a suggestion, mocked data](${dir}/gallery/1-prototype.webp)

### Optional features

If time allows, generation could respect the key of the piece and the range of the piano. A magic brush would let you paint the area to complete directly on the piano roll, and real-time suggestions would appear under the cursor while writing.

![Key detection from the chords](${dir}/illustrations/tonalite.webp)
![Magic brush selection modes](${dir}/illustrations/pinceau-magique.webp)

### Choosing the representation

A MIDI file is a list of notes, while models expect a sequence of symbols, like the words of a sentence. Before training anything, we compared eight tokenizers from the MidiTok library on 292 classical piano pieces, by sequence length, vocabulary size and fidelity after encoding then decoding. We lean towards REMI, widely used and well documented, whose bar markers make it easy to generate an exact number of bars.

![Vocabulary size against steps per bar](${dir}/illustrations/tokenizers.webp)

### What comes next

We are now preparing the dataset and the shared training pipeline, before training and comparing the first models on horizontal completion in November, then vertical completion in December. We meet every week to pool our results.

![Roadmap from October to January](${dir}/illustrations/roadmap.webp)`,
  },
}
