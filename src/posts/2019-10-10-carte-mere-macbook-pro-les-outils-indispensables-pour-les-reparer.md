---
title: "Carte mère Macbook Pro: les outils indispensables pour les réparer"
date: "2019-10-10"
modified: "2019-10-10"
tags:  
  - "blog"
  - "non-classe"
coverImage: "images/P1090325.jpg"
coverImageAlt: "Loupe binoculaire Bausch and Lomb"
subtitle: "La réparation de carte-mère ne s'improvise pas. Au-délà du savoir-faire, elle nécessite une petite liste d'outils bien précis."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

On nous demande souvent avec quoi on travaille ou quel genre d'équipement il faut pour réparer une carte mère de Macbook Pro ou Macbook Air. Alors voici un petite récapitulatif de l'indispensable.

Cet article n’est en rien exhaustif, mais cherche à éclairer les débutants, et les agnostiques, à propos de la réparation de cartes électroniques, et en particulier de cartes mères de Macbook pro ou Macbook Air (ou iMac et autres Dell XPS…).

On va donc se faire une petite liste des éléments de base qu’il vous faudra absolument rassembler pour réparer une carte mère. Certains sont accessibles à tous, d’autres sont plus chers, spécialisés ou compliqués à trouver. Dites-vous simplement que dans notre atelier, on a tout ça, parfois en double ou triple, et bien plus.

## L'outil indispensable c'est... votre Cerveau

Ça paraît évident, mais vous en aurez vraiment (vraiment !) besoin. Le premier élément dont il va falloir se servir, c’est votre cerveau. Il va falloir réfléchir à savoir « pourquoi et comment » avant d’attaquer toute réparation.

Ce qui peut arriver de pire à une carte mère (la pauvre…) c’est que quelqu’un tente de réparer quelque-chose qui fonctionne.On a déjà vu ça plus d’une fois. Il y a quelques principes de bases à avoir, et de nombreux points à vérifier.

{% image "images/0lCQXW9-dr-house-background.jpg", "Cerveau tendu par Dr. House." %}

Si une puce ne délivre pas le signal voulu, est-ce parce qu’elle est hors-service ou parce qu’une autre puce hors-service ne lui dit pas de s’allumer ? Si le signale n’arrive pas, est-ce parce que la puce en charge de fournir est hors-service ? Parce qu’elle n’est pas alimentée correctement ? Parce que la piste qui amène ce signal a grillé ? À cause d’un composant sur la piste de signal qui est en court-circuit (condensateur ou résistance) ?

Bref, ce n’est pas aussi simple, et c’est pour cela qu’il va falloir emmener son cerveau et mettre sa matière grise à contribution.

Une panne de carte mère, c’est rarement simple. La diagnostiquer correctement demande patience et réflexion.

## Un Multimètre, même le plus basique, sera largement suffisant

Là, rien de haut de gamme n’est nécessaire. Un simple multimètre à 10€ vous permettra d’en faire autant qu’un expert. Vous devrez juste savoir vous en servir, et surtout en connaître les limites !

Un multimètre possède une résistance minimum, en dessous de laquelle il considère qu’il y a court-circuit. C’est à vous de connaître cette valeur, et de savoir que si votre multimètre bipe, ça veut peut-être seulement dire que la valeur à mesurer est en dessous de la limite mesurable du multimètre… et on ne peut pas y faire grand-chose. Parfois, la résistance de vos pointes de multimètre sera aussi grosse que ce que vous cherchez à mesurer (0.5 Ohm, ou 1 Ohm).

{% image "images/mutlimetre.jpg", "15€ pour une multimètre, c'est largement suffisant." %}

La seule solution est de connaître votre matériel et ses limites. Acheter un multimètre avec un sensibilité accrue n’est que dépense inutile pour diagnostiquer une carte mère de MacBook Pro.

On reviendra dans d'autres articles, dans le futur, sur l'utilisation du multimètre.

## Les schémas électriques des MacBook Pro sont... trouvables (on peut pas dire où)

