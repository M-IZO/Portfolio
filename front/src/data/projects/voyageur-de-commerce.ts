import type { Project } from '../../types/content'

const dir = 'images/projects/voyageur-de-commerce'

export const voyageurDeCommerce: Project = {
  slug: 'voyageur-de-commerce',
  title: { fr: 'Voyageur de commerce', en: 'Travelling salesman' },
  tagline: {
    fr: 'Six algorithmes exacts, approchés et heuristiques comparés sur le problème du voyageur de commerce',
    en: 'Six exact, approximate and heuristic algorithms compared on the travelling salesman problem',
  },
  course: 'IA71',
  date: { start: '2025-04' },
  teamSize: 1,
  tags: ['ai', 'data-science'],
  stack: ['Python', 'Jupyter', 'NumPy', 'Matplotlib', 'NetworkX', 'Cartopy'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `Le problème du voyageur de commerce consiste à trouver le plus court cycle qui passe une seule fois par chaque ville avant de revenir au point de départ. Il est l'un des problèmes les plus célèbres en informatique théorique et en recherche opérationnelle. Étant NP-complet, il sert de référence pour évaluer l'efficacité des différentes approches algorithmiques.

Le projet demandait d'implémenter un générateur d'instances puis plusieurs méthodes de résolution, la force brute, l'algorithme de Held-Karp, l'algorithme de Christofides et Serdyukov et la recherche locale avec 2-opt, 3-opt et le recuit simulé. Le rendu tient dans un seul notebook Jupyter.

Le code ne rapportait aucun point. L'évaluation portait sur la présentation de la théorie de la complexité, l'étude théorique de chaque algorithme et surtout la comparaison empirique selon le temps d'exécution, la qualité des solutions et le compromis entre les deux, illustrée par des courbes quand la taille des instances augmente.`,
    en: `The travelling salesman problem is about finding the shortest cycle that goes through each city exactly once before returning to the start. It is one of the most famous problems in theoretical computer science and operations research. Being NP-complete, it serves as a benchmark to assess different algorithmic approaches.

The project asked for an instance generator then several solving methods, brute force, the Held-Karp algorithm, the Christofides and Serdyukov algorithm and local search with 2-opt, 3-opt and simulated annealing. Everything is delivered in a single Jupyter notebook.

The code itself was worth no points. The assessment covered the presentation of complexity theory, the theoretical study of each algorithm and above all the empirical comparison by running time, solution quality and the trade-off between both, illustrated with curves as the instance size grows.`,
  },
  description: {
    fr: `### Complexité et instances

Le notebook commence par présenter la théorie de la complexité, les problèmes de décision et d'optimisation, la notation grand O et les classes de complexité, avec un graphique qui compare la croissance des fonctions usuelles.

![Croissance des fonctions de complexité](${dir}/illustrations/fonctions-complexite.webp)

Pour comparer les algorithmes de façon fiable, j'ai utilisé deux types d'instances de 5 à 25 villes. Des instances réelles, construites à partir des coordonnées des villes américaines les plus peuplées, avec la formule de Haversine pour calculer les distances sur la sphère terrestre et Cartopy pour les cartes, en clin d'œil aux origines du problème. Et des instances aléatoires, qui offrent des configurations variées et contrôlées, pour vérifier que les résultats ne dépendent pas d'un cas particulier.

![Les 15 villes américaines les plus peuplées](${dir}/illustrations/villes-americaines.webp)
![Une instance de 15 villes aléatoires](${dir}/illustrations/villes-aleatoires.webp)

### Six algorithmes

Chaque algorithme est décrit puis sa complexité est étudiée de manière théorique.

- La force brute teste toutes les permutations. Elle est optimale mais en O(n!), donc limitée à 10 villes.
- Held-Karp utilise la programmation dynamique sur les sous-ensembles de villes. Toujours optimal, il passe à O(n² · 2ⁿ).
- Christofides construit un arbre couvrant minimum, un couplage parfait et un circuit eulérien. En O(n³), il garantit une solution au plus 1,5 fois plus longue que l'optimale.
- 2-opt et 3-opt améliorent une solution en échangeant deux ou trois arêtes tant que le trajet raccourcit.
- Le recuit simulé, inspiré du refroidissement des métaux, accepte parfois une moins bonne solution pour sortir des minima locaux.

![Trajet optimal par la force brute](${dir}/gallery/1-force-brute.webp)
![Trajet de Christofides](${dir}/gallery/2-christofides.webp)
![Trajet amélioré par 2-opt](${dir}/gallery/3-2-opt.webp)
![Trajet obtenu par le recuit simulé](${dir}/gallery/4-recuit-simule.webp)

### Temps d'exécution

Chaque algorithme est lancé sur plusieurs instances de même taille et les mesures sont moyennées. Les tendances sont les mêmes sur les instances aléatoires et sur les villes américaines, ce qui montre qu'elles viennent bien de la complexité des algorithmes et non des données. La force brute et Held-Karp explosent rapidement, alors que Christofides et la recherche locale restent rapides jusqu'à 25 villes.

![Temps moyen sur les instances aléatoires](${dir}/illustrations/temps-aleatoires.webp)
![Temps moyen sur les villes américaines](${dir}/illustrations/temps-americaines.webp)

J'ai ensuite comparé, pour chaque algorithme, le temps mesuré à sa complexité théorique ajustée. Les courbes suivent de près la théorie pour la force brute et Held-Karp. Pour le recuit simulé sur les villes américaines, le temps croît plus lentement que prévu, car leur répartition régulière fait converger l'algorithme en moins d'étapes utiles.

![Force brute face à O(n!)](${dir}/illustrations/theorie-force-brute.webp)
![Held-Karp face à O(n² · 2ⁿ)](${dir}/illustrations/theorie-held-karp.webp)
![Christofides face à O(n³)](${dir}/illustrations/theorie-christofides.webp)
![2-opt face à O(n³)](${dir}/illustrations/theorie-2-opt.webp)
![Recuit simulé face à O(I · n)](${dir}/illustrations/theorie-recuit.webp)

### Qualité et compromis

La qualité d'une solution approchée est mesurée par son rapport à la distance optimale, calculée avec Held-Karp. Christofides reste stable et toujours sous sa borne de 1,5, par exemple 1,03 pour 10 villes américaines. Les heuristiques k-opt atteignent parfois l'optimal, mais leur qualité varie davantage selon les instances.

![Qualité sur les instances aléatoires](${dir}/illustrations/qualite-aleatoires.webp)
![Qualité sur les villes américaines](${dir}/illustrations/qualite-americaines.webp)

En plaçant chaque résultat selon son temps et sa qualité, Christofides apparaît comme le compromis le plus fiable. Les heuristiques peuvent faire mieux, au prix d'un temps de calcul plus élevé, surtout pour 3-opt.

![Compromis temps et qualité, instances aléatoires](${dir}/illustrations/compromis-aleatoires.webp)
![Compromis temps et qualité, villes américaines](${dir}/illustrations/compromis-americaines.webp)

### Bilan

Les méthodes exactes ne servent que pour de petits problèmes, Christofides offre un excellent équilibre et la recherche locale s'adapte aux grandes instances. Ce projet m'a surtout appris à confronter l'analyse théorique aux mesures réelles, et à choisir un algorithme selon la taille du problème et les contraintes plutôt que de chercher systématiquement la solution optimale.`,
    en: `### Complexity and instances

The notebook starts by presenting complexity theory, decision and optimisation problems, big O notation and complexity classes, with a chart comparing the growth of common functions.

![Growth of complexity functions](${dir}/illustrations/fonctions-complexite.webp)

To compare the algorithms reliably, I used two kinds of instances from 5 to 25 cities. Real instances, built from the coordinates of the most populated US cities, with the Haversine formula to compute distances on the Earth and Cartopy for the maps, as a nod to the origins of the problem. And random instances, which give varied and controlled configurations, to check that the results do not depend on a particular case.

![The 15 most populated US cities](${dir}/illustrations/villes-americaines.webp)
![An instance of 15 random cities](${dir}/illustrations/villes-aleatoires.webp)

### Six algorithms

Each algorithm is described and its complexity is studied theoretically.

- Brute force tries every permutation. It is optimal but in O(n!), so limited to 10 cities.
- Held-Karp uses dynamic programming over subsets of cities. Still optimal, it goes down to O(n² · 2ⁿ).
- Christofides builds a minimum spanning tree, a perfect matching and an Eulerian circuit. In O(n³), it guarantees a tour at most 1.5 times longer than the optimal one.
- 2-opt and 3-opt improve a tour by swapping two or three edges as long as it gets shorter.
- Simulated annealing, inspired by the cooling of metals, sometimes accepts a worse solution to escape local minima.

![Optimal tour by brute force](${dir}/gallery/1-force-brute.webp)
![Christofides tour](${dir}/gallery/2-christofides.webp)
![Tour improved by 2-opt](${dir}/gallery/3-2-opt.webp)
![Tour found by simulated annealing](${dir}/gallery/4-recuit-simule.webp)

### Running time

Each algorithm runs on several instances of the same size and the measurements are averaged. The trends are the same on random instances and on US cities, which shows they come from the complexity of the algorithms and not from the data. Brute force and Held-Karp blow up quickly, while Christofides and local search stay fast up to 25 cities.

![Average time on random instances](${dir}/illustrations/temps-aleatoires.webp)
![Average time on US cities](${dir}/illustrations/temps-americaines.webp)

I then compared, for each algorithm, the measured time with its fitted theoretical complexity. The curves closely follow the theory for brute force and Held-Karp. For simulated annealing on US cities, the time grows more slowly than expected, because their regular layout makes the algorithm converge in fewer useful steps.

![Brute force against O(n!)](${dir}/illustrations/theorie-force-brute.webp)
![Held-Karp against O(n² · 2ⁿ)](${dir}/illustrations/theorie-held-karp.webp)
![Christofides against O(n³)](${dir}/illustrations/theorie-christofides.webp)
![2-opt against O(n³)](${dir}/illustrations/theorie-2-opt.webp)
![Simulated annealing against O(I · n)](${dir}/illustrations/theorie-recuit.webp)

### Quality and trade-off

The quality of an approximate tour is measured by its ratio to the optimal distance, computed with Held-Karp. Christofides stays stable and always under its 1.5 bound, for example 1.03 for 10 US cities. The k-opt heuristics sometimes reach the optimum, but their quality varies more from one instance to another.

![Quality on random instances](${dir}/illustrations/qualite-aleatoires.webp)
![Quality on US cities](${dir}/illustrations/qualite-americaines.webp)

Placing each result by its time and quality, Christofides appears as the most reliable trade-off. The heuristics can do better, at the cost of more computing time, especially 3-opt.

![Time and quality trade-off, random instances](${dir}/illustrations/compromis-aleatoires.webp)
![Time and quality trade-off, US cities](${dir}/illustrations/compromis-americaines.webp)

### Takeaways

Exact methods only fit small problems, Christofides offers an excellent balance and local search scales to large instances. Above all, this project taught me to confront theoretical analysis with real measurements, and to choose an algorithm according to the problem size and constraints rather than always looking for the optimal solution.`,
  },
}
