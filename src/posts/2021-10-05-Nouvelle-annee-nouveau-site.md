---
title: "Nouvelle année, nouveau site pour 6337"
date: "2021-09-23"
tags:  
  - "blog"
  - "Atelier"
coverImage: "images/website-speed.jpg"
coverImageAlt: "Google lighthouse résultats de tests"
subtitle: "Le low-tech c'est comme le vélo: on le choisit parce que c'est rapide et pas cher. L'écologie n'est qu'une externalité positive. Voici les réflexions, cheminements, choix et difficultés vers le développement interne et le lancement de notre nouveau site."
permalink : "./{{ page.fileSlug }}/"
layout: 'layouts/post.njk'
---


## Avec du low-tech dedans (un peu)

Ca faisait quelques temps que l'idée nous titillait de refaire notre site web. La première version était faite pour commencer à réparer plein de choses sans attendre.
On à travaillé le *back-office* (la gestion client, en gros), il fallait s'attaquer au *front* (ce que vous voyez, notre vitrine).
Le déclic aura été un test des *web vitals* de Google, qui permettent d'évaluer quelques caractéristiques essentielles d'un site web: le 65/100 obtenu en vitesse de chargement était insuffisant pour moi !

<div class="columns is-centered">
<div class="column is-half">
{% image "images/website-old-screenshot.jpg", "Une vue de notre ancien site web, efficace mais peux mieux faire." %}
</div>
</div>

La réflexion était en fait déjà un peu engagée, après avoir découvert les générateurs de site statiques, dont Jekyll, le plus célébre.
Un site statique est beaucoup plus adapté à ce que l'on fait (vitrine, blog et prise de contact pour nos devis) qu'un Wordpress. Surtout, c'est beaucoup plus léger, rapide, et aussi écologique (accessoirement) !

Alors allons voir sous le capot. On vous raconte ici comment tout cela s'est passé.

### L'été, période propice aux rénovations

L'été et son calme économique était la période idéale pour nous. Pour citer un de mes amis très cynique: "En août, la France est dirigée par des stagiaires." (sauf à 6337...).

On a donc démarré les réflexion dès Mai/Juin sur le quoi et le comment. En commençant par les choix techniques.

### La JAMSTACK, un nom pompeux pour dire "site statique mais pas trop".

Les choix techniques ont été dictés par nos capacités à coder en interne: HTML ? ça va. CSS ? on fera ce qu'on pourra. JS ? On va prendre quelques cours.
Oui, ce nouveau site à été codé par nos petits doigts de soudeurs, et on est pas peu fiers !

#### Le CSS
Après quelques recherches et hésitations avec Tailwind, notre choix s'est arrêté surs Bulma: Un framework CSS qui permet de ne presque pas taper de CSS... Parfait pour nous! L'idée ? Les classe ont des noms assez claires pour qu'on connaisse le styles qu'elles appliquent. Et les styles de base Bulma donnent un truc plutôt sexy. Il n'y a qu'à voir le site web de Signal, l'application de messagerie, basé sur Bulma (pour la partie CSS).

#### Le générateur de site statique

Pour la partie site statique, il fallait un générateur qu'on puisse comprendre (enfin, bidouiller...). Le SSG (*Static Site Generator*) à la mode en Javascript, c'est *11ty* (aka *Eleventy*). Après avoir vu quelques tutoriels, dont un détaillant comment transformer un thème HTML5/CSS en site 11ty, la décision était prise.

L'idée de base était de le faire en deux étapes: Une première ou l'on reprend le même aspect du site pour en sortir une version rapide, tout en HTML/CSS mais sous forme de modèle: un seul article de blog sert de modèle aux autres. Une deuxième étape pour transférer ça sous 11ty, avec un l'utilisation d'un language de *templating* (ce sera *nunjucks*).

## Les mains dans le cambouis (enfin, le clavier)

Premiers contacts avec Visual Code Studio "C'est comme ça qu'on code de nos jours ?!?" Avec un outil qui vous complète chacune de vos lignes... C'est simple, confortable.
Bulma est sa documentation sont bien faites. Le temps perdu l'est parce que je suis mauvais en JS (ou parce que le code n'est pas mon métier).

