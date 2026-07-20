# Tennis kata 

## Regles de base 

- Mob programming 
- Rotation toutes les 10 minutes, 
- Chaque personne doit écrire au moins une ligne de code par rotation,
- Chaque personne doit écrire au moins un test par rotation,
- On applique la méthodologie TDD (Test Driven Development) : on écrit d'abord un test qui doit échouer (une erreur de compilation est un échec), puis le minimum de code pour le faire passer.

## Objectifs 

- Implémenter un jeu de tennis en respectant les règles officielles.
- Mettre en oeuvre les principes de la programmation orientée objet.
- Utiliser les principes généraux de la programmation fonctionnelle (immutabilité, fonctions pures au maximum, etc.)
- Se faire plaisir en codant et en apprenant de nouvelles choses ! 

## Regles du jeu de tennis

- Le score d'un jeu de tennis est compté de la manière suivante : 0, 15, 30, 40.
- Si les deux joueurs ont 40, on dit qu'ils sont à égalité (deuce). 
- Le joueur qui marque le point suivant obtient l'avantage. 
    - S'il marque encore un point, il gagne le jeu. 
    - S'il perd le point suivant, le score revient à égalité.


## Etapes de mise en oeuvre

- [] Création d'une classe Game qui représente un jeu, 
    - [x] Afficher le 0 - 0 
    - [x] Afficher le 15, 30, 40 
    - [x] Gérer le Deuce, 
        - [x] Avantage 
        - [x] Victoire 
    - [x] Afficher la victoire d'un joueur 
- [x] Création d'une classe Set qui représente un Set   
    - [] Afficher les jeux par Set ? 
- [] Créer une classe Match, qui permet de gagner en 2 ou 3 sets. 
