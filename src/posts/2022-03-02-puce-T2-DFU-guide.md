---
title: "Votre Mac ne démarre pas, et si c'était la puce T2"
subtitle: "L'ajout de la puce T2 n'a pas apporté que des avantages. La sécurité renforcée de votre Mac implique une couche de matérie et logiciel qui peut flancher. Plus de puces égal plus de risques de panne."
date: "2022-03-02"
tags: 
  - "blog"
  - "non-classe"
coverImage: 'images/T2.jpg'
coverImageAlt: "Puce T2 - L'objet du délit"
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---


# Puce T2: Relancer un Mac qui ne démarre plus


La puce T2 est la trouvaille sécurité d'Apple. Pour faire simple, c'est une puce pour iPhone, intégrée à la carte-mère des Mac USB-C Intel le plus récent.
Elle reste constamment en veille, et est en charge du démarrage de très bas niveau (réveiller tout le monde lors de l'appui sur le bouton power), du chiffrage des données, et elle garantie l'intégrité de la ROM et de l'EFI lors du démarrage.
En gros, elle chiffre les données et bloque tout ce qui n'est pas catholique, selon Apple, au démarrage.

Problème, elle fonctionne elle-même avec un système d'exploitation propre, nommé BridgeOS, qui peut lui aussi bugguer. Et quand ça arrive, c'est difficile à diagnostiquer car tout est bloqué. Votre Mac ne démarre plus du tout, et un réparateur peu au fait des procédures standard peut s'arracher les cheuveux et préconiser un remplacement de carte-mère, alors qu'il y a beaucoup plus simple.

Reprenons les bases: Quels sont les symptômes et comment facilement relancer, ou réinitialiser cette fameuse puce T2.

## En vrai, un problème de T2, ça donne quoi ?

Quand la puce T2 pose problème, le plus souvent, vous vous retrouvez avec un Mac qui ne démarre plus. Aucun signe de vie. Il semble bien charger la batterie, mais ne démarre pas, même en tentant une combinaison de touches pour forcer tout ça (reset du SMC, reset de la PRAM, extinction forcée...).
De notre côté, on a pu observer, avec l'arrivée des Mac T2, de nombreux problèmes liés à ça: des Mac arrivés à l'atelier avec un diagnostique de carte-mères en panne, qui ne nécessitait qu'une simple manipulation pour les remettre en selle.

La puce T2 peut aussi poser des problèmes de charge, de reboot, ou de sortie HDMI, mais ce sont des choses plus rares, et que nous n'avons encore jamais rencontré à l'atelier. Mais sachant que nous sommes souvent le dernier maillon, ce sont des problèmes que vous rencontrerez peut-être, et pourrez régler à moindre frais.

## La puce T2 et son architecture

On vous disait que la puce T2 était une puce pour iPhone, c'est là ou ça commence à se voir. Son petit nom en interne est T8012, et c'est une puce A10 très légèrement modifiée.
Ainsi, elle à son propre OS, appelé BridgeOS, son propre firmware, et doit parfois mettre à jour, soit l'un soit l'autre. Apple à la manie de faire des mises à jour silencieuse, et ca n'a pas manqué ici. Vous ne serez pas prévenu d'une mise à jour firmware ou OS sur la puce T2 de votre Mac. Elle se fera soit sans même vous en avertir, soit au cours d'une mise à jour de l'OS.

Ainsi, si cette mise à jour pose problème, votre Mac tombe en panne. Etant donné qu'il (votre Mac) ne vous à pas prévenu de ce qu'il allait faire, vous ne savez pas pourquoi...

Le méthode pour réparer tout ça consiste donc à mettre votre Mac en mode DFU, comme un iPhone: DFU pour Device Firmware Update.
Un mode qui permet d'accéder à cette puce et lui proposer une mise à jour ou une réinitilisation. C'est que vont donc faire.

## 1ère étape: Mettre votre Mac en mode DFU

Pour relancer la puce T2, il faut d'abord mettre le Mac cible en mode DFU. Pour cela, il vous faut votre ordinateur en panne (logique), un second ordinateur avec une version de MacOS la plus récente possible (au moins *BigSur*), un câble pour connecter les deux. Si votre second Mac est un Mac USB-C, un câble USB-C sera nécessaire. A-priori, cela ne doit pas forcément être un câble Thunderbolt (avec un éclair dessus), même la câble fourni par Apple avec le chargeur devrait suffire.

Il vous faut télécharger l'application *Apple Configurator* sur le MacappStore. Elle sera indispensable.

S'en suit une manipulation digne d'Indiana Jones dans *Les Aventuriers de l'Arche Perdue*. (Les plus anciens d'entre nous auront la référence).
<div class="columns is-centered">
<div class="column is-half">
{% image "images/Raiders-of-the-Lost-Ark.jpg", "Indiana Jones tentant de mettre un Mac en mode DFU." %} 
</div>
</div>

