---
title: "Nouvelle année, nouveau site pour 6337"
date: "2021-09-23"
tags:  
  - "blog"
  - "Atelier"
coverImage: "images/website-speed.jpg"
coverImageAlt: "Google lighthouse résultats de tests"
subtitle: "La low-tech, c'est comme le vélo : on la choisit parce que c'est rapide et pas cher. L'écologie n'est qu'une externalité positive. Voici les réflexions, cheminements, choix et difficultés vers le développement interne et le lancement de notre nouveau site."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---


## Avec de la low-tech dedans (un peu)

Cela faisait quelque temps que l'idée nous titillait de refaire notre site web. La première version avait pour seul but d'être rapidement opérationnelle, et a rapidement été réalisée sur Wordpress. 
Quelques mois plus tard, après avoir bien travaillé le *back-office* (la gestion client, en gros), il nous tardait de nous réattaquer au *front* (ce que vous voyez, notre vitrine).
Le déclic, entre autres, aura été de faire le test des *web vitals* de Google, qui permet d'évaluer quelques caractéristiques essentielles d'un site web. À ce test, notre site web initial a obtenu une note de 65/100 en vitesse de chargement. Décevant, pas à la hauteur, il fallait agir !

<div class="columns is-centered">
<div class="column is-half">
{% image "images/website-old-screenshot.jpg", "Une vue de notre ancien site web, efficace mais peux mieux faire." %}
</div>
</div>

Nous avions déjà entamé cette réflexion après avoir découvert les générateurs de site statiques (dont Jekyll, le plus célébre). Nous étions bien conscients qu'un site statique était beaucoup plus adapté à nos besoins (vitrine, blog et prise de contact pour nos devis) qu'un site Wordpress. Avec, en plus, l'avantage d'être  beaucoup plus léger, rapide... et écologique (un plus qui nous parle) !

Alors allons voir sous le capot. On vous raconte ici comment tout cela s'est passé.

### La JAMSTACK, un nom pompeux pour dire "site statique mais pas trop".

Quelle techno ? Comment s'y prendre ? Les choix techniques ont été dictés par nos capacités à coder en interne : HTML ? OK. CSS ? On fera avec. JS ? Il va falloir apprendre. Vous l'aurez compris : notre goût pour la technique ne s'arrête pas aux cartes-mères. Loin de nous rebuter, l'idée de mettre les mains dans le développement web low-tech nous enthousiasmait. Oui, ce nouveau site à été codé par nos petits doigts de soudeurs, et nous n'en sommes pas peu fiers !

#### Le CSS
Après quelques recherches et hésitations avec Tailwind, notre choix s'est arrêté sur Bulma : Un framework CSS qui permet de ne presque pas taper de CSS... Parfait pour nous ! L'idée ? Les classes ont des noms très clairs indiquant les styles qu'elles appliquent. Et ces derniers, chez Bulma, donnent déjà quelque-chose de plutôt sexy (il n'y a qu'à voir le site web de [Signal](https://www.signal.org/fr/), l'application de messagerie, dont le CSS est basé sur Bulma).

#### Le générateur de site statique

Pour la partie site statique, il fallait un générateur que l'on puisse comprendre (enfin, bidouiller...). Le SSG (*Static Site Generator*) à la mode en Javascript, c'est *11ty* (aka *Eleventy*). Après avoir vu quelques tutoriels, dont un détaillant comment transformer un thème HTML5/CSS en site 11ty, la décision était prise.

L'idée de base était de le faire en deux étapes : une première ou l'on reprend le même aspect du site pour en sortir une version rapide, tout en HTML/CSS mais sous forme de modèle (un seul article de blog sert de modèle aux autres), une deuxième étape pour transférer ça sous 11ty, avec un l'utilisation d'un language de *templating* (ce sera *nunjucks*).

## Les mains dans le cambouis (enfin, le clavier)

