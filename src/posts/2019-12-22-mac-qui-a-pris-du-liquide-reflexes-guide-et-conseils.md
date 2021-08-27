---
title: "Mac qui à pris du liquide: réflexes, guide et conseils"
date: "2019-12-22"
tags: 
  - "blog"
  - "non-classe"
coverImage: "images/Mac-liquid-icone.png"
coverImageAlt: "Verre renversé sur un MacBook Pro"
subtitle: "Accident classique: un verre renversé sur un Mac. Le meilleurs réflexe est d'éteindre la machine et débrancher la batterie. On vous expliquer comment."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---

Les dommages causés par un liquide versé sur un Mac peuvent rapidement être graves, même lorsque la quantité de liquide est minime. Nous vous conseillons de lire cet article en entier et posément avant toute action. Procéder de façon calme et méthodique est essentiel dans les premières heures. Méfiez-vous des conseils vous disant de simplement le laisser sécher, ou le mettre dans du riz. Cette technique est suffisante pour retirer le reste de l'humidité, mais la corrosion pourrait poursuivre son office, et les symptômes se manifesteraient alors plus tard...

Les meilleurs conseils restent d'ouvrir son Mac, de débrancher la batterie le plus vite possible. D'extraire la carte mère et la ou les carte filles, et de nettoyer le tout à l'alcool IPA (Isopropylique).

Ce tutoriel vous explique dans le détail comment procéder, et comment aller plus loin, si vous êtes un peu plus bricoleur-électronique que la moyenne.

> Nous vous conseillons de lire cet article en entier et posément avant toute action.

On présume que si vous êtes en train de lire ce tutoriel, c'est parce que le mal est fait. Vous avez renversé du liquide sur votre Mac. Vous avez peut-être déjà fait un aller-retour à l'Apple-Store pour vous voir proposez un devis de remplacement de carte-mère (et de batterie, en bonus), sans plus d'inspection de votre machine... Vous en êtes ressorti déçu ou énervé, et cherchez donc une option un peu moins cher, un peu plus écologique, ou un peu moins "bazooka pour tuer une mouche".

> Même si, par la suite, votre Mac à le temps de sécher, l'oxydation créée ne s'arrête pas pour autant.

## La corrosion en électronique: Un peu de théorie pour concrétiser (ou dissiper) vos craintes

Une fois que le liquide s'introduit dans votre Mac, il y a des grandes chances qu'il soit projeté par le ventilateur en mouvement. De fines gouttelettes seront donc disséminées sur la carte mère de votre Mac. Souvent, nous observons que les zones oxydées sont en fait assez minimes : quelques composants par-ci, une petite zone par-là. Ces quelques gouttelettes seront suffisantes pour créer des dégâts importants. Même si, par la suite, votre Mac a le temps de sécher, l'oxydation créée ne s'arrête pas pour autant. Elle va s'étendre, et les métaux de soudure, ou le cuivre, vont s'altérer ou migrer. Des connexions vont se casser, du fait de l'oxydation du métal, quand d'autres pourraient se faire, du fait de la migration de métaux. Ces altérations sont accélérées par le courant électrique, et donc l'utilisation de votre Mac. Ce qui fait qu'un MacBook Pro peut cesser de marcher quelques jours, ou semaines après votre tasse de thé renversée.

### Exemple des MacBook Pro Touchbar

> Si l'une de ces puces devient défaillante, à cause d'un dommage liquide (et cela arrive souvent... croyez-nous), aucun des ports USB-C ne fonctionne.

Les MacBook Pro TouchBar possèdent 4 ports USB-C, qui permettent tous de charger votre Mac. Chaque port est géré par une puce de contrôle Thunderbolt/USB-C. Si l'une de ces puces devient défaillante, à cause d'un dommage liquide (et cela arrive souvent... croyez-nous), aucun des ports USB-C ne fonctionne. Ces puces "discutent" ensemble et doivent toutes fonctionner pour gérer la charge de votre Mac.

Un seul port USB-C défaillant, et votre MacBook Pro Touchbar ne s'allumera plus dès que la batterie sera vide.

### Alors que faire ?

C'est un exemple parmi d'autres : les ports USB-C pour les MacBook Pro Touchbar, le rétroéclairage pour les MacBook Pro Retina... Chaque Mac a sa fragilité quant au dommages liquides.

