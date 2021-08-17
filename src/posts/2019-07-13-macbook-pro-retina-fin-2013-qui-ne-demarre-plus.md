---
title: "Macbook Pro Retina Fin 2013 qui ne démarre plus"
date: "2019-06-20"
tags: 
  - "blog"
  - "non-classe"
coverImage: "../images/TPS924-dimensions.png"
subtitle: "Le court-circuit est une panne classique. Elle est simple à diagnostiquer mais demande une certaine technique pour la réparer."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

Ce Macbook Pro Retina, modèle A1502, ne bootait pas du tout, aucun signe de vie.

**Modèle:** Macbook pro Retina 13 Fin 2013  
**Numéro de modèle:** A1502  
**Numéro de carte mère:** 820-3476-A  
**Symptômes:** Ne s'allume plus. Aucun choc. Pas de dommages liquides  
**Solution:** Remplacer U8300

### Le diagnostic d'un carte mère est parfois simple...

Ce Mac est un MBP Retina fin 2013, avec une carte mère 820-3476-A. Un ordi qui ne démarre pas du tout permet de faire un diagnostic assez basique et direct.  
Sur un Macbook, la première chose est de vérifier si la diode du chargeur s’allume. Tout d'abord, on retire le capot de l'ordinateur et l'on débranche la batterie. Si on a une jolie diode orange bien brillante cela veut dire que le connecteur du chargeur communique bien avec le SMC (System Management Control). La puce du SMC communique avec l'électronique a l'intérieur du connecteur du chargeur. Ils utilisent le protocole I2C. C'est cela, qui permet d'allumer la diode en orange ou vert. Si le SMC ou tout composant entre les deux est défectueux, la diode ne s'allume pas.

C'est notre cas ici, et c’est très bon signe et cela signifie que notre problème se trouve ailleurs. Cela ne facilite pas pour autant le diagnostic.

### ...Et parfois plus compliqué !

Mais les sources du problème peuvent être très diverses. Il faut tester les lignes de tension une par une, et dans l’ordre dans lesquelles elles sont sensées s’alimenter, pour trouver une piste. Comme un enquêteur, on procède par étapes. Sur un Macbook pro récent, les lignes d'alimentation s'allument dans cet ordre :

1. PP3v42
2. PPBUS\_G3H
3. PPVRTC\_G3H
4. SMC\_PM\_G2\_EN
5. PM\_SLP\_S5\_L
6. PP5v\_S5
7. PP3v3\_S5
8. PM\_SLP\_S4\_L
9. PP5v\_S4 (Vérifier toutes les lignes)
10. PP3v3\_S4 (Vérifier toutes les lignes)
11. Lignes “S3”
12. Lignes “S0”
13. Lignes VCORE du chipset
14. S4, S3, et S0 sont déclenchées par des interrupteurs. Ces montages interrupteurs vont prendre la ligne S5 (PP5V\_S5, PP3V3\_S5) et les connecter aux S4, S3 et S0 quand elles doivent être alimentées. Ce qui est le cas si les PM\_SLP sont présents.

On comprend bien que l’idée principale, c’est que si la première ligne d’alimentation n’est pas là, les suivantes ne s’allumeront pas non plus. La phase de diagnostic consiste donc à chercher la source d’une panne, la raison pour laquelle une ligne est absente.

Dans le cas de ce Macbook Pro Retina, PP5V\_S0 était manquant, ainsi que PP3V3\_S0. Après quelques mesures, nous avons réalisé que PP3V3\_S0 était en court-circuit (résistance à la masse très proche de 0).  
Il s’agit maintenant d’identifier la cause du court-circuit.

### Identifier un court-circuit sur la carte mère d’un MacBook Pro:

Sur une carte mère de Macbook Pro, une fois qu’on à trouvé une ligne en court-circuit, il faut en trouver la source. C’est souvent un condensateur qui à mal vieilli ou grillé, et qui maintenant laisse passer le courant, mais cela peut-être autre chose. Cela peut même parfois venir d’un MOSFET qui est fermé, parce que la puce qui devrait lui dire de s’ouvrir ne fonctionne plus… Et là notre problème n’est pas le court-circuit en lui-même, mais le circuit de commande de ce MOSFET.

