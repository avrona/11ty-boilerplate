---
title: "Comment cloner un disque chiffré ?"
subtitle: "Nous ne demandons jamais le mot de passe de votre Mac, sauf exception.   
Alors comment transférer les données ?   
Nous avons trouvé notre petite méthode."
date: "2022-06-10"
modified: "2022-06-10"
tags: 
  - "knowledge base"
  - "réparation"
coverImage: 'kb/images/disquedur-clone.jpeg'
coverImageAlt: "Disque dur Apple en cours de clonage"
---

## Mais pourquoi donc copier ou cloner un disque chiffré ?

On parle ici d'un disque chiffré dont on ne connait pas le mot de passe. C'est bizarre ? Pas tant que ça. Mettez-vous à notre place. Nous sommes réparateurs. Nous recevons de nombreux ordinateurs, avec des données parfois sensibles. Notre objectif est de les conserver au mieux (même si nous ne nous y engageons pas). Nous souhaitons aussi que vos données personnelles restent personnelles.

Dans cet objectif, et autant que possible, nous travaillerons sans vous demander votre mot de passe. Votre disque, chiffré avec votre mot de passe de session, restera chiffré, et ses données inaccessibles. C'est plus simple pour nous de vous garantir qu'aucune donnée ne fuite, puisqu'elles sont là, chiffrées, et que personne à part vous n'a le mot de passe.

Mais alors comment faire pour réaliser un remplacement de disque-dur sans le mot de passe de déchiffrement. Voilà, on y arrive.

> Conservez la sécurité de vos données personnelles à l'atelier tout en intervenant sur votre ordinateur nous oblige à quelques contorsions, et on vous les décrit plus bas.

## Chiffré/Crypté, un peu de vocabulaire:

On dit chiffré, et pas crypté. On parle souvent de cryptage pour tout ce qui est "codé de façon à le protéger". Il s'agit en fait d'un abus de langage. Si des données sont cryptées, cela veut dire que personne ne connaît le moyen de décoder (ou décrypter, qui est un terme qui existe aussi) les données, ou le message. Les données de votre disque-dur sont déchiffrables grâce au mot de passe, que vous n'avez peut-être pas.
On parle donc de chiffrement, et de données chiffrées.

## Le problème de la copie de disque chiffré:

"C'est simple", vous allez me dire, "il suffit de lancer Carbon Copy Cloner (ou n'importe quel outil de clonage de disque) et de le laisser faire le boulot". Ok, alors essayez... et vous vous rendrez compte qu'il vous faut le mot de passe maître pour monter le disque que vous voulez cloner. Or ce mot de passe, on ne l'a pas (et on ne veut pas l'avoir -> voir intro).

On ne peut pas non plus utiliser Utilitaire de Disque, ou autre... Il faut mettre un peu (beaucoup) les mains dans le cambouis.

## Méthode MacOS/Linux

Cette méthode fonctionne sur MacOS ou Linux, principalement parce que ce sont les plateforme que nous avons à l'atelier. Il faut, bien sûr, démarrer votre Mac sur un autre disque, ou avoir une machine qui sera dédiée à cette copie. Cloner le disque sur lequel vous avez booté est une mauvaise idée... Mais ça, j'espère que vous le savez déjà.

C'est parti !

### Copier la table de partition

Le première étape consiste à regarder la table de partition du disque d'origine et à la copier, (oui, à la main), pour qu'elle soit identique sur votre nouveau disque. Cela va sans dire, le nouveau disque doit être au-moins aussi gros que l'ancien.

On utilise l'outil GPT disponible dans le terminal (il est pré-installé, a-priori). Cet outil permet de "jouer" avec la table de partition et va nous permettre d'en recréer une nouvelle.

On commence par détruire l'ancienne table de notre disque cible, si nécessaire :
```console
gpt destroy diskCIBLE
```

Ensuite, on affiche la table de partition de notre disque source grâce à :

```console
gpt -r show diskSOURCE
```

On obtient un truc qui ressemble à:

```console
Mbp:~ avrona$ sudo gpt -r show disk2
Password:
       start        size  index  contents
           0           1         PMBR
           1           1         Pri GPT header
           2          32         Pri GPT table
          34           6         
          40      409600      1  GPT part - C12A7328-F81F-11D2-BA4B-00A0C93EC93B
      409640  1463469952      2  GPT part - 53746F72-6167-11AA-AA11-00306543ECAC
  1463879592     1269536      3  GPT part - 426F6F74-0000-11AA-AA11-00306543ECAC
  1465149128           7         
  1465149135          32         Sec GPT table
  1465149167           1         Sec GPT header
```

  Et c'est ça qu'il va falloir copier... en utilisant GPT de cette façon:

```console
  gpt add -i <index> -b <Start Block> -s <Size> -t <UUID> /dev/diskCIBLE
```

Exemples pour notre cas:

```console
gpt add -i 1 -b 40 -s 409600 -t C12A7328-F81F-11D2-BA4B-00A0C93EC93B /dev/diskCIBLE
gpt add -i 2 -b 409640 -s 1463469952 -t 53746F72-6167-11AA-AA11-00306543ECAC /dev/diskCIBLE
gpt add -i 3 -b 1463469952 -s 1269536 -t 426F6F74-0000-11AA-AA11-00306543ECAC /dev/diskCIBLE
```


### Copier le contenu des partitions

Pour copier le contenu des partitions, on peut utiliser le fameux outil dd, qui permet de faire un copier parfait, bit à bit. Il est un peu long... et c'est par forcément le plus efficace. De plus, il ne donne pas de barre de progression (vous pouvez appuyez sur [[T]] ou [[Ctrl]] + [[T]] pour avoir l'avancée... mais il n'y a rien d'intégré).

Ça donne ceci, en précisant bien la partition source et cible (disk3s2, par exemple) :

```console
sudo dd if=/dev/diskSOURCEsNUMSOURCE of=/dev/diskCIBLEsNUMCIBLE
```

On lui a préfère l'outil ddrescue, qu'il faut installer avec [Homebrew](https://fr.wikipedia.org/wiki/Homebrew_(gestionnaire_de_paquets)), [MacPorts](https://en.wikipedia.org/wiki/MacPorts) ou votre gestionnaire de package et d'appli préféré en ligne de commande sur Mac ou Linux.

```console
sudo ddrescue -f -n  /dev/disk3s3 /dev/disk2s3 /Users/username/Documents/fichierlog.log
```

La commande affiche le nombre de données copiées, la vitesse, et le fichier log permet de reprendre la copie en cas de problème. Elle est aussi plus rapide que dd.

Une fois tout cela copié, il suffit de vérifier la table de partition et le disque avec un :

```console
diskutil verifyDisk /dev/diskCIBLE
```

Et voilà.

Sources:
https://gist.github.com/vinicyusmacedo/4172cafc108bdfff7084017d1925b74f
https://apple.stackexchange.com/questions/116065/cloning-os-x-encrypted-drive
