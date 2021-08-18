---
title: "Batterie non-reconnue et ISL6259"
date: "2020-01-19"
tags:  
  - "blog"
coverImage: "images/ISL6259.png"
coverImageAlt: ""
subtitle: "Un article un peu technique sur la gestion de batterie sur les Mac: puce ISL, capteurs de courant et problèmes de charge."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

Ce Macbook Pro Retina, modèle A1398, ne reconnaissait et ne chargeait pas sa batterie, pourtant en bon état.

* **Modèle:** Macbook pro Retina 15 Fin 2013
* **Numéro de modèle:** A1398
* **Numéro de carte mère:** 820-3787
* **Symptômes:** Ne charge pas la batterie. Ne reconnait pas la batterie
* **Solution:** Remplacer ISL6259

## S'il ne reconnait pas la batterie, il ne peut pas la charger...

Un constat simple et pourtant. Il faut savoir faire la différence entre un problème de charge, et un problème de reconnaissance de batterie.

### Une batterie qui ne charge pas, ou...

Dans le premier cas, la batterie est présent et reconnue. Dans _A propos de ce Mac_ -> _Rapport Système_, on voit clairement un numéro de série et toutes infos de niveau de charge, de nombres de cycles et d'état de la batterie dans l'onglet _Alimentation_, pourtant la charge ne fonctionne pas. On branche le magsafe, il passe à l'orange, et le pourcentage de batterie continue de descendre.

C'est un symptôme classique, et que nous connaissons bien. Le problème vient plus probablement d'un capteur de courant, qui donne une mauvais information au SMC (System Management Control) ou à ISL6259, la puce en charge de la gestion de la batterie. Ce ne sont donc, en général, aucune des ces puces qui sont fautives mais plutôt une des résistances autour d'elles.

L'erreur de débutant consisterait à remplacer une puce, plutôt que de concentrer le diagnostic sur les résistances capteurs de courant, ou les résistances qui sont sur le lignes menant aux capteur de courant.

### ...Une batterie non-reconnue

Si la batterie de votre MacBook Pro n'est pas reconnue, vous verrez que rien ne s'affiche dans l'onglet _Alimentation_ du rapport système. Les _informations sur la batterie_ sont vides. Pas de numéro de série, pas de nombre de cycles, et donc pas de niveau de charge. Ici, il y a un problème de communication avec la batterie.

C'est sur ce point que doit se concentrer le diagnostic: Votre carte-mère n'arrive pas à communiquer avec la batterie, et donc croit qu'elle n'est pas présente.

{% image "images/ISL6259.png", "ISL6259 avec toutes ces entrées-sorties" %}


### Il y a de l'intelligence dans la batterie d'un Mac

Toute batterie d'ordinateur portable contient une part d'intelligence. Il faut gérer la niveau de charge, le nombre de cycles, la température et quelques autres facteurs. Selon le fabricant, l'architecture est différent. Sur Mac, un bus I2C permet à la batterie de transmettre toutes ces infos (ainsi que son numéro de série). C'est seulement une fois que la batterie est reconnue et identifiée que la charge peut commencer.

Et donc, si votre batterie n'est pas reconnue, votre diagnostic doit se concentrer sur ce bus, et c'est que nous avons fait pour notre MacBook Pro A1398.

## D'abord, vérifier la connection I2C de la batterie

La première chose à faire, est de vérifier que la connection se fait bien. Il faut vérifier la continuité sur ce fameux bus I2C, entre ISL, responsable de la gestion de la charge, et la batterie elle-même. Il y a également, sur ce bus, comme sur tout bus I2C, des résistances dites de _pull-up._ Elle permettent de mettre à niveau la tension nécessaire pour une communication initiale. Un élément qui souhaite communiquer sur le bus, viendra court-circuiter la ligne (la "tirer vers le bas"= pull-down).

Dans notre cas, les deux lignes SDL et SDA du bus I2C communiquaient bien. Toutes les résistances avaient la bonne valeur.

## Si ce n'est toi, c'est donc l'autre...

Ce n'est pas la batterie, ce n'est pas le bus I2C ni les résistances sur ce circuit, il ne reste qu'une option ISL...

### Mais qui est tu, ISL6259 ?

ISL6259 est la puce, en charge de la gestion de charge et de batterie. C'est donc à elle qu'incombe le lourde de tâche de reconnaître la batterie, gérer sa charge, donner l'ordre de basculer du chargeur vers la batterie, ou inversement. Elle répond aux ordres de la machine, qui sait quand un Magsafe est branché (d'ailleurs même, quelle est la puissance du Magsafe branché), quand l'ordinateur s'allume, quand il est en veille, etc...

Si votre Mac ne charge pas, et que vous avez épuisé toutes les autres solutions, il y a de grandes chances qu'ISL soit votre fautif.

On ne trouve pas cette puce chez les revendeurs habituels, mais elle est assez courante ailleurs sur eBay ou Aliexpress, et donc les puces vendues sont de relativement bonne qualité.

## MacBook Pro Retina 15 réparé

En changeant ISL, on a retrouvé une batterie reconnue sur notre 820-3787. On en a profité pour laisser la batterie charger (pour qu'elle ne reste pas trop longtemps vide).

Un autre problème est, par contre, venu s'inviter à la fête... Le précédent réparateur de ce Mac, qui à probablement échoué sur ce problème de charge, avait endommagé la nappe de trackpad.

Le clavier marchait en arrivant, mais notre démontage à été celui de trop. Cette nappe de trackpad partiellement endommagée à crée un problème de clavier... Mais tout cela fera l'objet d'un autre post.
