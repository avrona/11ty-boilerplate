---
title: "Touches au démarrage"
subtitle: "Toutes les combinaisons de touches à presser au démarrage pour des actions spéficiques sur Mac."
date: "2022-05-19"
modified: "2022-05-19"
tags: 
  - "knowledge base"
  - "premiers pas"
  - "non-classe"
coverImage: 'kb/images/2019_16-inch_MacBook_Pro.jpg'
coverImageAlt: "Disque externe connecté à un MacBook Pro"
---

Cet article concerne les Mac avec un processeur Intel.

*Note : Les Macs avec un mot de passe firmware ne permettront pas de démarrer à partir d'un volume différent sans mot de passe. Ils ne pourront pas utiliser la PRAM.*

## Récupération :
[[cmd &#8984;]] + [[R]] : Démarrage à partir du mode "récupération" intégré (en local).

##### Mac avec macOS 10.12.4 ou plus récent :
[[Alt &#8997;]] +  [[cmd &#8984;]]  + [[R]] : Démarrer à partir de la récupération internet la plus récente et compatible avec votre Mac.
[[Maj &#8679;]] + [[alt &#8997;]] +  [[cmd &#8984;]]  + [[R]] : Démarrer à partir du mode de récupération internet le plus proche du macOS d'origine fourni avec votre Mac.

##### Macs avec une version précédente à macOS 10.12.4 :
[[alt &#8997;]] +  [[cmd &#8984;]]  + [[R]] : Démarrer à partir de la restauration Internet la plus proche du macOS d'origine fourni avec votre Mac.

## Réinitialisations :

### Réinitialisation de la PRAM :
[[alt &#8997;]] +  [[cmd &#8984;]]  + [[P]] + [[R]] : Réinitialiser NVRAM/PRAM. Cela réinitialisera la luminosité de l'écran, le volume du son, le disque de démarrage par défaut au premier périphérique de stockage disponible (généralement le disque dur interne/SSD), les paramètres Bluetooth/WiFi, le jeton *Find My Mac*, la résolution d'affichage et la sélection GPU.

### Réinitialisation du SMC :
[[ctrl]] + [[Alt &#8997;]] gauche + Maj [[&#8679;]] droit + Power (à maintenir au moins 10 secondes) - Pour les ordinateurs portables avec puce T2
[[Maj &#8679;]] gauche + [[ctrl]] + [[alt &#8997;]] gauche + Power - Pour les ordinateurs portables avec batterie non amovible et sans puce T2
Pour tous les autres Macs : Déchargez la machine ou débranchez la batterie.


### Réinitialisation la puce T2:
Voir article dédié: [Votre Mac ne démarre pas ? Et si c'était la puce T2](../../puce-T2-DFU-guide/ "Votre Mac ne démarre pas ? Et si c'était la puce T2?")

### Diagnostic :
[[Alt &#8997;]] : Utiliser le gestionnaire de démarrage. Les Macs plus récents permettent le démarrage en WiFi et la sélection des volumes NetBoot à partir de cet écran.
[[Maj &#8679;]] : Démarrer en mode sans échec. (Extension désactivée).
[[D]] : Démarrer l'Apple Hardware Test (AHT) intégré.
[[Alt &#8997;]] + [[D]] : Démarrer l'Apple Hardware Test (AHT) en ligne (connection internet requise).
[[N]] : Démarrer à partir du dernier volume NetBoot ou du volume par défaut. [[Alt &#8997;]] + N : Démarrer à partir du volume NetBoot par défaut.
[[cmd &#8984;]] + [[S]] : Démarrer en mode utilisateur unique.
[[T]] : Démarrer en mode disque cible.
[[cmd &#8984;]]  + [[V]] : Démarrage en mode verbeux.
Bouton d'éjection, [[F12]] : Éjecter les disques amovibles (disque externe, CD/DVD...)
[[C]] : Démarrer à partir du lecteur optique.