# CV Gabriel

## Modification à faire
- ajour dossir étude
- cases -> diplome
- article de journal
- partie diers
- redac a propos

## Installation et fonctionnement

Pour utiliser ce site, il te faut d'aboir avoir un compte github et installer git sur ton ordinateur.
Il te faut aussi installer vscode (c'est un éditeur de fichiers pour la programmation gratuit).

Je vais t'apprendre 2-3 trucs de base sur git et github pour que cela fonctionne sans tout casser.

### Git

Voici les infos de base qu'il te faut connaître :

#### Les branches

Git c'est comme un arbre. Il y a des branches. Elles te permettent de faire des modifications sans tout casser.
Tu as une branche `main`qui est celle de "production". C'est à dire qu'on ne code JAMAIS JAMAIS JAMAIS dessus. Ce sont les informations qu'internet va aller chercher pour afficher tes pages.
Tu as une branche `dev` qui est la branche de test. 
Quand ton site fonctionne correctement en local avec la branche dev, tu feras une petite manip pour qu'elle passe en production.

##### Pour passer d'une branche à l'autre :
`git checkout <nom de la branche>`

##### Pour enregistrer son travail :
```
git add .
git commit -m "<explication>"
git push
```

Explications :
`git add .` permet d'ajouter toutes tes modifications dans une mémoire
`git commit -m ""` décrit ce que tu as fait. Exemple : `git commit -m "correction orthographique"`
`git push` permet d'envoyer les informations sur le serveur.

En utilisant ce système, si tu fais des bêtises, tu pourras m'appeler et me dire oups j'ai fait une connerie et je pourrais tout réparer.

Bien entendu avant toute chose tu vérifie que tu est bien sur la branche dev.

##### Pour vérifier sur quelle branche on est :
`git branch`

##### Pour transférer les modifications sur `main` :
```
git checkout main
git merge dev
```

### Adresse de Prod :
https://gabrielbarge.netlify.app/

BON TRAVAIL


