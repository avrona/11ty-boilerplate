---
title: "Comment récupérer ses données sur son Mac"
subtitle: "Récupérer ses données est une question récurrente. Selon l'âge de votre Mac, la possibilité, et la technique à adpoter sera différent."
date: "2022-05-07"
modified: "2022-04-07"
tags: 
  - "blog"
  - "knowledge base"
  - "premiers pas"
  - "non-classe"
coverImage: 'kb/images/Mac-hard-drive.jpg'
coverImageAlt: "Disque externe connecté à un MacBook Pro"
---

# Mon Mac n'est pas réparable : pourrai-je quand même récupérer mes données ?
On nous demande régulièrement si les données du Mac seront récupérables, même s'il s'avérait finalement non réparable. Nous avons de bonnes nouvelles pour vous : c'est très souvent le cas ! Même, vous pouvez dans plusieurs cas vous occuper seul⋅e de récupérer ces données, tout simplement en démontant le Mac et en récupérant le disque-dur, avant envoi pour réparation.
Enfin, ça, c'est pour les anciens modèles, parce qu'avec le temps, les choses se sont progressivement complexifiées...

## Première chose à essayer : le mode Target Disk

- cmd &#8984; + T au démarrage, puis brancher son Mac en USB.

Le mode "Target Disk" est assez peu connu, alors qu'il est présent sur Mac depuis la nuit des temps.. (bon, peut-être pas non plus, mais pas loin).
L'idée est la suivante : vous pressez une combinaison de touches au démarrage de votre Macbook Pro ou MacBook Air, et celui-ci se transforme en un gros disque dur externe. Vous pouvez le brancher à un autre Mac en Firewire, USB ou Thunderbolt selon le modèle. Le disque interne du Mac s'affiche alors sur cette autre machine comme si c'était un disque dure externe.

<div class="columns is-centered">
<div class="column is-half">
{% image "kb/images/Mac-targetdisk.jpeg", "Le logo Thunderbolt sur l'écran d'un Mac en mode target disque." %} 
</div>
</div>

C'est vraiment la meilleure solution en ca d'urgence, si votre écran n'affiche plus rien, s'il est cassé et inutilisable, ou si votre clavier est en panne... Si, si ! Si votre clavier est en panne, vous pouvez brancher un clavier externe et faire cette manipulation. Ça fonctionne !
L'un des avantages est que la récupération de données peut-être hyper rapide, si c'est une copie de SSD à SSD, sur un interface rapide (Thunderbolt par exemple).
Fonctionne avec tous les Macs. Attention, les Macs en USB-C nécessitent un câble USB-C vers USB3 qui gère la data ou un câble USB-C Thunderbolt (avec un éclair dessus), qui gère le transfert de données en Thunderbolt. Le câble fournit avec le chargeur de votre Mac ne marche pas. Il n'est pas certifié Thunderbolt. La majorité des câble de charge USB-C vers USB ne fonctionneront pas non plus...

## Plus c'est vieux, plus c'est facile

### MacBook Pro Unibody

Le disque dur est au format SATA 2,5'. C'est un format standard de disque dur d'ordinateurs portables, Mac et PC. Il suffit d'ouvrir le capot en dévissant les quelques vis cruciformes, débrancher la batterie et retirer les quelques vis qui fixent le disque dur. C'est assez accessible et iFixit à fait des tutoriels hyper détaillés pour chaque modèle. Un boitier USB externe pour ces disquse est disponible chez tout revendeur informatique pour 10 à 30€.
En résumé, c'est facile, rapide et pas cher.

### MacBook Pro Retina

Sur un Macbook Pro Retina, ça se complique mais c'est faisable. Le SSD est une barette avec un format spécifique Apple. Ce format à aussi évolué avec le temps. Ainsi, le format propriétaire Apple des Macbook Air 2010/2011 est différent de ceux des Macbook Pro 2013/2014/215, par exemple.
Ouvrir le Mac, est aussi un peu plus technique : Il vous faut un tournevis Pentalobe... un tournevis un peu spécial pour Apple MacBook Pro. Il se trouve assez facilement sur iFixit également ou d'autres boutiques spécialisiées.
Un fois ouvert, on débranche la batterie puis on peux tranquillement retirer la barrette SSD. Ensuite, il faut trouver un boitier externe compatible :

