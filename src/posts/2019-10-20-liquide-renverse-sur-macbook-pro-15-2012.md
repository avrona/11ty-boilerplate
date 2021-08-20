---
title: "Liquide renversé et carte mère MacBook Pro HS: c'est réparable ?"
date: "2019-10-20"
tags:  
  - "blog"
  - "non-classe"
coverImage: "images/Macbook-pro-oxydation-repare-2.jpg"
coverImageAlt: "Réparation des quelques composants oxydés sur la carte-mère d'un MacBook Pro"
subtitle: "Un verre renversé: un catastrophe pour vous, mais un simple cas d'école pour nous. Eclaircissement sur les réflexes à voir et les réparations qui s'imposent."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

**Modèle :** Macbook pro 15 Mi-2012 **Numéro de modèle :** A1286 **Numéro de carte mère :** 820-3330-B **Symptômes :** Dommage liquide : Tisane renversée **Solution :** Remplacer R7051, R7052 et C7050

Un MacBook Pro de 2012 ? C’est assez ancien, et n’importe qui laisserait tomber. Pourtant c’est encore une très bonne machine, même en 2019. Elle est modulaire (ports USB, FireWire ou encore RJ 45) et upgradable (RAM et HDD accessibles).

Son processeur n’a pas vraiment à rougir face à des MacBook Pro récents, et avec une puce graphique dédiée, il s’en sort encore bien. Il suffit de gonfler la RAM et de l’équiper d’un SSD.

C’est donc tout naturellement que notre client du jour souhaite faire réparer ce MacBook Pro pour le garder.

Ce MacBook Pro 2012, avec écran 15 pouces, est un modèle avec écran classique (non Retina). Il ne fait pas non plus partie de ceux qui ont des problèmes récurrents de carte graphique. Une réparation sur cette machine vaut donc carrément le coup : elle peut encore durer et rendre de nombreux services.

## Dommage liquide sur carte mère de MacBook Pro

Ce Macbook Pro a subi un dégât liquide. Un peu de tisane à été renversée sur la table et est entrée par la partie aération. Le propriétaire a eu le bon réflexe : l’éteindre et le faire sécher au mieux. Il a pu le rallumer par la suite, faire un back-up de ses données. Mais au bout de quelques jours, l’oxydation faisant son effet, l'ordinateur a commencé à mal fonctionner. D’abord il ne s’allumait plus que sur batterie, puis finalement, il ne s’allumait plus du tout...

Un autre réparateur a eu accès à la machine, et n’a heureusement rien tenté sur la carte-mère de ce MacBook Pro. Il l’a déclarée irréparable. Cela tombe bien, c’est exactement ce que nous réparons, à 6337 !

### Le diagnostic n'est jamais simple

C’est avec ces informations que nous attaquons notre diagnostic. Quand l'ordinateur arrive, il est déjà ouvert. Les vis sont fournies à coté, dans un sachet.

Rien ne paraît choquant, au premier abord. Mais il y a bien une petite zone oxydée sur la carte et nous découvrirons 2 ou 3 autres zones très légèrement oxydées également.

Il est possible que le peu de liquide entré ait été projeté par le ventilateur. Ce seraient ces quelques gouttes qui auraient oxydé la carte.

La zone touchée est autour d’ISL6259. C’est une puce assez connue car elle gère un bonne partie de l’énergie et de la charge du MacBook Pro. Elle est souvent en faute lorsque des problèmes de chargeur, de charge de batterie, d’extinction inopinée, etc… surviennent.

### La technique :  explication du circuit de charge d’un MacBook Pro

Notre problème se situe en plein dans le circuit d’alimentation et de charge de la carte mère de notre MacBook Pro.

{% image "images/schemabloc.jpg", "Schéma-bloc de la partie alimentation et charge. Extrait du schéma d'une carte mère de Macbook Pro" %}

#### Principe de fonctionnement :

- En haut à gauche arrive le chargeur (AC Adapter).
- En bas à gauche se trouve la batterie (PPVBAT\_G3H\_CONN).
- Le MOSFET Q7055 est piloté par CHGR\_BGATE, qui vient d’ISL6259. Il décide d’ouvrir la vanne d’énergie pour alimenter la carte-mère depuis la batterie.
- Chargeur et batterie passent par des capteurs de courant. Le courant est mesuré en le faisant passer au travers d’une résistance très faible (R7020 et R7050) qui donne à ses bornes une tension proportionnelle ou courant qui la traverse. (U=RI, souvenirs du cours de physique…)
- ISL6259 récupère les informations de quantité de courant arrivant du chargeur et de la batterie (grâce à ces résistances-capteurs de courant), et gère ces flux en fonction de la présence ou non d’un chargeur (en utilisant des MOSFET), et du niveau de charge de la batterie. Il est également en dialogue avec le SMC, qui lui dit quand votre MacBook Pro doit s’allumer ou s’éteindre.
- On retrouve bien sûr des fusibles à différents niveaux (F6905 et F7040), qui doivent se suicider en cas de court-circuit.