Dans l'idéal donc, vous l'aurez compris, il faut pouvoir débrancher votre Mac, et ne plus l'utiliser jusqu'à pouvoir le nettoyer en profondeur, suivant le guide qu'on vous à concocté ci-dessous.

## Thé, café, bière ? Avec ou sans sucre ? Ne riez pas, c'est important !

Hé oui, une tasse de thé sans sucre n'engendre pas les même dégâts qu'un verre de vin. Ce que contient le liquide permettra également de déterminer le risque. Paradoxalement, un alcool fort, peu sucré et volatile, créera moins de dégâts qu'une bière ou du vin, liquides sucrés contenants des acides et à même d'attaquer une soudure ou un composant de façon efficace.

De plus, le rinçage sera plus rapide si votre Mac n'a vu passer que de l'eau. Un liquide sucré, collant, ou pire corrosif rendra le nettoyage et le rinçage de la carte plus long et compliqué.

## Etape 1: L'urgence ou déconnecter son Mac, et sa batterie

> Extinction en restant longtemps appuyé sur le bouton "Power" du Mac. C'est l'urgence qui prime !

Idéalement, dès qu'un liquide entre en contact avec votre Mac, il faut absolument l'éteindre. Pas le temps de faire des sauvegarde ou de laisser Dropbox terminer l'upload. Extinction en restant longtemps appuyé sur le bouton "Power" du Mac. C'est l'urgence qui prime !

On débranche, bien sûr le chargeur. Et on retourne son Mac de façon ce que la maximum de liquide puisse en ressortir et évite d'atteindre la carte mère qui est sous le clavier.

L'étape suivante nécessite déjà des outils. Il faut pouvoir débrancher la batterie de votre Mac. On vous liste, ci dessous :

### Déconnecter la batterie d'un MacBook Pro Unibody (2010 à 2012):

Sur le MacBook Pro Unibody, il faut vous munir d'un tournevis cruciforme de petite taille (PH00)... et c'est tout. On regrette cette époque, où tout était plus simple et accessible.

1. On retire toutes les vis du capot arrière du Mac et on retire le capot.
2. On déconnecte la batterie en soulevant vers le haut avec les ongles ou avec une spatule en plastique (pas de tournevis ou de métal, pour éviter les faux contacts !).

C'est assez simple, et très similaire sur tout les MacBook Pro Unibody, sauf les plus anciens 15 pouces, ou le connecteur de batterie se trouve en-dessous de celle-ci.

