---
title: "Macbook Pro Retina: Réparer le rétroéclairage"
date: "2019-07-13"
tags:  
  - "blog"
  - "non-classe"
coverImage: "images/20190707_160648.jpg"
coverImageAlt: ""
subtitle: ""
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

\[av\_textblock size='' font\_color='' color='' av-medium-font-size='' av-small-font-size='' av-mini-font-size='' av\_uid='av-k0v6ekrw' custom\_class='' admin\_preview\_bg=''\]  
**Modèle:** MacBook Pro Retina  
**Numéro de modèle:**  
**Numéro de carte mère:**  
**Symptômes:** Pas de rétroéclairage. Dommages liquides et oxydation de composants et connecteurs  
**Solution:** Remplacer le connecteur de l'écran, coté écran.

Ce Macbook Pro est arrivé avec un problème de rétroéclairage. C’est assez courant, surtout suite à un « dommage liquide » comme c'est le cas ici : une tasse de café, de thé, de coca (moins bien à cause du sucre), de bière… C’est un accident qui arrive à tous (et on ne dit pas ça parce que ça nous est arrivé aussi...)  
Mais dans ce cas là, on ne pensait résoudre notre problème de cette façon…

## Rétroéclairage de MacBook Pro: Petite introduction et longues explications...

### Comment identifier un rétroéclairage défaillant avec une lampe

Identifier un problème de rétroéclairage sur un Mac jusqu’en 2015 est assez simple. Le logo pomme sur le dos de l’écran, est illuminé quand votre Macbook Pro s’allume. S’il s’illumine, c’est pour une raison simple: il est transparent, et le feuillet de rétroéclairage (qui éclaire l'avant de l'écran) se trouve derrière.

Explications : votre écran se composé d’un couche partiellement transparente qui affiche le contenu (texte, images) et d’un couche derrière elle qui l’éclaire. C’est cette dernière qui illumine aussi la pomme du Macbook, sur le dos de l'écran.  
Donc, si votre mac s’allume mais que le rétroéclairage ne fonctionne pas, vous aurez l’impression qu’il ne marche pas. Mais vous pouvez passer une petite lampe derrière l’écran, au niveau du logo pomme. Vous allez alors voir une partie de cette lumière au travers de l’écran. Si vous voyez également du contenu (la pomme au boot, ou bien le bureau tel que vous l’avez laissé avant l’accident), c’est que seul le rétroéclairage ne fonctionne pas.

### Creuser le problème : Pas de rétroéclairage, plusieurs sources possibles

Sur un Macbook Pro Retina, le circuit de rétroeclairage est constitué de la façon suivante :