* [Pour les Macbook Air 2010 et 2011](http://eshop.sintech.cn/index.php?main_page=product_info&cPath=130_100&products_id=863&zenid=87pqspe1m4ti2lfithm14nirk7)
* [Pour les MacBook Pro Retina 13 pouces 2012 et 15 pouces 2012-2013-2014](http://eshop.sintech.cn/index.php?main_page=product_info&cPath=130_131&products_id=861)
* [Pour les Macbook Air 2012 à 2015, et Retina 13 pouces 2013 à 2015 et 15 pouces 2015](http://eshop.sintech.cn/index.php?main_page=product_info&cPath=130_132&products_id=1208)
  
### MacBook Air

Les disques-durs des MacBook Air sont similaires à ceux des Retina et le niveau de difficulté est le même pour récupérer le disque-dur (moyen). Voici le [tuto les 13 pouces](https://fr.ifixit.com/Tutoriel/Remplacement+du+SSD+d'un+MacBook+Air+13-Inch+mi-2013/10961), et c'est quasiment la même chose pour les 11 pouces (en un peu plus petit, vous l'aurez deviné...).

### Pour les boitiers

Chaque Mac à un format spécifique qui nécessitera un boitier externe spécifique et adapté. Transcend en propose avec ses kits JetDrive, souvent inclus avec un SSD neuf compatible Mac. 
Voici des liens pour acheter des boitiers externes adaptés aux disques-durs extraits, pour les utiliser ou réutiliser comme disques-durs externes :

 * [Pour les Macbook Air 2010 et 2011](http://eshop.sintech.cn/index.php?main_page=product_info&cPath=130_100&products_id=863&zenid=87pqspe1m4ti2lfithm14nirk7)
* [Pour les MacBook Pro Retina 13 pouces 2012 et 15 pouces 2012-2013-2014](http://eshop.sintech.cn/index.php?main_page=product_info&cPath=130_131&products_id=861)
* [Pour les Macbook Air 2012 à 2015, et Retina 13 pouces 2013 à 2015 et 15 pouces 2015](http://eshop.sintech.cn/index.php?main_page=product_info&cPath=130_132&products_id=1208)

## De la récupération compliquée à la récupération impossible...

### MacBook Pro USB-C 2017 avec touches de fonctions

Il s'agit des MacBook Pro USB-C mais sans Touchbar, avec des touches de fonctions classiques.
Ceux-ci possèdent un SSD amovibles avec un format bien spécifique (et jamais vu ailleurs).
On à pu voir passer, sur Twitter, Facebook ou dans nos groupes de discussions spécialisés, des adaptateurs testés par des confrères. Nous ne les avons pas testés et ne les avons pas eu sous la main. Difficile donc de vous conseiller à ce sujet.
Ils existent. Si vous les avez testés, dites le nous !

### MacBook Pro Touchbar 2016-2017

Le SSD est soudé, mais Apple avait prévu un connecteur pour récupérer ou transférer les données, placé sur la carte-mère.
Le kit de récupération de données est propriétaire et n'est pas distribué en dehors des réparateurs agréés Apple. Mais il n'est utile que si la carte-mère possède encore des fonctions vitales de base, ce qui veut normalement dire que nous pouvons la réparer.
Si la carte-mère n'est pas réparable, c'est que la récupération de données par ce connecteur n'aurait pas marché.

### MacBook Pro Touchbar 2018 et plus

Seule une réparation de carte-mère permet la récupération de données. Le SSD est chiffré par la puce T2. Si la puce T2 meurt, les données sont perdues. Si une puce du SSD meurt, c'est la carte-mère qui est perdue : la puce T2 empêchera toute réinitialisation du Mac, même en remplaçant la puce de SSD défectueuse.