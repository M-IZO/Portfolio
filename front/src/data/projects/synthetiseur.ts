import type { Project } from '../../types/content'

const dir = 'images/projects/synthetiseur'
const videos = 'videos/projects/synthetiseur'

export const synthetiseur: Project = {
  slug: 'synthetiseur',
  title: { fr: 'Synthétiseur analogique', en: 'Analogue synthesiser' },
  tagline: {
    fr: 'Synthétiseur à base de NE555, avec un métronome sur Arduino et un piano graphique sur Processing',
    en: 'NE555 based synthesiser, with an Arduino metronome and a graphical piano in Processing',
  },
  course: 'ECE ING1',
  date: { start: '2022-04' },
  teamSize: 3,
  tags: ['electronics', 'dev'],
  stack: ['Arduino', 'C++', 'Processing', 'Proteus', 'NE555', 'Fritzing'],
  cover: `${dir}/cover.svg`,
  brief: {
    fr: `Le synthétiseur est un instrument de musique électronique qui génère et module des sons sous forme de signaux électriques. Un synthétiseur analogique comprend typiquement un VCO, qui génère la forme d'onde à la base du son, un VCF, qui permet de sculpter le son, et un VCA, qui contrôle son volume.

L'objectif de ce projet est l'étude, la conception et la réalisation d'un synthétiseur analogique modulable simple, équipé d'un métronome et d'une interface graphique. Un NE555 monté en astable génère un signal rectangulaire dont la fréquence dépend de la touche appuyée, chaque touche étant reliée à une résistance qui correspond à une note de la gamme. Un filtre passe-bas RC remplace le VCF, et une bascule JK associée à un multiplexeur allume et éteint le synthétiseur. Une carte Arduino Nano calcule les battements du métronome, réglés par un potentiomètre et affichés sur un écran OLED, et mesure la fréquence du son pour l'envoyer à une interface Processing qui présente le clavier d'un piano.

Le projet est évalué par une soutenance orale et par un rapport qui répond aux questions de l'énoncé, de la recherche documentaire sur l'histoire du synthétiseur jusqu'au diagramme de Gantt. Des bonus récompensent les interfaces graphiques les plus créatives.`,
    en: `A synthesiser is an electronic musical instrument that generates and shapes sounds as electrical signals. An analogue synthesiser typically includes a VCO, which generates the waveform at the root of the sound, a VCF, which sculpts the sound, and a VCA, which controls its volume.

The goal of this project is to study, design and build a simple modular analogue synthesiser, with a metronome and a graphical interface. An NE555 in astable mode generates a square signal whose frequency depends on the key pressed, each key being connected to a resistor that matches a note of the scale. An RC low pass filter replaces the VCF, and a JK flip flop combined with a multiplexer turns the synthesiser on and off. An Arduino Nano board computes the metronome beats, set with a potentiometer and shown on an OLED screen, and measures the frequency of the sound to send it to a Processing interface that shows a piano keyboard.

The project is assessed through an oral defence and a report answering the questions of the brief, from documentary research on the history of the synthesiser to the Gantt chart. Bonuses reward the most creative graphical interfaces.`,
  },
  description: {
    fr: `### Recherches et conception

Nous avons commencé par retracer l'histoire du synthétiseur, du télégraphe musical d'Elisha Gray en 1874 jusqu'aux modèles plus accessibles des années 80, puis par étudier le fonctionnement du haut-parleur. Les notes suivent la gamme naturelle de Zarlino, en partant d'un do à 264 Hz. Le diagramme fonctionnel A0 découpe ensuite le synthétiseur en fonctions, sans encore faire de choix techniques.

![Diagramme fonctionnel A0 du synthétiseur](${dir}/illustrations/diagramme-fonctionnel.webp)

### Génération des notes

La fréquence du NE555 dépend de deux résistances et d'un condensateur. Nous avons d'abord cherché un rapport cyclique de 0,5 en supprimant la première résistance, mais la simulation sur Proteus a montré que la broche de décharge se retrouvait alors reliée directement à l'alimentation, ce qui provoque un court-circuit. Avec une première résistance de 2 kΩ, les valeurs deviennent cohérentes.

Pour le clavier, sept boutons sont reliés à une chaîne de résistances de 1 kΩ, et un potentiomètre décale toute la gamme. Les fréquences simulées sur Proteus sont très proches de celles obtenues par le calcul, par exemple 400 Hz au lieu de 414 Hz pour le do avec le potentiomètre à 10 kΩ.

![Simulation du clavier avec le potentiomètre à 0](${dir}/illustrations/proteus-q9-0.webp)
![Simulation du clavier avec le potentiomètre à 10 kΩ](${dir}/illustrations/proteus-q9-10k.webp)

### Filtre et allumage

Le filtre passe-bas est un circuit RC composé d'un potentiomètre et d'un condensateur de 100 nF. Sa fréquence de coupure passe d'environ 5730 Hz pour un angle de 10° à environ 380 Hz pour un angle de 150°, et nos mesures avec l'Arduino confirment que les fréquences au-dessus de la coupure ne passent plus.

![Fréquence de coupure selon l'angle du potentiomètre](${dir}/illustrations/frequence-coupure.webp)

Pour allumer et éteindre le synthétiseur, une bascule JK en mode toggle change d'état à chaque appui sur le bouton et pilote un multiplexeur, qui transmet soit la sortie du VCO, soit la masse. Proteus ne proposant pas de multiplexeur 2 vers 1, nous l'avons construit avec une porte NOT et trois portes NAND.

![Circuit d'allumage avec le multiplexeur](${dir}/illustrations/mux-1.webp)
![Synthétiseur allumé](${dir}/illustrations/mux-2.webp)
![Synthétiseur éteint après un appui](${dir}/illustrations/mux-3.webp)

### Métronome

Le métronome tourne sur l'Arduino Nano. Un potentiomètre règle la pulsation de 0 à 200 BPM, l'écran OLED l'affiche en grands caractères et un buzzer donne le rythme. Après avoir essayé les bibliothèques SimpleTimer et MsTimer2, nous avons choisi une solution plus simple fondée sur la fonction millis().

![Algorigramme du métronome](${dir}/illustrations/algorigramme-metronome.webp)
![Schéma de montage du métronome](${dir}/illustrations/schema-metronome.webp)
![Métronome au minimum](${dir}/gallery/4-metronome-min.webp)
![Métronome à 200 BPM](${dir}/gallery/5-metronome-max.webp)

### Interface et assemblage

L'Arduino mesure la fréquence du signal du VCO et l'envoie en liaison série à l'interface Processing. Celle-ci allume la touche jouée sur un clavier de piano, affiche la note sur une portée et en grand avec sa fréquence, trace une courbe animée et rejoue le son depuis l'ordinateur. Dans la version finale, le haut-parleur ne sert plus qu'au métronome.

![Interface du piano graphique](${dir}/gallery/1-interface.webp)

Le montage final réunit sur une même plaque la génération de fréquence, le filtre passe-bas, l'allumage et le métronome.

![Diagramme de branchement](${dir}/gallery/3-branchement.webp)
![Photo du montage final](${dir}/gallery/2-montage.webp)

### Organisation

Les parties du sujet étant très liées, nous avons beaucoup travaillé ensemble. Ma partie couvrait les recherches historiques et sur la gamme de Zarlino, la génération du son et le choix des notes, le piano graphique et le bonus créatif, ainsi que la rédaction du rapport. Nous nous étions fixé un planning strict, que nous avons plutôt bien respecté.

![Diagramme de Gantt](${dir}/illustrations/gantt.webp)`,
    en: `### Research and design

We started by tracing the history of the synthesiser, from Elisha Gray's musical telegraph in 1874 to the more affordable models of the 80s, then by studying how a loudspeaker works. The notes follow Zarlino's natural scale, starting from a C at 264 Hz. The A0 functional diagram then splits the synthesiser into functions, before any technical choice.

![A0 functional diagram of the synthesiser](${dir}/illustrations/diagramme-fonctionnel.webp)

### Generating the notes

The frequency of the NE555 depends on two resistors and a capacitor. We first tried to get a duty cycle of 0.5 by removing the first resistor, but the Proteus simulation showed that the discharge pin was then connected straight to the power supply, which causes a short circuit. With a first resistor of 2 kΩ, the values become consistent.

For the keyboard, seven buttons are connected to a chain of 1 kΩ resistors, and a potentiometer shifts the whole scale. The frequencies simulated in Proteus are very close to the calculated ones, for example 400 Hz instead of 414 Hz for the C with the potentiometer at 10 kΩ.

![Keyboard simulation with the potentiometer at 0](${dir}/illustrations/proteus-q9-0.webp)
![Keyboard simulation with the potentiometer at 10 kΩ](${dir}/illustrations/proteus-q9-10k.webp)

### Filter and power switch

The low pass filter is an RC circuit made of a potentiometer and a 100 nF capacitor. Its cutoff frequency goes from about 5730 Hz at a 10° angle to about 380 Hz at a 150° angle, and our measurements with the Arduino confirm that frequencies above the cutoff no longer pass.

![Cutoff frequency against the potentiometer angle](${dir}/illustrations/frequence-coupure.webp)

To turn the synthesiser on and off, a JK flip flop in toggle mode changes state at each button press and drives a multiplexer, which outputs either the VCO signal or ground. Since Proteus has no 2 to 1 multiplexer, we built one with a NOT gate and three NAND gates.

![Power circuit with the multiplexer](${dir}/illustrations/mux-1.webp)
![Synthesiser on](${dir}/illustrations/mux-2.webp)
![Synthesiser off after a press](${dir}/illustrations/mux-3.webp)

### Metronome

The metronome runs on the Arduino Nano. A potentiometer sets the tempo from 0 to 200 BPM, the OLED screen shows it in large characters and a buzzer keeps the beat. After trying the SimpleTimer and MsTimer2 libraries, we chose a simpler solution based on the millis() function.

![Metronome flowchart](${dir}/illustrations/algorigramme-metronome.webp)
![Metronome wiring diagram](${dir}/illustrations/schema-metronome.webp)
![Metronome at its minimum](${dir}/gallery/4-metronome-min.webp)
![Metronome at 200 BPM](${dir}/gallery/5-metronome-max.webp)

### Interface and assembly

The Arduino measures the frequency of the VCO signal and sends it over serial to the Processing interface. It lights up the key played on a piano keyboard, shows the note on a staff and in large letters with its frequency, draws an animated curve and plays the sound again from the computer. In the final version, the loudspeaker is only used by the metronome.

![Graphical piano interface](${dir}/gallery/1-interface.webp)

The final build brings together the frequency generation, the low pass filter, the power switch and the metronome on a single board.

![Wiring diagram](${dir}/gallery/3-branchement.webp)
![Photo of the final build](${dir}/gallery/2-montage.webp)

### Organisation

As the parts of the brief were closely linked, we worked together a lot. My part covered the historical research and Zarlino's scale, generating the sound and choosing the notes, the graphical piano and the creative bonus, as well as writing the report. We set ourselves a strict schedule, which we mostly kept to.

![Gantt chart](${dir}/illustrations/gantt.webp)`,
  },
  videos: [
    {
      src: `${videos}/demo.mp4`,
      poster: `${dir}/posters/demo.webp`,
      title: { fr: 'Démonstration du piano graphique', en: 'Demo of the graphical piano' },
    },
  ],
}