Dans tous les cas, le meilleur moyen est de brancher une alimentation de laboratoire (alimentation stabilisée) sur cette ligne, d’y injecter la tension de référence (3,3 Volts pour PP3V3, 5 Volts pour PP5V, etc...), et un peu de courant. Comme la ligne est en court-circuit, les composants sur cette ligne ne risquent pas grand-chose (à part notre fautif…) car le courant passera uniquement par ce court-circuit.

Dans le cas de notre carte 820-3476-A, nous injectons donc 3,3 Volts sur PP3V3\_S0. On regarde alors quel composant semble chauffer. Deux techniques sont disponibles : le première consiste à utiliser une bombe de réfrigérant pour circuit électroniques et voir qu'elle partie de la carte dégivre. Quand c'est le cas, c'est assez flagrant et facile à voir. La seconde technique est d'utiliser tout simplement de l’alcool IPA (déjà largement utilisé pour nettoyer les cartes), et voir où est-ce qu'il s'évapore le plus vite.

Cela nous permet de trouver quel est le point chaud (où le givre fond, si l’on utilise une bouteille de réfrigérant sous pression, ou bien ou l’alcool s’évapore) qui est donc l'endroit (et le composant) qui "consomme" l'électricité (et le renvoi sous forme de chaleur: l'effet joule, bien sûr!).

### Notre coupable fait moins de 2mm²

Le fautif ici est U8030. Quelques recherches dans les schémas électriques de la 820-3476-A, et sur internet nous permettent d’identifier ce « switch ». Il est justement responsable d’activer la ligne PP3V3\_S0\_FET (qui est directement reliée à PP3V3\_S0) en la connectant à PP3V3\_S5, dans le cas ou P3V3S0\_EN (« EN » pour « enable », ou activer en anglais) est à tension haute.

{% image "images/TPS924-dimensions-300x278.png", "Le fusible qui était également à remplacer sur ce Mac." %} 
Les dimensions du TPS22924: 1.41mm de long sur 1.35mm de large. 

Ce TPS22924 (c’est le nom du composant) est un simple montage de deux transistors en « push-pull ». Ce composant permet de faire suivre le courant arrivant de PP3V3\_S5, sur ordre de P3V3S0\_EN.  
Par contre, c’est un composant en boitier BGA, donc assez petit, 1.4 mm par 0.9mm, et bien plus difficile à souder qu'un QFN (ou qu'un composant traversant... S'il y en avait sur une carte mère de Macbook pro).

### Souder un BGA sur une carte mère de MacBook Pro : La taille compte!

Un petit BGA n’est pas trop difficile à remplacer avec une station à air chaud correctement utilisée. Ici, notre TPS22924 (le U8030) n’a que deux rangées de trois billes d'étain (Ce qui fait six connections, si vous suivez bien). Cela veut surtout dire que même si les billes n’ont pas exactement la même taille le composant se soudera quand même. C'est donc la dessus que l’on va parier.

Plutôt que de faire un rebillage complet, avec un pochoir et de la pâte à braser, ou avec de nouvelles billes d'étain, on utilise une autre technique présentée et utilisée par certains experts en microsoudure. On appose de l’étain sous le composant, au fer à souder, on frotte le dos du composant sur une feuille de papier, comme pour poncer le surplus d'épaisseur des billes. On chauffe à l’air chaud pour que le pads d'étain se reforment. Grâce à cela, on obtient de petites bosses d'étain, de taille équivalentes. Ce sera suffisant pour remplacer un BGA avec seulement 2x3 connections.

Cette technique à été très efficace. Elle nous a permis de récupérer un U8030 d’une carte donneuse vers cette 820-3476-A qui était HS. Un carte donneuse, est une carte mère HS et irréparable (problème interne), servant de donneur d’organe.

### Conclusion: Carte mère réparée !

Et au final, on retrouve le plaisir de voir un pomme s’afficher sur l’écran, et un gong au démarrage : opération réussie!

Il s’agissait donc bien de ce switch qui était en court-circuit et empêchait ce Macbook pro retina A1502 de s’allumer.


Si vous ne vous sentez pas les compétences pour cette réparation, ou si vous souhaitez la faire chez vous mais que vous avez des questions, n'hésitez pas à utiliser le [formulaire pour nous contacter.](https://www.6337.fr/contact/)

D'autres descriptifs de réparations sont ajoutés très régulièrement sur [notre blog](https://www.6337.fr/blog/). N'hésitez pas à revenir régulièrement.