<div class="columns is-centered">
  <div class="column is-one-third">
    {% image "images/MBA-Unibody.jpg", "Localisation des vis du capot d'un Macbook Pro" %}
  </div>
  <div class="column is-one-third">
    {% image "images/Macbookpro-unibody-open.jpg", "Ouverture du capot arrière d'un MacBook Pro" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBA-Unibodybatterie2.jpg", "Connecteur de batterie d'un MacBook Pro" %}
  </div>
</div>


### Déconnecter la batterie d'un MacBook Pro Retina (2012 à 2015):

Sur le MacBook Pro Retina, les vis sont cette fois-ci des pentalobes. Il vous faudra donc un tournevis pentalobe dit P5. Cela se trouve normalement, dans des kit de démontage pour smartphone en grande surface de bricolage.

Même étapes ici :

1. On retire toutes les vis du capot arrière du Mac, et on retire le capot.
2. On déconnecte la batterie en soulevant vers le haut avec les ongles ou avec une spatule en plastique (pas de tournevis ou de métal, pour éviter les faux contacts !).

<div class="columns is-centered">
  <div class="column is-one-third">
    {% image "images/MBP15-retina-backcover.jpg", "Localisation des vis d'ouverture du modèle Retina" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBPretina-capot.jpg", "Ouverture du capot arrière d'un MacBook Pro Retina" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBP15-retina.jpg", "Déconnection de la batterie d'un MacBook Pro Retina 15 pouces" %}
</div>
</div>

### Déconnecter la batterie d'un MacBook Pro Touchbar (2016 à 2019):

Sur les MacBook Pro Touchbar, la méthode est cette fois bien plus complexe. On vous la détaille ici. Si c'est une première pour vous, cela ne sera pas évident. Il vous faudra un tournevis pentalobe P5, et un tournevis Torx T5, ainsi qu'une ventouse, et un mediator de guitare. Ces outils se trouvent dans les kits outils spécial Smartphone des grandes surface bricolage, ou sur des sites spécialisés. Vous y trouverez également un pince-brucelle et une spatule noir, qui sont optionnelles, mais d'une grande aide.

Petit conseil : il faut vraiment entendre les différents clips sauter, en utilisant la ventouse et le mediator de guitare.

1. On dévisse le capot arrière du Mac.
2. On déclipse tout le tour en utilisant une ventouse et un médiator de guitare. On entend clairement les clips se défaire.
3. On fait glisser le capot vers l'avant du Mac de 2-3 cm avant de le soulever.
4. On déconnecte le connecteur d'information de la batterie, qui se trouve sous l'autocollant. Il faut soulever la petit partie plastique avant de tirer sur le flexible
5. On dévisse la vis Torx à tête large, et on soulève le clip métallique souple qu'elle maintenait en place... ouf, on y est.


<div class="columns is-centered is-multiline">
  <div class="column is-one-third">
    {% image "images/MBP-15-TB.jpg", "Localisation des vis d'ouverture du MacBook Pro Touchbar" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBP-15-TB-clips.jpg", "Le capot d'un MacBook Pro Touchbar doit être déclipsé" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBP-15-TB-slide.jpg", "Le retrait du capot doit se faire avec un mouvement de glissement" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBP-15-TB-infoconnector.jpg", "Deconnection du connecteur de communication avec la batterie" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBP-15-TB-infoconnector-slide.jpg", "Retrait de la nappe de connection de la batterie" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBP-15-TB-battscrew.jpg", "Vis de connection des connecteurs de batterie" %}
</div>
  <div class="column is-one-third">
    {% image "images/MBP-15-TB-batt-open.jpg", "Débranchement de la batterie de MacBook Pro" %}
  </div>
</div>

### Déconnecter la batterie d'un MacBook Air 11" ou 13" :

On retrouve, pour les MacBook Air, la simplicité de MacBook Pro Retina. En se munissant d'un tournevis Pentalobe P5, spécial smartphone, on déconnecte rapidement la batterie.

1. On retire toutes les vis du capot et on le soulève par l'arrière du Mac, pour le déposer.
2. On soulève le connecteur de batterie, avec une spatule plastique ou l'ongle sur les modèles 11 pouces. On tire la languette en plastique horizontalement (vers l'arrière) sur les 13 pouces.

<div class="columns is-centered">
  <div class="column is-one-third">
    {% image "images/MBA-screws.jpg", "Localisation des vis d'ouverture du modèle MacBook Air" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBA-13-batt.jpg", "Deconnection de la batterie d'un MacBook Air 13 pouces" %}
  </div>
  <div class="column is-one-third">
    {% image "images/MBA-11-batt.jpg", "Déconnection de la batterie d'un MacBook Pro Air 11 pouces" %}
</div>
</div>


## Étape 2 : Nettoyer la carte mère (ou emmener votre Mac chez un pro)

L'étape 2 est plus délicate. Si vous êtes un habitué du démontage électronique, vous devriez vous en sortir.

> Et petit conseil, prenez des photos des zones oxydées avant le nettoyage.

On vous conseille les tutoriels d'[iFixit.com](http://www.ifixit.com) d'où viennent les images de tutoriels ci-dessus. Vous y trouverez toutes les étapes pour retire la carte mère de votre Mac.

Il faut, ensuite, vous munir d'alcool IPA à 90° minimum, et nettoyer votre carte mère avec une brosse à dents, et cet alcool. Restez sur les zones oxydées, nul besoin de nettoyer ce qui est propre... Laissez bien sécher votre carte-mère. Vous pouvez la mettre au four, sans dépasser les 120°C pendant 2h, pour la faire sécher en profondeur et plus rapidement.

Et petit conseil, prenez des photos des zones oxydées avant le nettoyage. Elles seront très utiles à un professionnel, si jamais il fallait remplacer des composants.

Si votre Mac ne fonctionne pas après ça, c'est que des composants ont été touchés. On fera un prochain article sur l'utilisation du [bac à ultrason](https://www.6337.fr/le-bac-ultrason-outil-essentiel-pour-reparer-une-carte-mere/), du microscope et d'un équipement de soudure pou réparer une carte mère.

Si vous ne vous sentez pas d'aller plus loin que la déconnexion de la batterie, contactez-nous.

On sait faire, et on le fait très souvent !
