---
title: "Votre MacBook Pro ne s’allume plus : Le guide ultime de diagnostic"
date: "2020-02-23"
tags: 
  - "blog"
coverImage: "images/c898ba6fa905ce3486c9d4326f2e4e03.png"
coverImageAlt: ""
subtitle: "Un guide pas-à-pas pour pouvoir poser un diagnostic clair et savoir quoi faire ou vers qui se tourner pour réparer un MacBook Pro."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

### Un guide écrit par un réparateur, qui va du plus simple au plus complexe :

Ce guide est rédigé par des réparateurs experts, pour des utilisateurs avertis ou d’autres réparateurs. Il sera progressivement de plus en plus complexe et technique. Notre conseil : suivez-le aussi loin que vous pouvez. Passez la main à quelqu’un de mieux équipé quand vous sentez que vous atteignez vos limites. Ne tentez rien si vous ne le sentez pas…

## Est-ce que tout est en ordre pour que votre Mac s’allume ?

La première étape, c’est de vérifier que tout est en ordre pour que votre Mac s’allume. On commence par le chargeur. La diode du Magsafe s’allume-t-elle en vert ou en orange ? Si oui, c’est que votre chargeur est bien branché et fonctionne, et que votre Mac reconnait le chargeur. C’est déjà un bon signe. Si non, il faut essayer un autre chargeur, ou essayer votre chargeur sur un autre Mac, pour le mettre hors de cause.