Les premiers contacts avec Visual Code Studio ("C'est comme ça qu'on code de nos jours ?!?") sont plutôt rassurants. L'outil complète vos lignes... C'est simple, confortable. Bulma et sa documentation sont également bien pensés. S'il y a bien du temps perdu, c'est sur la partie Javascript (oui, bon ce n'est pas notre métier non plus).

Nous avons rapidement pu avoir un premier jet fonctionnel, puis progressivement avancer dans la conception de chacune des pages : accueil, contact, prise-en-charge, blog, et modèle pour les pages de posts. 

Il s'est ensuite agi d'apprendre et bidouiller *Nunjucks*, le langage qui permet de manipuler les modèles de pages, et de diviser le site en petit blocs de code réutilisés et réagencés par 11ty (du *templating"* quoi). 

Puis d'optimiser le SEO (le référencement naturel). Pas évident avec 11ty, qui nous aura donné du fil à retordre (si vous avez déjà vu la liste interminable de balises Schema.org disponibles, vous comprendrez...). 

Enfin, nous avons installé un module d'optimisation d'images (relativement facilement configurable), ainsi que pleins d'autres petites choses qui paraissaient simples et ne le furent en fait pas tout le temps.

Il ne manquait plus que le formulaire de devis et de contact, LA partie dynamique de notre site. Une autre paire de manches...

### Formulaires, commentaires, analytics... que des nouvelles solutions

#### Des formulaires à la vanille

Pour les formulaires, on a fini par tout faire à la main, avec *Vanilla JS* : du javascript codé de A à Z. Certes, c'était plus technique, mais : 

* Cela nous permet de bien comprendre comment cela fonctionne, et comment <s>l'améliorer</s> le débugger.
* Nous avions besoin d'intégrer un système de devis avec un calcul de prix : pas si commun dans les formulaires existants.

Tant qu'à faire, nous en avons profité pour repenser l'expérience utilisateur, avec des boutons plutôt que des menus déroulant, bien mieux intégrés et très rapides à s'afficher. [L'avez-vous essayé ?](https://www.6337.fr/prise-en-charge/).

L'intégration avec notre CRM (Zoho) n'a pas été une mince affaire. Nous utilisons un petit script PHP pour renvoyer le contenu du formulaire vers son API. C'est plus sûr, et cela permet de ne pas jouer avec les configuration de Cross-Site-Scripting (c'est bon, vous suivez toujours ?).

#### "Comment-Sidecar", notre sauveur

Pour nos commentaires, nous avons cherché une solution qui permettait de conserver ceux écrits précédemment, donc qui soit basée sur PHP/MySQL (et open-source, et auto-hébergée). Ce n'était pas facile :

* **Disqus** : utilise vos données pour de la pub et du tracking (Facebook, notamment). C'est non.
* **Remark42** : nécessite Docker, donc un serveur.
* **Schnack** : nécessite Javascript côte serveur (NodeJS), idem.
* **Hashover** : nécessite de refaire le CSS (et il fallait plonger un peu dans le code PHP pour ça).
* **CommentBox** : freemium, et pas auto-hebergé.

... et puis nous avons trouvé Comment-Sidecar, sur github. Un petit outil très discret, qui propose des commentaires et le formulaire qui va avec, de façon rapide et facile, avec un CSS tout prêt pour Bulma. Il cochait toutes les cases : stockage local, non-rétention de données personnelles, anti-spam...
Après quelques commandes SQL (oui, ca fait beaucoup de langagues à bidouiller en peu de temps), nos commentaires de blog étaient transférés de Wordpress vers Comment-Sidecar, et ajoutés à 11ty, sur chacune de nos pages de blog. Yeah !

#### Analytics : vie-privée avant tout

Si l'on se démène pour avoir un système de commentaires auto-hebergé, c'est pas pour utiliser Google Analytics ensuite. Nous avions déjà testé Matomo (qui s'appelait Piwik à l'époque) et l'avons ré-installé ici pour le tester pendant quelques semaines. 
J'ai fini pas rechecher quelque chose de léger. Eh oui, figurez-vous qu'avec ce site statique ultra optimisé, le script de Matomo est le deuxième plus gros élément de la page d'acceuil... 28 ko.
L'outil à la mode, c'est Plausible. Il est open-source, auto-hébergeable (mais c'est pas facile : Docker et serveur x86), et surtout il est très, très, très léger. Moins de 1 ko, à comparer aux 38 ko de GoogleAnalytics, ou au 28 de Matomo.

L'un des avantages principaux de ces solutions, par rapport à Google Analytics, est de pouvoir facilement les configurer pour ne retenir aucune données personnelles (adresses IP anonymisées), et de ne partager le tracking avec aucun autre site. Ainsi, la CNIL laisse la possibilité de ne pas demander d'accord (le fameux "Ce site utilise des cookies") pour ce genre d'analyse anonyme.
Quel confort d'arriver sur un site ou vous n'avez besoin de donner votre accord pour une utilisation de données opaque !
De notre côté, nous n'avons pas besoin de plus d'informations (navigateur, taille de l'écran, type de device, localisation, temps passé sur chaque page...) pour nous faire une idée de ce qui marche ou ne marche pas, et pouvoir (ré)agir en cas de baisse d'activité (ou d'attrait !) pour nos services. Qui aurait besoin de plus ?

### Rapide, léger, respectueux !

Au final, cette aventure nous aura donné un site avec tous ces avantages :

* **Rapide comme l'éclair** : s'il reste encore quelques améliorations possibles, ce serait vraiment chercher la petite bête que de se pencher dessus. La navigation est quasi instantanée, et le ressenti est top. J'imagine que ceux qui viennent nous voir sur un veil ordi (parce que le nouveau est en panne, bien sûr), sont bien contents de ne pas autant ressentir le poids des années.
* **Léger comme une plume** : Les accès serveurs sont limités au strict minimum. Le poids des images est optimisé en fonction du navigateur, le serveur travaille beaucoup moins. On aime.
* **Respectueux de la vie-privée** : On aurait pu le faire avant. On aurait dû le faire avant. Google Analytics n'est que la solution par défaut. On l'installe parce que tout le monde l'a, parce que c'est facile, parce qu'on ne connaît pas les autres. Il existe une multitude d'alternatives qui permettent de reprendre le contrôle sur les données.

<div class="columns is-centered">
<div class="column is-half has-text-centered">
{% image "images/website-speed.jpg", "Résultat Google Lighthouse de notre siteweb." %}
</div>
</div>

## Et après...

### Petites améliorations

On a laissé quelques fonctions et contenus sur le bas-côté. Pour le moment, il n'y plus de recherche. Nous réfléchissons à une solution pour la remettre dans le blog, ce qui sera essentiel lorsque le nombre d'articles aura grandi. Nous avons retiré la partie "base de connaissances", qui n'était pas alimentée correctement. Nous aimerions aussi pouvoir compiler et uploader uniquement les fichiers qui sont modifiés lors d'une modification du site, ce qui serait plus efficace.

<div class="columns is-centered">
<div class="column is-half">
{% image "images/website-new-screenshot.jpg", "Le nouveau design de notre site web." %}
</div>
</div>

### Révolution

Un de nos projet est de pouvoir documenter chacune de nos interventions : photos larges, photos au microscope, liste des composants changés et symptômes liés, erreurs ou questions, voire problèmes non-résolus... 

Ce projet pourrait aboutir à deux résultats : 

* Le premier serait de fournir à nos clients un **compte-rendu d'intervention** : il saurait ce qui à été fait et pourraient ainsi assurer une forme de suivi si une autre réparation est faite par un autre professionnel.
* Le second serait de publier toutes ces informations, de façon anonyme bien sûr. N'importe quel internaute pourrait voir la liste des interventions, les photos des carte-mères, des soudures, les succès et les échecs. Une telle base serait une ressource énorme pour d'autres réparateurs (et pour nous) pour trouver des solutions. Documentation, partage et ouverture sont des valeurs qui nous animent, et les bases d'une bonne démarche scientifique pour progresser.

## Le mot de la fin

Si vous avez aimé cet article, que vous avez un avis au sujet d'une des solutions que l'on utilise, que vous souhaitez en savoir plus sur notre démarche, notre parcours ou toute autre chose, n'hésitez pas à commenter ou à nous contacter directement.

Nous mettrons cet article à jour avec la concrétisation des petites et grandes idées décrites ici. À très vite !