#### ISL6259 et capteurs de courant :

Si la zone autour d’ISL6259 est touchée, il est possible qu’un des capteurs de courant, ou qu’un des composants de ces lignes soit touché. Il devient alors impossible à votre MacBook Pro de savoir la quantité d’énergie fournie soit par le chargeur, soit par la batterie. Par sécurité, votre ordinateur ne s’allumera pas. Il se peut aussi qu’il se fourvoie (à cause de ces dégâts liquides) sur ces quantités, et choisisse de ne pas charger ou ne pas utiliser la batterie alors que c’est nécessaire.

{% image "images/schema-1.jpg", "Schéma détaillé de la zone touchée de la carte mère de Macbook Pro. En jaune, les composants changés." %}


Ça, c’est pour la théorie, et pour les grandes lignes.

Dans le détail, il y a bien d’autre composants qui permettent à ISL6259 de capter et comprendre ces courants et tensions d’entrée et de sortie.

### L'analyse : Oxydation du circuit de charge

Notre MacBook Pro 2012 est oxydé autour des résistances R7051 et R7052. On le voit très bien sur les images du microscope. On peut les comparer avec le schéma de PCB de la carte mère. La zone entourée en rouge correspond à ISL6259, au deux résistances sur les lignes de mesure de courant, et au condensateur de découplage.

{% image "images/cartemere-oxydation-2.jpg", "Détails sur l'oxydation." %}
 

Ce sont des résistances qui viennent en aide à la mesure et régulation de courant. R7051 mesure 2.2 Ohm conformément à la datasheet de ISL6259 (ou de son équivalent ISL6255). R7052 est une résistance de 0 Ohm. Pourquoi Apple à conçu un PCB avec des résistances à 0 Ohm ? Sincèrement, je ne sais pas… Peut-être pour assurer la symétrie (2.2 Ohm d’un coté et 0 de l’autre). Potentiellement pour faire le lien vers le point de test qu’il y a juste a coté, sur le PCB.

En l’occurrence, à la mesure, ces résistances étaient défaillantes, et c’est ce qui causait notre problème de boot. ISL6259, ne sachant pas si le courant de la batterie passait bien ou pas, ne pouvait pas gérer la charge, ni le démarrage.

### Le savoir-faire : Soudure et remplacement de composants sur la carte-mère

Nous avons donc remplacé ces deux résistances, ainsi que le condensateur de découplage qui se trouve entre les deux. Ils ont été ponctionnés sur une carte mère de Macbook Pro équivalente, mais impossible à réparer.

Souder ce genre de composants demande un peu de rigueur et de technique. Ce sont des 0402. Ils mesurent donc 1mm x 0.5 mm. On les soude avec notre pistolet à air chaud.

La technique consiste à utiliser le coté capillaire ([la tension superficielle](https://fr.wikipedia.org/wiki/Tension_superficielle), pour être exact) de l’étain fondu. Une fois positionné de façon approximative, la résistance vient se mettre en place toute seule. L’étain fondu l’attire dans son emplacement. Mais une petit vidéo vaut mieux qu'un long discours. Ci-dessous, un extrait de l'excellente chaîne Youtube [The Art of Repair](https://www.youtube.com/channel/UCG8Y3ARZq5s-FyasBOGNrnQ).

<video controls width="480" loop autoplay>
    <source src="../images/giphy-artofrepair.mp4" type="video/mp4">
  Sorry, your browser doesn't support embedded videos.
</video>

On peut facilement faire la différence entre le avant et après, sur les photos ci-dessous.

Il nous a fallu :

- Enlever les composants défaillants à l’air chaud.
- Enlever l’étain en place et nettoyer la zone avec une tresse à dessouder.
- Replacer de l’étain sur les pads.
- Récupérer chaque composant à changer sur la carte donneuse d’un autre Macbook Pro.
- Les replacer un à un sur leur pad, en utilisant du flux de soudure pour nous faciliter la tâche.
- Nettoyer le tout à l’air chaud et à l’alcool.

Vu la petite taille de la zone, nous ne faisons pas passer la carte par un bain dans le bac à ultrason. Le nettoyage minutieux à l’alcool IPA, et avec un peu de chaleur enlève la majorité du flux.

{% image "images/Macbook-pro-oxydation-2.jpg", "Zone oxydée de la carte mère, avant réparation." %}

{% image "images/Macbook-pro-oxydation-repare-2.jpg", "La carte mère du Macbook Pro après réparation et nettoyage." %}


## (Encore) une carte mère de MacBook Pro réparée

Il n’en fallait pas plus pour que ce MacBook Pro démarre et recharge sa batterie. Même si la batterie avait atteint 0% de charge, elle était encore en état pour être chargée. On a pris soin de laisser le Macbook Pro charger la batterie avant de le remonter pour le rendre à son propriétaire.

Et c'est reparti pour quelques années de plus pour ce MacBook Pro 2012, increvable!