- Un circuit dit « Boost » (le lien wikipedia vers le [convertisseur boost](https://fr.wikipedia.org/wiki/Convertisseur_Boost) pour ceux qui veulent creuser), élève la tension d’alimentation. Elle doit être assez haute pour allumer tout une bande de LED située en bas de l’écran (25V sur un MacBook Air, par exemple). Ce circuit est composé de :
    
    - Un contrôleur LED (_LED driver_ en anglais) qui s’occupe de piloter ce circuit boost
    
    - Condensateurs, inductances et résistances autour de ce contrôleur, nécessaires au circuit pour fonctionner
    
    - Résistances de mesure de courant. Elles sont essentielles et peuvent faire remonter une mauvaise informations si elles sont défaillantes
    
    - Un fusible, qui bizarrement, est très résistant. (C'est l’exact opposé de ce qu’on lui demande en cas de problème, en fait...)
- Le tout va vers le connecteur de l’écran (et donc, certaines pistes peuvent être défaillantes)
- Il y a également un connecteur sur l’écran (et donc le cable de liaison écran-carte mère peut être défaillant, et changé si besoin)

On se doit de vérifier tous ces éléments avec intelligence. Si on n’a pas la tension désirée en sortie de boost, cela ne veut pas forcément dire que le contrôleur est fautif, cela veut peut-être dire qu’on ne dit pas au contrôleur d’allumer le rétroéclairage, ou qu'il ne "voit" pas l'écran, ou que le Driver LED est fautif, etc...  
Dans notre cas, tout semblait fonctionner très bien, et cela à été confirmé en branchant un autre écran, qui lui fonctionnait.

  
\[/av\_textblock\]

\[av\_one\_third first min\_height='' vertical\_alignment='' space='' custom\_margin='' margin='0px' row\_boxshadow='' row\_boxshadow\_color='' row\_boxshadow\_width='10' link='' linktarget='' link\_hover='' title\_attr='' alt\_attr='' padding='0px' highlight='' highlight\_size='' border='' border\_color='' radius='0px' column\_boxshadow='' column\_boxshadow\_color='' column\_boxshadow\_width='10' background='bg\_color' background\_color='' background\_gradient\_color1='' background\_gradient\_color2='' background\_gradient\_direction='vertical' src='' background\_position='top left' background\_repeat='no-repeat' animation='' mobile\_breaking='' mobile\_display='' av\_uid='av-kh0hg'\]

\[av\_image src='https://www.6337.fr/wp-content/uploads/2019/07/20190707\_160710-225x300.jpg' attachment='278' attachment\_size='medium' align='center' styling='' hover='' link='' target='' caption='' font\_size='' appearance='' overlay\_opacity='0.4' overlay\_color='#000000' overlay\_text\_color='#ffffff' copyright='' animation='no-animation' av\_uid='av-k0v6grgi' custom\_class='' admin\_preview\_bg=''\]\[/av\_image\]

\[/av\_one\_third\]\[av\_one\_third min\_height='' vertical\_alignment='' space='' custom\_margin='' margin='0px' row\_boxshadow='' row\_boxshadow\_color='' row\_boxshadow\_width='10' link='' linktarget='' link\_hover='' title\_attr='' alt\_attr='' padding='0px' highlight='' highlight\_size='' border='' border\_color='' radius='0px' column\_boxshadow='' column\_boxshadow\_color='' column\_boxshadow\_width='10' background='bg\_color' background\_color='' background\_gradient\_color1='' background\_gradient\_color2='' background\_gradient\_direction='vertical' src='' background\_position='top left' background\_repeat='no-repeat' animation='' mobile\_breaking='' mobile\_display='' av\_uid='av-grz4s'\]

\[av\_image src='https://www.6337.fr/wp-content/uploads/2019/07/20190707\_160648-1-225x300.jpg' attachment='277' attachment\_size='medium' align='center' styling='' hover='' link='' target='' caption='' font\_size='' appearance='' overlay\_opacity='0.4' overlay\_color='#000000' overlay\_text\_color='#ffffff' copyright='' animation='no-animation' av\_uid='av-k0v6h166' custom\_class='' admin\_preview\_bg=''\]\[/av\_image\]

\[/av\_one\_third\]\[av\_one\_third min\_height='' vertical\_alignment='' space='' custom\_margin='' margin='0px' row\_boxshadow='' row\_boxshadow\_color='' row\_boxshadow\_width='10' link='' linktarget='' link\_hover='' title\_attr='' alt\_attr='' padding='0px' highlight='' highlight\_size='' border='' border\_color='' radius='0px' column\_boxshadow='' column\_boxshadow\_color='' column\_boxshadow\_width='10' background='bg\_color' background\_color='' background\_gradient\_color1='' background\_gradient\_color2='' background\_gradient\_direction='vertical' src='' background\_position='top left' background\_repeat='no-repeat' animation='' mobile\_breaking='' mobile\_display='' av\_uid='av-8mqt0'\]

\[av\_image src='https://www.6337.fr/wp-content/uploads/2019/07/20190707\_172529-1-225x300.jpg' attachment='279' attachment\_size='medium' align='center' styling='' hover='' link='' target='' caption='' font\_size='' appearance='' overlay\_opacity='0.4' overlay\_color='#000000' overlay\_text\_color='#ffffff' copyright='' animation='no-animation' av\_uid='av-k0v6h8yz' custom\_class='' admin\_preview\_bg=''\]\[/av\_image\]

\[/av\_one\_third\]\[av\_textblock size='' font\_color='' color='' av-medium-font-size='' av-small-font-size='' av-mini-font-size='' av\_uid='av-k0v6f3w2' custom\_class='' admin\_preview\_bg=''\]  
Notre problème ne se trouvait donc pas sur la carte mère, mais dans l’écran.

On vous le dit tout de suite, changer le LED ou le feuillet de rétroéclairage sur des écrans collés est long, fastidieux et risqué.  
Mais dans notre cas, en ouvrant la charnière de l’écran, nous découvrons un belle oxydation bien cachée. Le liquide est arrivé jusque dans la charnière, et en faisant court-circuit, à grillé le connecteur, coté écran. C'est ici, qu'on se demande comment le fusible résiste, alors que le connecteur de l'écran à littéralement brûlé.  
Après un peu de nettoyage à l’alcool, notre rétroéclairage fonctionne de nouveau. L’idéal ici, est de changer complètement le connecteur, coté écran et coté carte, si nécessaire, et éventuellement tirer un fil si les pads du connecteur sont trop oxydés.

### Le driver, le connecteur, le fusible, une résistance ou un condensateur: de nombreuses sources possibles d'un même problème.

C'est ainsi que notre MacBook Pro à retrouvé un rétroéclairage fonctionnel. Ce cas est assez rare, et ce sont plutôt des problèmes au niveau du connecteur: il est proche du coin de l'ordinateur et subit facilement des dégâts liquides. Sur le circuit de rétroéclairage: les tensions sont élevées et les composants soumis à rude épreuve.  
\[/av\_textblock\]

\[av\_button\_big label='Contactez-nous' description\_pos='above' link='page,249' link\_target='\_blank' icon\_select='yes-left-icon' icon='ue804' font='entypo-fontello' custom\_font='#ffffff' color='theme-color' custom\_bg='#444444' color\_hover='theme-color' custom\_bg\_hover='#444444' av\_uid='av-8zous' custom\_class='' admin\_preview\_bg=''\]  
Besoin d'éclairages (LOL), de conseils ou d'une réparation ?  
\[/av\_button\_big\]