Si vous avez un MacBook Pro Touchbar, il n’y a plus de diode sur la prise de chargeur. Il va falloir vous équiper pour diagnostiquer votre chargeur. L’alternative la plus simple est d’emprunter le chargeur de votre voisin. Mais si vous voulez vous équiper, il existe des multimètre USB-C. [Nous utilisons celui-ci](https://satechi.net/products/satechi-type-c-power-meter-for-new-macbook-macbook-pro-type-c-devices).

En branchant cet outil entre votre chargeur et le Mac, il vous indique la tension de charge des MacBook Pro Thunderbolt. Si elle est à 20 Volts (plutôt 19.8 Volts d’ailleurs…) tout est bon. Si la tension est à 5 Volts, c’est mauvais signe : le chargeur n'est pas reconnu, et c'est ce qui fait que votre MacBook Pro ne s'allume plus. Si le chargeur fonctionne bien ailleurs, c’est que c’est un problème de port USB-C : dans ce cas, on vous conseille de faire appel à un réparateur de carte-mère ([comme nous](https://www.6337.fr/prise-en-charge/), par exemple).

## Votre MacBook Pro ne s’allume plus, vous en êtes sûr ?

Une des premières étapes essentielles est de savoir si votre Mac est bien éteint. Eh oui, peut-être que votre écran est simplement éteint, ou que votre Mac est allumé mais n’affiche rien. Alors vérifiez que votre Mac est allumé :

- Fait-il du bruit si vous augmentez le son et tapez sur les touches ?
- Avez-vous branché un écran externe pour éliminer un possible problème d’écran ?
- Pouvez-vous pousser le rétroéclairage au maximum ?
- Avez-vous tenté de passer une lampe de poche (ou le flash de votre portable) au niveau de la pomme transparente derrière l’écran ? (sur le Mac Retina ou précédent).

Il faut également tenter un appui long sur le bouton Power de votre Mac, pour le débloquer d’un potentiel plantage avec écran noir et le faire rebooter.

Si rien de tout cela ne donne de résultats, vous pouvez passer à la suite.

## Les classiques : Réinitialiser le SMC

Là aussi, on est dans le classique. Le SMC (System Management Control) est une puce qui gère l’allumage, la charge et différents système assez basiques du Mac. Il nécessite parfois une réinitialisation, si ces capteurs sont mal calibrés.

La manipulation est la suivante :

- Sur un Mac avec batterie non-amovible (de 2009 à nos jours)
    1. Eteignez votre Mac
    2. Pressez les touches Maj + Control (_ctrl_) + Option (_alt_) du coté gauche de votre clavier et le bouton _Power_ (coté droit) pendant 10 secondes environ
    3. Relâcher ces touches. Vous devriez voir la lumière de votre chargeur Magsafe passer à l’orange puis revenir au vert.
    4. Appuyez sur le bouton _Power_ de votre Mac pour le rallumer.

- Sur un Mac avec une puce de sécurité T2 (MacBook Pro ou Air depuis 2018. Mac Mini depuis 2018, Mac Pro 2019 ou iMac Pro)
    1. Eteignez votre Mac
    2. Pressez les touches \[Control (_ctrl_)\] + \[ Option (_alt_)\] du coté gauche de votre clavier et les touches \[Maj  \] + \[_Power\]_ du coté droit, pendant 10 secondes environ
    3. Relâcher ces touches. Vous devriez voir la lumière de votre chargeur Magsafe passer à l’orange puis revenir au vert.
    4. Appuyez sur le bouton _Power_ de votre Mac pour le rallumer.

- Sur un Mac avec batterie amovible (de 2009 ou avant)
    1. Eteignez votre Mac.
    2. Retirez la batterie.
    3. Pressez le bouton \[_Power_\] pendant 7 secondes environ.
    4. Remettez la batterie en place.
    5. Appuyez sur le bouton _Power_ de votre Mac pour le rallumer.

## Le mode « SMC Bypass » : une solution peu connue pour le diagnostic

Le mode « SMC Bypass » est assez peu connu et donc peu utilisé par les utilisateurs pour les réparateurs. C’est pourtant une solution de diagnostic très efficace, et facile à mettre en place.

Il s’agit de demander à votre MacBook Pro de démarrer sans prendre en compte les signaux captés et les contrôles de certains capteurs du SMC. Parmi ces capteurs, il y a le capteur de température et de vitesse des ventilateurs, ou les capteurs de l’ouverture de l’écran.

En démarrant dans ce mode, si le capteur de l’écran de votre Mac est défaillant, son signal sera ignoré.

Voilà comment démarrer en mode SMC Bypass :

- Éteignez votre Mac et débrancher le chargeur.
- Appuyez et maintenez la touche Power de votre Mac.
- Tout en maintenant le bouton d’allumage, branchez le chargeur du Mac.
- Après quelques secondes, relâchez le bouton Power. La diode du Magsafe devrait subrepticement passer de l’orange au vert (ou du vert à l’orange).
- Allumer votre Mac normalement.

Vous devriez entendre votre Mac démarrer avec les ventilateurs qui tournent au maximum.

Si c’est le cas, votre problème d’allumage du Mac, ou d’écran noir vient de la puce du SMC ou de capteurs venant de celle-ci.

Nous vous conseillons de confier votre Mac à un réparateur indépendant compétent. Le Genius bar d’Apple vous proposera très probablement un coûteux remplacement de carte-mère, alors que celle-ci est réparable par nous ou un de nos confrère capable de réparer des carte-mères.

## Le test d’isolation : Sortez les tournevis !

Ces étapes ne sont à réaliser qui si vous vous sentez à l’aise avec l’idée d’ouvrir votre MacBook Pro et de le diagnostiquer vous-même.

Nous rappelons que pour les étapes de démontage, les tutoriels d’ifixit sont très bien réalisés.

Le test d’isolation consiste à débrancher un à un les différents « périphériques » à l’intérieur de votre Mac. Cela permet d’éliminer et potentiellement d’identifier le fautif.

Il faut donc, dans un premier temps, ouvrir votre Mac, et débrancher la batterie. Vous pouvez démarrer le premier test ici : Une fois la batterie débranchée essayer de brancher la chargeur. Si votre Mac se met en route, c’est que votre batterie est défectueuse et empêche votre Mac de démarrer.

Si votre MacBook Pro ne s’allume toujours pas, il faut continuer.

Selon le modèle et l’année du Mac, vous pourrez retirer la carte Wifi, puis retirer le SSD. Dans chaque cas, tenter de rebrancher le MagSafe. La batterie étant toujours débranchée, vous n’avez pas besoin d’appuyer sur le bouton Power, votre Mac se lancera de lui-même. Sans SSD, il devrait afficher un point d’interrogation clignotant, au bout d’environ 20 secondes.

Vous pouvez ensuite déconnecter la nappe du trackpad, puis celle du clavier, le connecteur des haut-parleurs (même s’ils ne sont probablement pas en cause), la webcam, et éventuellement la carte fille qui ajoute les connecteurs USB, HDMI et carte SD.

Oui, il ne reste plus grand-chose dans la carcasse de votre ordinateur... Si là,  votre MacBook Pro ne s’allume toujours pas quand vous branchez votre chargeur, c’est que votre problème vient de la carte-mère.

Il n’y a, là aussi, qu’un réparateur capable de diagnostiquer et réparer une carte mère de MacBook Pro qui pourra vous aider.

Apple ou les Apple Reseller proposeront un remplacement de la carte mère, qui est environ deux fois plus cher que les réparations que nous proposons à 6337.