Oui, on parle des schémas électroniques de la carte mère du MacBookPro ou MacBook Air. Il est bien plus facile de diagnostiquer une carte lorsqu’on a le schéma du PCB (Printed Circuit Board), et le schéma électronique. Le premier, au format .BRD, montre ou se trouve chaque composant sur la carte mère. Le second, au format .PDF, montre quels composants sont reliés ensemble, quels sont leurs caractéristiques ou leurs rôles. C’est ce schéma qui nous permet de vous parler des noms de pistes (PP3V3\_S0, par exemple) et de nommer des composants.

{% image "images/schema.jpg", "Schéma électronique d'un MacBook Pro" %}

Ne nous demandez pas de vous envoyer des schémas, nous ne les communiquons pas. Ils sont faciles à trouver rapidement sur Google, surtout pour les Macbook Pro, Macbook Air, iMac et même Iphone…

On peut utiliser le logiciel OpenBoardView pour ouvrir le fichier du PCB. Il est gratuit et libre (vive l’Open-Source).

Un autre logiciel existe également. Ce soft s’appelle Flex BV. Il est dérivé d’OpenBoardView et possède de nombreux ajouts qui facilitent grandement la vie en tant que réparateur. L’aller-retour entre PDF et BRD, la recherche de composants, la recherche dans des cartes donneuses… Tout cela est automatisé ! Son créateur, Paul Daniels, traîne sur les forum et groupes de discussion de réparateurs. Vous pouvez être sûr qu’il sera réactif à vos demandes. Cerise sur le gâteau, Le logiciel coute 79€ en une seule fois. Il n’y pas d’abonnement ou autres. Par les temps qui courent, c’est appréciable.

## Les bons tournevis, et des petites pinces seront indispensables

Il ne faut pas grand-chose comme outil pour ouvrir et explorer un Macbook Pro ou Macbook Air. Mais certains outils sont bien spécifiques. Le tournevis pentalobe ou tri-point n'est pas dans toutes les trousses.