Je m'explique:

* Il faut d'abord brancher votre Mac de secours au port USB-C à gauche et le plus proche de vous (le plus proche du trackpad). Brancher également un chargeur sur l'un des autres ports.
* Il faut ensuite bien éteindre le Mac. Ma technique consiste à rester appuyé sur le bouton Power et cliquer sur le trackpad. Quand il n'y a plus de son de clic, votre Mac est vraiment éteint. (Oui, le clic est un faux clic, ça pourra faire l'objet d'un autre article).

Ensuite, c'est la que ça se complique. [D'après Apple,](https://support.apple.com/fr-fr/guide/apple-configurator-2/apdebea5be51/mac) il faut, je cite:

1. Appuyez sur le bouton Marche/Veille pendant environ 5 secondes pour éteindre complètement l’ordinateur portable Apple.
2. Branchez le câble USB-C sur le port Thunderbolt frontal qui se trouve sur le côté gauche de l’ordinateur portable Apple.
3. Tout en maintenant le bouton Marche/Arrêt enfoncé, appuyez simultanément sur les trois touches suivantes pendant environ 3 secondes :
	- La touche Majuscule côté droit
	- La touche Option de gauche
	- La touche Contrôle de gauche


Croyez-moi sur parole, c'est une façon plutôt alambiquée d'expliquer une combinaison de touches pourtant simple. Je vous proposer ici une explication un peu plus claire:

1. Appuyez sur le bouton Marche/Arrêt pendant environ 5 secondes pour éteindre complètement votre Mac.
2. Branchez le câble USB-C sur le port Thunderbolt côté gauche plus proche du trackpad de l’ordinateur portable cible et lancez l'application *Apple Configurator* sur votre Mac de secours.
3. Appuyez sur la touche Marche/Arrêt pendant 2 à 4 secondes.
4. Tout en maintenant la touche Marche/Arrêt maintenue, appuyez sur les touches suivantes:
	- Touche Majuscule côté droit
	- Touche Option (Alt) de gauche
	- Touche Contrôle (Ctrl) de gauche
5. Maintenez ces touches appuyées, relâchez immédiatement dès que le logo *DFU* s'affiche sur l'ordinateur de secours. Il est possible que le logo *Recovery* s'affiche. Maintenez la pression sur ces touches, il devrait disparaître pour afficher un logo *DFU*.

Cette seconde méthode marche beaucoup mieux pour nous... A chaque fois, en fait.

## Relancer ou Restaurer la puce T2

Avertissement: *Relancer* et *restaurer* sont deux actions très différentes. *Restaurer* ou "réinitiliaser" revient à effacer la totalité des données de votre Mac. **Si vous souhaitez conserver vos données, NE FAITES PAS ÇA !!!**

Nous vous conseillons de tenter de *Relancer* la puce T2, dans un premier temps.

### Relancer

L'option *Relancer* est un peu cachée, alors que c'est la plus utile (qu'ils sont facétieux ces ingénieurs Apple !!).

Double-cliquez sur l'icône *DFU* de l'application Apple Configurator.
Vous pourrez ensuite faire un clic-droit, puis choisir "Relancer" dans le sous-menu "Avancées".
Cette option est également disponible dans le menu "Actions" de la barre de menu.

Un processus se met alors en route. Il inclut le téléchargement de la dernière version de *BridgeOS* et la tentative d'installation sur votre Mac. En cas de succès, vous verez une pomme s'afficher et votre Mac démarrer avant même la fin de ce processus. Si cela dure, c'est mauvais signe. Lors que cela dure plusieurs minutes, cela se termine souvent en erreur...
Vous pouvez tenter une restaurer de la puce T2, dernière étape avant de nous confier la machine pour ausculter la carte-mère.

### Restaurer

*Restaurer* votre puce T2 a effacer toutes les données et vous faire repartir sur des bases saines. Toutes les données de votre Mac seront effacées, et irrécupérables après cette opération.
Ici, il suffit simplement de cliquer sur *Actions* dans la barre de menu, puis sur *Restaurer*.
Un dernier message d'avertissement vous indique que perdrez toutes vos données.

## Conclusion

C'est plus rare aujourd'hui, mais lors de la sortie des premiers Mac T2, tous les *génies* Apple n'étaient pas forcément au parfum de cette procédure. Cela à donné des remplacements de carte-mère inutiles, voir (j'espère pas trop) de devis monstrueux, alors que la solution est assez simple.
C'est plus rare aujourd'hui et Apple devrait vous indiquer ou savoir faire cette opération pour sauver votre Mac suite à une mauvaise mise à jour de BridgeOS ou du firmware de la puce T2.