J'ai rapidement un premier jet. J'avance progressivement dans la conception de chacune des pages: acceuil, contact, prise-en-charge, blog, et modèle pour les pages de posts.

Il faudra ensuite encore se retrousser les manches pour apprendre et bidouiller *Nunjucks*, le languages qui permet de manipuler les modèles de pages, et de diviser le site en petit blocs de code réutilisés et réagencés par 11ty (du *templating"* quoi).

11ty aussi nous aura donné du fil à retordre. L'optimisation SEO se fait à la main. Si vous avez déjà vu la liste interminable de balise Schema.org disponibles, vous saurez de quoi je parle. Il faudra aussi installer un module d'optimisation d'images (déjà fait et relativement facilement configurable), ainsi que pleins d'autres choses qui paraissent évidents et ne le sont en fait pas du tout.

Mais il manque quelques chose d'essentiel, le formulaire de devis et de contact. Ce sera une autre paire de manches, parce que c'est exactement qu'on sort du statique pur, pour aller faire quelques chose de plus dynamique.

### Formulaires, commentaires, analytics... que des nouvelles solutions

#### Des formulaires à la vanille

Pour les formulaires, on a finit par tout faire à la main. *Vanilla JS*: du javascript codé de A à Z. Comme ça, on comprend bien comment ça marche et ce que ça fait, et on sait comment <s>l'améliorer</s> le débugger.
C'est aussi un choix fait pour intégrer notre système de devis et de calcul. C'est quelque chose de pas si commun dans de formulaires. Le résultat final me plait beaucoup.
On en profite pour refaire tout le parcours de formulaire de prise en charge, avec des boutons plutôt que des menus déroulant, bien mieux intégré et hyper rapide à s'afficher. Que du bonheur à utiliser.

Ca n'a pas été une mince affaire. On utilise un petit script PHP pour renvoyer le contenu du formulaire vers l'API de notre CRM. C'est plus sûr, et cela permet de ne pas jouer avec les configuration de Cross-Site-Scripting.

#### "Comment-Sidecar", notre sauveur

La plateforme d'hébergement (Gandi) est sur un serveur PHP/MySQL qui hébergait notre Wordpress, parmi d'autres. On a donc cherché une solution qui permettait de garder nos commentaires qui soit basé sur PHP/MySQL (et open-source, et auto-hébergée). Ce n'était pas facile:

* Disqus: Utilise vos données pour de la pub et du tracking (Facebook, notamment). C'est non.
* Remark42: Nécessite Docker, donc un serveur.
* Schnack: Nécessite Javascript côte serveur (NodeJS), idem.
* Hashover: Nécessite le CSS était à refaire (et il fallait plonger un peu dans le code PHP pour ça)
* CommentBox: Freemium, et pas auto-hebergé.

On a fini par trouver Comment-Sidecar sur github. Un petit outil très discret, qui propose des commentaires et le formulaire qui va avec, de façon rapide et facile, avec un CSS tout prêt pour Bulma. Il coche toutes les cases: Stockage local, non-retention de données personnelles, anti-spam...
Après quelques commandes SQL (oui, ca fait beaucoup de langagues à bidouiller en peu de temps) nos commentaires de blog étaient transféré de Wordpress vers Comment-Sidecar, et ajoutés à 11ty, sur chacune de nos pages de blog.

#### Analytics : vie-privée avant tout

Si on veut un système de commentaires auto-hebergé, c'est pas pour utiliser Google Analytics ensuite. J'avais déjà testé Matomo (qui s'appelait Piwik à l'époque) et que j'ai ré-installé ici pour le test pendant quelques semaine. J'ai continué ma quête, tout en optimisant le site nouvellement créé et installé.
J'ai fini pas rechecher quelque chose de léger. Eh oui, figurez-vous qu'avec ce site statique ultra optimisé, le script de GoogleAnalytics est le deuxième plus gros élément de la page d'acceuil... 38 ko.
L'outil à la mode, c'est Plausible. Il est open-source, auto-hébergeable (mais c'est pas facile: Docker et serveur x86), et surtout il est très, très, très léger. Moins de 1 ko, à comparer aux 38 ko de GoogleAnalytics, ou au 28 ko de Matomo.

L'un des avantages principaux de ces solutions, par rapport à Google Analytics, est de pouvoir facilement les configurer pour ne retenir aucune données personnelles (adresses IP anonymisées) et de ne partager le tracking avec aucun autre site, et seulement sur des visites uniques. Ainsi, la CNIL laisse la possibilité de ne pase demander d'accord pour ce genre d'analyse anonyme.
Quel confort d'arriver sur un site ou vous n'avez besoin de donner votre accord pour une utilisation que vous ne connaissez pas !
De notre côté, pas besoin de plus d'analyses: navigateur, taille de l'écran, type de device, localisation, temps passé sur chaque page... C'est largement suffisant pour se faire une idée de ce qui est intéressant, et pouvoir agir et réagir en cas de basse d'activité ou d'attrait pour nos services. Qui aurait besoin de plus ?

### Rapide, léger, respectueux !

Au final, cette aventure nous aura donné un site avec tout ces avantages:

* Rapide comme l'éclair : Et il reste encore quelques améliorations possibles, mais ce serait vriament chercher la petite bête. La navigation est quasi instantanée, et ç se sent tout de suite. J'imagine que ceux qui viennent nous voir sur un veille ordi (parce que le nouveau est en panne, bien sûr), sont bien content de ne pas autant ressentir le poids des années.
* Léger comme une plume : Les accès serveurs sont limités au strict minimum. Le poids des images est optimisé en fonction du navigateur, le serveur bosse beaucoup moins (même s'il doit pas mal bosser pour compiler le site, mais c'est plus ponctue). On a pas calculé, mais on aime.
* Respectueux de la vie-privée : On aurait pu le faire avant. On aurait du le faire avant. Google Analytics n'est qe la solution par défaut. On l'installe parce que tout le monde l'a, parce que c'est facile, parce qu'on ne connaît pas les autres. Il existe une multitude d'alternative qui permettent de reprendre le contrôle sur ses données.

<div class="columns is-centered">
<div class="column is-half has-text-centered">
{% image "images/website-speed.jpg", "Résultat Google Lighthouse de notre siteweb." %}
</div>
</div>

## Et après...

### Petites améliorations

On a laissé quelques fonctions et contenus sur la bas-côté. Ainsi, il n'y plus de recherche, et on travaille actuellement à une solution pour permettre de chercher dans le blog. Ce sera d'autant plus essentiel lorsque le nombre d'articles aura grandi. On a retiré la partie "base de connaissances". Nous n'avons pas le temps de l'alimenter correctement. On voudrait aussi pouvoir complier et uploader uniquement les fichiers qui sont modifiés, ce sera beaucoup mieux, et beaucoup plus efficace.

<div class="columns is-centered">
<div class="column is-half">
{% image "images/website-new-screenshot.jpg", "Le nouveau design de notre site web." %}
</div>
</div>

### Révolution

Un de nos projet est de pouvoir documenter chacune de nos interventions: photos larges, photos au microscope, liste des composants changés et symptômes liés, erreurs ou questions, voir problème non-résolus... 

Ce projet pourrait aboutir à deux résultats. Le premier serait de fournir à nos clients un compte-rendu d'intervention. Il saurait ce qui à été fait et pourraient ainsi assurer une forme de suivi si une autre réparation est faite par un autre professionnel.

Le second serait de publier toutes ces informations, de façon anonyme bien sûr. N'importe quel internaute pourrait voir la liste des interventions, les photos des carte-mères, des soudures, les succès et les échecs. Une telle base serait une ressource énorme pour d'autres réparateurs (et pour nous) pour trouver des solutions. Ce serait aussi une sacré preuve de notre savoir-faire. Documentation, partage et ouverture, les bases d'une bonne démarche scientifique pour progresser.

## Le mot de la fin

Si vous avez aimé cet article, que vous avez un avis au sujet d'une des solutions que l'on utilise, que vous souhaitez en savoir plus sur notre démarche, notre parcours et noatre avenir, n'hésitez pas à commenter ou à nous contacter directement.

On viendra mettre-à-jour cet article avec la concrétisation des petites et grandes idées décrites ici.


