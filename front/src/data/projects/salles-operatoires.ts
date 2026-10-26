import type { Project } from '../../types/content'

const dir = 'images/projects/salles-operatoires'

export const sallesOperatoires: Project = {
  slug: 'salles-operatoires',
  title: { fr: 'Salles opératoires', en: 'Operating rooms' },
  tagline: {
    fr: "Simulateur de bloc opératoire en C++ qui compare trois stratégies de planification face aux urgences",
    en: 'C++ operating theatre simulator comparing three scheduling strategies against emergencies',
  },
  course: 'PR72',
  date: { start: '2025-12' },
  teamSize: 2,
  tags: ['dev'],
  stack: ['C++17', 'Make', 'POO', 'UML'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `L'objectif est de développer en C++ un simulateur qui reproduit le fonctionnement réaliste d'un bloc opératoire hospitalier, avec ses salles d'opération, sa salle d'attente, sa salle de réveil et son personnel médical.

Le simulateur suit le parcours complet des patients, de leur arrivée en salle d'attente jusqu'à leur sortie de la salle de réveil, en tenant compte de la disponibilité des équipes et des opérations urgentes. L'enjeu est d'optimiser les indicateurs de performance malgré l'imprévisibilité des urgences, et de comparer plusieurs stratégies de planification.`,
    en: `The goal is to build in C++ a simulator that realistically reproduces how a hospital operating theatre works, with its operating rooms, waiting room, recovery room and medical staff.

The simulator follows the whole patient journey, from arriving in the waiting room to leaving the recovery room, taking into account team availability and emergency operations. The challenge is to optimise the performance indicators despite unpredictable emergencies, and to compare several scheduling strategies.`,
  },
  description: {
    fr: `### Modélisation

Le simulateur reproduit le parcours d'un patient électif, dont l'opération est programmée, de son arrivée jusqu'à son réveil, et des urgences viennent perturber ce programme. Les classes se répartissent en trois familles. Les acteurs représentent l'hôpital, avec les patients électifs ou urgents, leur maladie et sa criticité, leur opération et ses étapes, et le personnel, chirurgiens, anesthésistes et infirmiers, qui héritent d'une classe Staff. Des factories génèrent les personnes selon les proportions données, les opérations possibles, les maladies et les salles. Enfin, les classes de simulation lancent la simulation, gèrent les entrées de l'utilisateur, affichent l'état dans le terminal et calculent les indicateurs.

![Diagramme de classes complet](${dir}/illustrations/uml-complet.webp)
![Acteurs et infrastructure hospitalière](${dir}/illustrations/uml-acteurs.webp)
![Factories de génération](${dir}/illustrations/uml-factories.webp)
![Simulation et stratégies](${dir}/illustrations/uml-simulation.webp)

### Stratégies de planification

Chaque stratégie hérite d'une classe SchedulingStrategy, ce qui permet de les comparer sur les mêmes simulations.

- Par priorité, les patients sont triés selon un score qui combine la criticité médicale et le temps d'attente, pour qu'un patient peu prioritaire finisse quand même par être opéré. Pour chacun, l'algorithme cherche une salle libre puis compose une équipe d'au moins un chirurgien, un anesthésiste et un infirmier.
- First Fit Decreasing trie les patients par durée d'opération décroissante et place chacun dans la salle la moins fragmentée, pour limiter les trous dans le planning.
- L'équilibrage de charge suit la charge de chaque salle et de chaque professionnel et assigne chaque patient à la ressource la moins chargée, pour éviter les goulets d'étranglement.

Les urgences arrivent aléatoirement selon une fréquence configurée, ou quand l'utilisateur appuie sur la touche u. Leur criticité très élevée les place devant les patients électifs et fixe leur délai d'attente maximal. Une urgence qui dépasse ce délai reçoit une priorité infinie, et l'ordonnanceur peut reporter une opération élective peu perturbante pour l'accueillir, jamais celle d'un patient vulnérable.

### Simulation dans le terminal

Le menu propose une simulation de test, avec 50 personnes générées automatiquement, ou une simulation interactive où l'utilisateur règle le nombre de personnes et leur répartition, le nombre de salles, la durée de la simulation, la durée moyenne des opérations et de la surveillance et le taux d'arrivée des patients. Il choisit ensuite la stratégie.

À chaque pas, la boucle génère les événements aléatoires, appelle l'ordonnanceur puis fait avancer les patients, de l'opération à la salle de réveil puis à la sortie, en libérant les ressources au fur et à mesure. L'écran se met à jour en continu avec le journal des événements, les patients en attente, en opération et en réveil et le taux d'utilisation des salles, puis un rapport final donne les indicateurs.

![Menu et choix de la stratégie](${dir}/gallery/1-menu.webp)
![Simulation en cours après l'ajout d'une urgence](${dir}/gallery/2-simulation.webp)
![Résultats finaux](${dir}/gallery/3-resultats.webp)

### Résultats

Nous avons comparé les trois stratégies sur 100 itérations chacune, avec 50 personnes, 5 salles d'opération et huit heures de simulation. First Fit Decreasing complète le plus d'opérations, 19,01 en moyenne contre 18,68 pour la priorité et 16,62 pour l'équilibrage de charge. Elle est aussi la plus stable, avec un écart-type de 1,40, et garde le moins de patients en attente. L'équilibrage de charge occupe 96 % des salles contre 64 % pour FFD, mais cette meilleure utilisation ne produit ni plus d'opérations ni moins d'attente.

La simulation ne tient pas compte des complications pendant une opération, les durées sont fixes, les compétences du personnel ne sont pas intégrées et les salles d'attente et de réveil n'ont pas de gestion de leur capacité maximale. L'analyse montre qu'il n'existe pas de stratégie universelle, mais un compromis à faire selon les objectifs et les ressources de l'hôpital.`,
    en: `### Modelling

The simulator reproduces the journey of an elective patient, whose operation is planned, from arrival to waking up, and emergencies disrupt this schedule. The classes fall into three groups. The actors represent the hospital, with elective or emergency patients, their illness and its criticality, their operation and its steps, and the staff, surgeons, anaesthetists and nurses, who inherit from a Staff class. Factories generate people according to the given proportions, the possible operations, the illnesses and the rooms. Finally, the simulation classes run the simulation, handle user input, display the state in the terminal and compute the indicators.

![Full class diagram](${dir}/illustrations/uml-complet.webp)
![Actors and hospital infrastructure](${dir}/illustrations/uml-acteurs.webp)
![Generation factories](${dir}/illustrations/uml-factories.webp)
![Simulation and strategies](${dir}/illustrations/uml-simulation.webp)

### Scheduling strategies

Each strategy inherits from a SchedulingStrategy class, which makes it possible to compare them on the same simulations.

- With priority, patients are sorted by a score that combines medical criticality and waiting time, so that a low priority patient still ends up being operated on. For each one, the algorithm looks for a free room then builds a team of at least one surgeon, one anaesthetist and one nurse.
- First Fit Decreasing sorts patients by decreasing operation length and puts each one in the least fragmented room, to limit gaps in the schedule.
- Load balancing tracks the workload of each room and each professional and assigns each patient to the least loaded resource, to avoid bottlenecks.

Emergencies arrive randomly at a configured rate, or when the user presses the u key. Their very high criticality puts them ahead of elective patients and sets their maximum waiting time. An emergency that goes past this time gets infinite priority, and the scheduler can postpone a low impact elective operation to make room for it, never one of a vulnerable patient.

### Simulation in the terminal

The menu offers a test simulation, with 50 people generated automatically, or an interactive simulation where the user sets the number of people and their split, the number of rooms, the simulation length, the average operation and monitoring times and the patient arrival rate. The user then picks the strategy.

At each step, the loop generates random events, calls the scheduler then moves patients forward, from surgery to the recovery room then out, freeing resources as they go. The screen updates continuously with the event log, the patients waiting, in surgery and in recovery and the room utilisation rate, then a final report gives the indicators.

![Menu and strategy choice](${dir}/gallery/1-menu.webp)
![Simulation running after adding an emergency](${dir}/gallery/2-simulation.webp)
![Final results](${dir}/gallery/3-resultats.webp)

### Results

We compared the three strategies over 100 runs each, with 50 people, 5 operating rooms and eight hours of simulation. First Fit Decreasing completes the most operations, 19.01 on average against 18.68 for priority and 16.62 for load balancing. It is also the most stable, with a standard deviation of 1.40, and keeps the fewest patients waiting. Load balancing uses 96% of the rooms against 64% for FFD, but this higher utilisation brings neither more operations nor less waiting.

The simulation does not account for complications during an operation, durations are fixed, staff skills are not taken into account and the waiting and recovery rooms do not handle their maximum capacity. The analysis shows that there is no universal strategy, only a trade-off depending on the goals and resources of the hospital.`,
  },
}
