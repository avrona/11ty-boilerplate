---
title: "Macbook Air 2015 qui ne s'allume plus: La solution est parfois évidente"
date: "2019-05-08"
tags: 
  - "blog"
  - "featured"
  - "non-classe"
coverImage: "images/MBA-condo.jpg"
coverImageAlt: "Condensateur remplacé sur un MacBook Air"
subtitle: "Les MacBook Air, malgré leur robustesse, ont quelques faiblesses. Dans cet exemple, le condensateur à rendu l'âme."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

**Modèle:** MacBook Air 13' Début-2015  
**Numéro de modèle:** A1466  
**Numéro de carte mère:** 820-00165  
**Symptômes:** Ne s'allume plus. Aucun choc.  
**Solution:** Remplacer C7430 et F7140

Il arrive parfois qu’un Mac décide de ne plus s’allumer du jour au lendemain. Apple et ses « Genius » vous diront que c’est une problème de carte mère (ou carte logique, dans leur jargon). Le problème peut parfois être plus simple à régler, une réparation rapide de cette carte étant possible. C’était le cas pour ce Macbook Air 2015. Une machine très bien entretenue, aucune rayure, aspect nickel. Et c'est donc la réparation la plus rapide que nous ayons eu a faire.

### Un Macbook Air n'a pas besoin d'être maltraité pour tomber en panne

Ce Macbook Air était soit peu utilisé, soit utilisé par un maniaque. Et pourtant, ça ne met pas à l’abri d’un problème. Il est arrivé dans notre laboratoire très propre, sans aucune rayure, et même l'intérieur de la machine laisser penser qu'elle était peu utilisée, ou peu intensément.

Par chance pour nous, aucun réparateur n’y avait tenté quoi que ce soit, et donc potentiellement effacé les indices de la source du problème. De façon simple, cet ordi à été ramené à la vie par nos soins. Il a suffit de l’ouvrir, et de regarder avec attention la carte mère. C'est la première étape d'un diagnostic, observer avec attention pour trouver des traces ou indices, tel un enquêteur. Cela à payé, nous avons tout de suite pu voir un trace inhabituelle autour d’un des gros condensateurs sur la ligne d’alimentation du processeur.  
Ce condensateur se trouve sur PPBUS\_S5\_HS\_COMPUTING\_ISNS, qui sert à alimenter le CPU et ses régulateurs de tension, et qui est largement filtrée et stabilisée par ces condensateurs Tantale-Polymère.

### L'observation, 1ère étape du diagnostic de cette carte mère de MacBook Air

Sur la carte mère, juste à coté de ce condensateur, qui parait en parfait état, on voit un légère trace, comme si un éclair, ou un éclatement avait eu lieu. Une marque discrète, mais essentielle pour le diagnostic. Avec un multimètre, on valide que ce condensateur est en court-circuit… Dessoudage à l’air chaud, remplacement par un condo équivalent venant d’une carte similaire (un « donneur d’organes »).

{% image "images/MBA-condo-1030x688.jpg", "Le condensateur remplacé sur ce MacBook Air." %}

Le condensateur fautif, apparement intact à la surface, mais dont l'éclatement à laissé des traces qui ne trompent pas au niveau du PCB. Ce condensateur mettait l'alimentation du CPU de ce MacBook Air en court-circuit.

### Condensateur et Fusible: Un problème peu en cache un autre

On pensait que le boulot était terminé, mais le Mac ne s’allumait toujours pas. On reprends alors par les bases :  
Est-ce que le courant arrive du chargeur : Oui car PPDCIN\_G3H est bien présent (8.65V)  
Est-ce qu’il arrive à la batterie : Oui, car PPVBAT\_G3H\_CONN est présent également, une fois la batterie branchée, mais la tension est trop faible lorsqu'on allume le Mac sans batterie.  
Est-ce qu’il alimente les lignes de tension du Mac : Non, car la tension trop faible se poursuit sur les lignes d'alimentation suivantes.

Après quelques vérification de tension, On réalise que les 8.65V pris juste avant le fusible F7140, se transforme en 3V après… Ce fusible à une resistance de plusieurs Ohms, ce qui n’est clairement pas normal. Il a du commencer à jouer son rôle au moment ou le C7430 s'est mis en court-circuit, mais n'a pas eu le temps de terminer so "oeuvre". On ressort la carte donneuse pour récupérer un fusible avec les même caractéristiques et le transférer sur la nouvelle.

{% image "images/MBA-Condo-fusible-1030x688.jpg", "Le fusible qui était également à remplacer sur ce Mac." %}

Les deux coupables cote-à-cote: Condensateur C7430 à gauche et Fusible F7140 à droite.

Problème réglé, une pomme s’affiche à l’écran, notre Macbook Air s’allume. Ce n’était que ça, et ce n’était pas une réparation très compliquée, ni très longue: Un condensateur bien visible, assez gros et simple à remplacer, et le fusible qui l'accompagne. Comme quoi, certaines réparations peuvent être assez simple à réaliser, et il aurait été dommage de jeter cette carte mère alors qu'elle remarche en trois coup de multimètre et deux coups de fer à souder.
