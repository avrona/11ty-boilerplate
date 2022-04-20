---
title: "Ecran noir sur MacBook Air 11 mi-2014: La solution !"
date: "2020-02-19"
modified: "2020-02-10"
tags: 
  - "blog"
coverImage: "images/MacBook-Air-boots-with-black-screen-624x468-1.jpeg"
coverImageAlt: "Exemple d'écra de MacBook Air avec rétroéclairage en panne."
subtitle: "Un écran noir ? Et si cela ne venait pas de la carte-mère ? On vous en dit plus sur ce problème rencontré maintes fois, et sur lequel même les 'genius' de l'AppleStore butte parfois... "
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

## Votre MacBook Air n'a peut-être pas de problèmes de carte-mère

Et non, même si Apple l'a dit, ce n'est pas (forcément) le cas. Nous avons vu passer plusieurs MacBook Air 11 pouces 2014 avec les même symptômes, et le même solution: Un client nous contact et nous envoie son Mac. Apple l'a diagnostiqué: Carte mère HS. Nous faisons nos tests, et réalisons que la carte-mère marche très bien. Si vous êtes dans ce cas, vous trouverez la marche à suivre pour savoir si vous êtes dans ce cas, et surtout comment vous en sortir seuls, à moindre coût !

## Les symptômes: Ecran noir au démarrage

### A quoi ressemble cet écran noir sur MacBook Air ?

Quels sont exactement les symptômes à identifier ? D'abord, nous n'avons vu ce comportement que sur des MacBook Air écran 11 pouces de mi-2014. C'est très spécifique. Ensuite l'ordinateur se comporte de la façon suivante au démarrage:

- Après l'appui sur le bouton Power le Mac semble s'allumer
- On entend le "Dong", accord majeur au démarrage du Mac
- Le rétroéclairage s'allume, l'écran n'est plus éteint, mais allumé sur un fond noir. Rien ne s'affiche

Et rien de plus ne se passe, impossible d'aller plus loin, aucune touche ne répond et aucun moyen de démarrer sur un disque externe ou sur la partition de récupération (en appuyant sur _Pomme + R)._

Pourtant l'ordinateur charge bien et répond très bien aux sollicitations d'allumage et d'extinction.

### Apple et son mauvais diagnostic

Nos clients qui sont passés par un AppleStore on fait faire le diagnostic de leur machine sur place. Le constat d'Apple est que le carte-mère était fautive, et qu'il fallait la remplacer.

Les méthodes de diagnostic d'Apple sont principalement basées sur des logiciels d'analyses. Il y a de moins en moins de test typiques de diagnostics tels que les tests d'isolation (débrancher un à un les éléments pour identifier le fautif) ou des tests visant à remplacer un composant par un autre connu comme fonctionnel. Pourtant il suffit de ça pour identifier la panne.

## Retirer le SSD et voir votre MacBook Air reprendre vie

### Valider le diagnostic par isolation

C'est une technique classique de diagnostic technique que l'isolation. Il s'agit de déconnecter les uns après les autres, les éléments déconnectables du système principal pour connaitre le fautif. Si votre maison à les plombs qui saute, vous pouvez éteindre tous les disjoncteurs secondaires, remettre le principal, puis réactiver les disjoncteurs secondaires un à un, jusqu'à ce que les plombs sautent de nouveau. Grâce à ça, vous savez ou est le fautif, et il reste à débrancher chacun des éléments sur ce disjoncteurs pour trouver le coupable (même méthode...). Nous on procède de la même façon: On ouvre le Mac et débranche un élément. On rallume la machine et on voit si le MacBook Air veut bien démarrer.

Avec cette méthode, nous avons, dans chacun des trois cas rencontrés pour le moment, identifier le fautif: le SSD. Vous pouvez essayer de faire de même chez vous: Ouvrez votre MacBook Air 11 mi-2014, déconnectez d'abord la batterie, puis retirez le SSD. Rebranchez le Magsafe, allumez le Mac et attendez. Dans nos cas cités ci-dessus, le Mac à affiché un point d'interrogation. Cela veut dire qu'il ne trouve pas de disque de démarrage, mais surtout cela veut dire que la carte-mère à l'air de bien fonctionner.

L'étape suivant à été de brancher un disque externe avec un version neuve et vierge de Mac OS, compatible avec nos MacBook Air mi-2014. Et bien là encore, le Mac à démarré sans problème.

## Pas besoin de changer de Mac, seulement de trouver un nouveau SSD

La réparation devient d'un coup bien plus simple, et surtout bien moins cher. Il vous suffit de trouver le bon SSD. Ce n'est pas pour autant ultra simple. Apple à des formats de SSD bien spécifiques, trouvables uniquement en occasion et il va falloir bien faire le tri. Ne paniquez pas, on vous aide !

Le MacBook Air mi-2014 utilise un SSD compatible avec les mac portables (MacBook Pro retina et MacBook Air) de 2014 à 2016. On les identifient grâce au nombre de contacts: Ils ont 12 contacts, un espace vide, puis 16 contacts, comme sur la photo ci-dessous.

D'ailleurs, c'est encore le meilleur moyen de chercher ces SSD: "Apple SSD 12+16" ou "Apple SSD MacBook Pro Retina".

{% image "images/SSD-connectors.jpg", 'Tableau comparatif SSD MacBook Air MacBook Pro' %}

## En conclusion:

## Faites confiance aux petits réparateurs experts (comme nous...)

Eh oui ! Sur ce genre de pannes, le SAV Apple pêche par ses procédures strictes et son incapacité à sortir du cadre. Il suffirait pourtant de laisser un peu d'initiative aux Genius pour qu'ils arrivent aux même conclusions et conseils que nous.

Nous passons beaucoup de temps à rechercher des pannes diverse, mais surtout à partager avec toute une communauté d'autres réparateurs comme nous. C'est ce qui nous donne accès à des informations ou des réparations que même le fabricant n'a pas. Comme un garagiste de quartier, plus à même de bricoler un truc qui fonctionne qu'un concessionnaire, nous sommes l'alternative.
