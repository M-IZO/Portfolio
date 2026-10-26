import type { Project } from '../../types/content'

const dir = 'images/projects/election-presidentielle'

export const electionPresidentielle: Project = {
  slug: 'election-presidentielle',
  title: { fr: 'Élection présidentielle', en: 'Presidential elections' },
  tagline: {
    fr: 'Corrélations entre les résultats électoraux et les données de population, dans un rapport Power BI',
    en: 'Correlations between election results and population data, in a Power BI report',
  },
  course: 'BD72',
  date: { start: '2026-02' },
  teamSize: 2,
  tags: ['data-science', 'data-viz', 'database'],
  stack: ['Power BI', 'Power Query M', 'Open data INSEE'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `La consigne demandait de réaliser l'analyse statistique d'un sujet sous trois angles différents.

Nous avons choisi de chercher des corrélations dans les résultats des élections présidentielles en France, à partir des données publiques du ministère de l'Intérieur et de l'INSEE. Les trois angles retenus sont la sociologie, le niveau de vie et le logement.`,
    en: `The brief asked for a statistical analysis of a topic from three different angles.

We chose to look for correlations in the results of French presidential elections, using public data from the Ministry of the Interior and INSEE. The three angles we kept are sociology, standard of living and housing.`,
  },
  description: {
    fr: `### Contexte

Nous avons étudié les élections présidentielles en France depuis 2002. Le vote en France étant anonyme, il n'est pas possible d'analyser les comportements individuels. L'étude repose donc sur des analyses statistiques à partir de données de population, croisées avec les résultats de chaque département.

### Modèle de données

Les données sont organisées en modèle en flocon. La table de faits contient les résultats, et les dimensions décrivent le département, le candidat avec sa nuance politique, le niveau de vie avec la répartition des revenus, le logement et la sociologie. Les données de population viennent du dossier complet de l'INSEE. Elles ont été nettoyées et mises en forme avec Power Query et son langage M avant d'être reliées au modèle.

![Modèle en flocon](${dir}/illustrations/modele-flocon.webp)

### Le rapport Power BI

Le rapport compte cinq pages reliées par des boutons de navigation en haut de chaque page. Sur chaque page, des segments permettent de changer l'année de l'élection (2002 à 2022), le tour et souvent la nuance politique. Tous les visuels de la page se mettent à jour en même temps.

La page d'accueil donne une vue d'ensemble, avec le nombre de voix exprimées, une carte par département, l'évolution de l'abstention et de la participation et la répartition des voix entre les candidats.

![Page d'accueil du rapport](${dir}/gallery/1-accueil.webp)

Le nuancier politique montre la part de chaque nuance à chaque élection dans un graphique en aires empilées. Un tableau hiérarchique détaille les voix par nuance, et on peut le déplier pour voir chaque candidat.

![Évolution des voix par nuance politique](${dir}/illustrations/nuancier-evolution.webp)
![Tableau des voix par nuance et par candidat](${dir}/illustrations/nuancier-tableau.webp)

Les votes blancs et nuls ont leur propre analyse. En 2022, les départements où leur part est la plus forte sont la Corse (3,76 %), la Creuse (3,09 %), l'Indre (2,96 %), la Haute-Vienne (2,95 %) et la Mayenne (2,91 %).

![Part des votes blancs et nuls par département en 2022](${dir}/illustrations/blancs-carte.webp)
![Répartition entre votes blancs et votes nuls](${dir}/illustrations/blancs-repartition.webp)
![Taux d'abstention et de participation par élection](${dir}/illustrations/abstention-participation.webp)

### Angle sociologique

La page Sociologie croise le vote avec la population de chaque département. Un paramètre de champ permet de choisir la catégorie socioprofessionnelle étudiée (ouvriers, employés, cadres ou autres), et un segment choisit la tranche d'âge (18 à 24 ans, 25 à 29 ans ou 30 ans et plus). On peut aussi changer l'année et le tour.

![Facteurs modifiables de la page Sociologie](${dir}/illustrations/sociologie-filtres.webp)

Un treemap présente les votes des départements les plus peuplés par nuance. Chez les adultes de plus de 30 ans, au premier tour de 2022, près de 3 électeurs sur 4 votent à droite ou à l'extrême droite dans le Pas-de-Calais, avec 43 % pour l'extrême droite et 31 % pour la droite. Dans les Yvelines, 44,6 % de la population concernée vote à droite, contre 40 % en Loire-Atlantique. Plus modérées, les Bouches-du-Rhône regroupent 30 % pour la droite et 36 % pour l'extrême droite.

![Votes par département et par nuance](${dir}/illustrations/sociologie-departements.webp)

Un nuage de points place chaque département selon la part de la catégorie choisie et le score de chaque nuance, avec une courbe de tendance par nuance. Chez les jeunes, l'exemple des ouvriers au premier tour de 2022 montre une forte corrélation positive avec l'extrême droite. Plus la part d'ouvriers est élevée, plus la population vote pour l'extrême droite. À l'inverse, la corrélation est négative pour la gauche.

![Vote selon la part d'ouvriers, avec les courbes de tendance](${dir}/illustrations/sociologie-ouvriers.webp)

### Niveau de vie

La page Niveau de vie ajoute deux curseurs qui filtrent les départements selon la part des prestations sociales dans les revenus et la médiane du niveau de vie. On choisit aussi l'année, le tour et les nuances à afficher, et un graphique en anneau montre les résultats des candidats pour la sélection.

![Facteurs modifiables de la page Niveau de vie](${dir}/illustrations/niveau-de-vie-filtres.webp)

La part des prestations sociales montre une forte corrélation positive avec l'extrême droite, constatée sur toutes les années. Pour la gauche, la corrélation est positive mais varie selon l'année. Elle est négative pour le centre et la droite, et plus légère pour les autres nuances. L'exemple ci-dessous porte sur le premier tour de 2012.

![Résultats des candidats au premier tour de 2012](${dir}/illustrations/niveau-de-vie-candidats.webp)
![Vote selon la part des prestations sociales, tour 1 de 2012](${dir}/illustrations/niveau-de-vie-prestations.webp)

### Logement

La page Logement reprend les segments d'année, de tour et de nuance, avec une carte qui affiche la part des ménages vivant dans une maison pour la sélection.

![Facteurs modifiables de la page Logement](${dir}/illustrations/logement-filtres.webp)

La part des propriétaires est corrélée positivement avec le vote d'extrême droite, sur toutes les années. La corrélation est négative pour la gauche, pour les écologistes et pour la droite, et plus légère pour les autres nuances.

![Vote selon la part de propriétaires](${dir}/illustrations/logement-proprietaires.webp)

Le pourcentage de maisons, présenté dans un graphique en ruban, montre des corrélations moins présentes. Les coupes du ruban montrent cette absence de corrélation.

![Vote selon le pourcentage de maisons](${dir}/illustrations/logement-maisons.webp)

### Bilan

L'anonymat du vote empêche de croiser les données, par exemple pour comparer le vote des femmes et des hommes, et le langage M de Power Query demande un vrai temps d'apprentissage. En revanche, les filtres rendent les analyses flexibles et les corrélations trouvées sont faciles à visualiser. Une piste serait d'ajouter un angle de vue sur la population diplômée.`,
    en: `### Context

We studied French presidential elections since 2002. Since voting in France is anonymous, individual behaviour cannot be analysed. The study therefore relies on statistical analysis of population data, crossed with the results of each department.

### Data model

The data is organised as a snowflake model. The fact table holds the results, and the dimensions describe the department, the candidate with their political leaning, the standard of living with the income distribution, housing and sociology. Population data comes from the INSEE complete files. It was cleaned and shaped with Power Query and its M language before being linked to the model.

![Snowflake model](${dir}/illustrations/modele-flocon.webp)

### The Power BI report

The report has five pages linked by navigation buttons at the top of each page. On every page, slicers change the election year (2002 to 2022), the round and often the political leaning. All the visuals on the page update together.

The home page gives an overview, with the number of votes cast, a map by department, the evolution of abstention and turnout and the split of votes between candidates.

![Report home page](${dir}/gallery/1-accueil.webp)

The political spectrum page shows the share of each leaning at each election in a stacked area chart. A matrix details the votes by leaning, and can be expanded to show each candidate.

![Votes by political leaning over time](${dir}/illustrations/nuancier-evolution.webp)
![Votes by leaning and by candidate](${dir}/illustrations/nuancier-tableau.webp)

Blank and spoiled ballots have their own analysis. In 2022, the departments where their share is highest are Corsica (3.76%), Creuse (3.09%), Indre (2.96%), Haute-Vienne (2.95%) and Mayenne (2.91%).

![Share of blank and spoiled ballots by department in 2022](${dir}/illustrations/blancs-carte.webp)
![Split between blank and spoiled ballots](${dir}/illustrations/blancs-repartition.webp)
![Abstention and turnout by election](${dir}/illustrations/abstention-participation.webp)

### Sociological angle

The Sociology page crosses the vote with the population of each department. A field parameter picks the occupational group studied (manual workers, employees, managers or others), and a slicer picks the age group (18 to 24, 25 to 29 or 30 and over). The year and the round can also be changed.

![Adjustable factors of the Sociology page](${dir}/illustrations/sociologie-filtres.webp)

A treemap shows the votes of the most populated departments by leaning. Among adults over 30, in the first round of 2022, nearly 3 voters out of 4 vote for the right or the far right in Pas-de-Calais, with 43% for the far right and 31% for the right. In Yvelines, 44.6% of this population votes for the right, against 40% in Loire-Atlantique. More moderate, Bouches-du-Rhône gives 30% to the right and 36% to the far right.

![Votes by department and by leaning](${dir}/illustrations/sociologie-departements.webp)

A scatter plot places each department by the share of the chosen group and the score of each leaning, with a trend line for each leaning. Among young people, the example of manual workers in the first round of 2022 shows a strong positive correlation with the far right. The higher the share of manual workers, the more the population votes for the far right. Conversely, the correlation is negative for the left.

![Votes by share of manual workers, with trend lines](${dir}/illustrations/sociologie-ouvriers.webp)

### Standard of living

The Standard of living page adds two sliders that filter departments by the share of social benefits in income and by median standard of living. You also choose the year, the round and the leanings to show, and a donut chart shows the candidates' results for the selection.

![Adjustable factors of the Standard of living page](${dir}/illustrations/niveau-de-vie-filtres.webp)

The share of social benefits shows a strong positive correlation with the far right, seen in every year. For the left, the correlation is positive but varies by year. It is negative for the centre and the right, and weaker for the other leanings. The example below is the first round of 2012.

![Candidates' results in the first round of 2012](${dir}/illustrations/niveau-de-vie-candidats.webp)
![Votes by share of social benefits, first round of 2012](${dir}/illustrations/niveau-de-vie-prestations.webp)

### Housing

The Housing page keeps the year, round and leaning slicers, with a card that shows the share of households living in a house for the selection.

![Adjustable factors of the Housing page](${dir}/illustrations/logement-filtres.webp)

The share of homeowners is positively correlated with the far right vote, in every year. The correlation is negative for the left, the greens and the right, and weaker for the other leanings.

![Votes by share of homeowners](${dir}/illustrations/logement-proprietaires.webp)

The percentage of houses, shown in a ribbon chart, shows fewer correlations. The cuts in the ribbon show this lack of correlation.

![Votes by percentage of houses](${dir}/illustrations/logement-maisons.webp)

### Takeaways

Anonymous voting prevents crossing the data, for example to compare how women and men vote, and the Power Query M language takes real time to learn. On the other hand, the filters make the analysis flexible and the correlations found are easy to see. A next step would be to add an angle on the population with a degree.`,
  },
  gallery: [
    { src: `${dir}/gallery/1-accueil.webp`, alt: { fr: 'Accueil', en: 'Home' } },
    { src: `${dir}/gallery/2-nuancier.webp`, alt: { fr: 'Nuancier politique', en: 'Political spectrum' } },
    { src: `${dir}/gallery/3-sociologie.webp`, alt: { fr: 'Sociologie', en: 'Sociology' } },
    { src: `${dir}/gallery/4-niveau-de-vie.webp`, alt: { fr: 'Niveau de vie', en: 'Standard of living' } },
    { src: `${dir}/gallery/5-logement.webp`, alt: { fr: 'Logement', en: 'Housing' } },
  ],
}