Les kits d’[iFixit](https://eustore.ifixit.com/fr/Outils/Kits-d-outils/) sont très bien fait. Parmi les tournevis, le fameux Pentalobe 5 est indispensable. Il ne servira qu’à ouvrir le capot arrière de la machine, mais c'est impossible de faire sans. Ensuite, vous utiliserez beaucoup de Torx, en particulier T5 mais parfois aussi T8 ou T9 (pour enlever l’écran par exemple). Certaines vis sont des classiques cruciformes de petite taille.

{% image "images/pinces.jpg", "Pinces brucelles" %}

Il vous faudra aussi un outil plastique fin pour défaire les nappes ou connecteurs de la carte mère avant réparation. Un médiator de guitare fait bien l’affaire, ou une carte de réduction redécoupée. Préférez vraiment du plastique pour ce genre de choses (les outils métalliques peuvent faire court-circuit). Enfin, une pince brucelle (petite pince de labo) sera utile, voir même indispensable si vous vous lancez dans la soudure.

## La soudure sur carte mère se fait avec un microscope binoculaire...

Si vous souhaitez non seulement diagnostiquer mais aussi vous initier à la micro-soudure pour réparer, un microscope améliorera grandement votre confort. C’est un loupe à grossissement jusque x40, parfois plus, sur un pied déporté. Elle permet de voir avec ses deux yeux, et donc d’apprécier la profondeur (contrairement au microscope de biologie avec une seule oculaire). C'est indispensable pour travailler et souder des composant sur des carte mère de MacBook Pro. Cela peut coûter assez cher, de quelques centaines d’euros pour un modèle fiable d’occasion, jusqu’à plusieurs milliers d’euros pour les modèles pro.

{% image "images/P1090423.jpg", "un condensateur qui à mal vécu une surtension: grillé !" %}

Pour le moment, nous sommes équipé d'un Bausch & Lomb Sterezoom 5 qui doit dater des années 80. C'est un très bon rapport qualité prix et c'est bien mieux que les microscopes Made in China vendus au même prix. Contrairement à l'électronique, l'optique n'a pas beaucoup évolué récemment. Mieux vaut parfois un bon outil vintage qu'un mauvais outil récent.

{% image "images/P1090325.jpg", "Notre loupe Bausch & Lomb" %}

Si vous faites de la réparation électronique très régulièrement, ou si vous voulez vous lancer professionnellement, c’est indispensable. Les images grossies et rondes de nos [posts de blog](https://www.6337.fr/blog/) viennent de cet outil. N'hésitez pas à nous demander conseil. Nous avons fait beaucoup de recherches et d'essais avant de faire notre choix.

## Il faut également un fer à souder et un pistolet à air chaud

Désouder et resouder des composants discrets ou des boîtiers BGA demande là aussi du matériel spécifique. Il vous faudra une station à souder. Pourquoi une station ? Parce que vous devez pouvoir régler la température du fer. L’objectif est de pouvoir donner un peu plus de puissance à votre fer si vous soudez un composant connecté à la masse. Le plan de masse d’une carte mère de Macbook absorbe vite la chaleur. Il vous en faut plus pour amener l’étain à température de fusion.

C’est indispensable aussi que la panne du fer soit assez fine pour de petits composants ou pour les connecteurs. Parmi les marques les plus connues, on peut citer [Hakko](https://www.hakkousa.com/), [Weller](https://www.weller-tools.com/index.html), JBC, [Ersa](https://www.kurtzersa.com/electronics-production-equipment.html) ou Pace. Les contrefaçon de station Hakko sont partout, même chez des revendeurs de renom. Alors faites attention en passant commande !

Un seul fer Made in China sort du lot, c’est le TS100. Il est assez puissant pour une carte mère, et reste assez fin. Il est également réglable en température et assez stable. Si vous n’avez pas beaucoup de budget, c’est ce qu’il vous faut. Nous ne l'avons pas testé mais avons vu des nombreux tests de pro de la réparation de carte mère Macbook.

La [station à air chaud](../kb/station-airchaud/) servira principalement à souder et désouder les BGA sur votre carte mère de Macbook. Là aussi, les modèles les moins chers sont moins efficaces. Il faut que le débit d’air soit assez fort et que la machine soit stable en température. La communauté des réparateurs de carte mère ne jure que par la [Quick 861](http://www.quick-global.com/2-lead-free-rework-2.html). D’autres versions sont sortis depuis, avec quelques améliorations. Mais toute la gamme est globalement la même, et de niveau professionnel.

Faites attention aux contrefaçons, qui commencent, là aussi, à être de plus en plus nombreuses.

Vous pouvez vous orientez aussi vers de grandes marques ([JBC](https://www.jbctools.com/) par exemple), mais le ticket d’entrée n’est pas le même. On parle ici de 1000€ pour une station [JBC](https://www.jbctools.com/) contre seulement 250€ pour une station [Quick](http://www.quick-global.com/2-lead-free-rework-2.html).

## De l'étain, du flux, et d'autres consommables qui seront bien utiles pour réparer une carte mère

Avoir des consommables de qualité vous amènera vers la réussite. Et là aussi les contrefaçon sont partout. Pour l’étain, choisissez simplement une grande marque. Elles se valent toutes. Pour le flux de soudure, notre préférence va vers celui d’Amtech. Là encore, trouver du [flux Amtech](https://amtechdirect.com/product/amtech-solder-flux-nc-559-v2-tf/) qui ne soit pas une contrefaçon est très difficile !

Petit aparté : le flux est cette pâte blanche/transparente qui l’on met avant de chauffer l’étain. Elle décape le support et facilite l’accroche de l’étain. Travailler avec ou sans flux, c’est vraiment le jour et la nuit. On vous conseille fortement de vous en équiper si vous soudez des cartes mères MacBook. La différence est bluffante. Il vous faudra également de l'alcool IPA pour nettoyer ce flux de soudure sur la carte mère.

Il y a bien sûr d’autres consommables tels que des composants de remplacements (bien sûr), des cartes donneuses ou du fil de connexion.

## Conclusion

Voilà, vous en savez un peu plus sur les outils du réparateur de carte mère Macbook Pro et Macbook Air. Si vous voulez vous lancer, si vous avez des questions sur votre diagnostic ou si vous avez besoin d’un coup de main : demandez-nous ! On est là pour ça. Si vous avez tenté de réparer votre propre mac et que vous avez tout cassé, on est surement votre dernier espoir...

(Non, nous ne facturons pas le moindre conseil. On aime ce métier, et on aime le partager… gratuitement. Le savoir est clé dans cette activité !)
