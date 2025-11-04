---
outline: [2, 3]
prev:
  text: 'Number'
  link: '/v1/api/number/fr'
next:
  text: 'Object'
  link: '/v1/api/object/fr'
---

# Array

Fonctions pour manipuler les tableaux de manière immutable et type-safe. Toutes les fonctions préservent le tableau original et retournent une nouvelle valeur.

## Création et conversion

### [from](/v1/api/array/from/fr)
Crée un tableau à partir d'un itérable ou d'un objet array-like.

### [toTuple](/v1/api/array/toTuple/fr)
Convertit un tableau en tuple avec typage strict.

## Accès aux éléments

### [at](/v1/api/array/at/fr)
Retourne l'élément à un index (supporte les index négatifs).

### [first](/v1/api/array/first/fr)
Retourne le premier élément du tableau.

### [last](/v1/api/array/last/fr)
Retourne le dernier élément du tableau.

### [length](/v1/api/array/length/fr)
Retourne la longueur du tableau.

## Recherche et test

### [includes](/v1/api/array/includes/fr)
Vérifie si un tableau contient un élément.

### [indexOf](/v1/api/array/indexOf/fr)
Retourne l'index de la première occurrence d'un élément.

### [lastIndexOf](/v1/api/array/lastIndexOf/fr)
Retourne l'index de la dernière occurrence d'un élément.

### [find](/v1/api/array/find/fr)
Trouve le premier élément qui satisfait une condition.

### [findLast](/v1/api/array/findLast/fr)
Trouve le dernier élément qui satisfait une condition.

### [findIndex](/v1/api/array/findIndex/fr)
Trouve l'index du premier élément qui satisfait une condition.

### [findLastIndex](/v1/api/array/findLastIndex/fr)
Trouve l'index du dernier élément qui satisfait une condition.

### [every](/v1/api/array/every/fr)
Vérifie si tous les éléments satisfont une condition.

### [some](/v1/api/array/some/fr)
Vérifie si au moins un élément satisfait une condition.

### [is](/v1/api/array/is/fr)
Vérifie si une valeur est un tableau (type guard).

## Transformation

### [map](/v1/api/array/map/fr)
Applique une fonction à chaque élément et retourne un nouveau tableau.

### [filter](/v1/api/array/filter/fr)
Filtre les éléments selon une condition.

### [flat](/v1/api/array/flat/fr)
Aplatit un tableau imbriqué d'un niveau spécifié.

### [flatMap](/v1/api/array/flatMap/fr)
Applique une fonction puis aplatit le résultat d'un niveau.

### [reverse](/v1/api/array/reverse/fr)
Inverse l'ordre des éléments du tableau.

### [sort](/v1/api/array/sort/fr)
Trie les éléments du tableau.

### [sortNumber](/v1/api/array/sortNumber/fr)
Trie un tableau de nombres.

### [sortString](/v1/api/array/sortString/fr)
Trie un tableau de chaînes de caractères.

## Agrégation

### [reduce](/v1/api/array/reduce/fr)
Réduit le tableau à une seule valeur (de gauche à droite).

### [reduceRight](/v1/api/array/reduceRight/fr)
Réduit le tableau à une seule valeur (de droite à gauche).

### [join](/v1/api/array/join/fr)
Joint tous les éléments en une chaîne avec un séparateur.

### [group](/v1/api/array/group/fr)
Groupe les éléments selon une fonction de clé.

### [sum](/v1/api/array/sum/fr)
Calcule la somme des éléments du tableau.

## Min/Max

### [minOf](/v1/api/array/minOf/fr)
Retourne la valeur minimale selon une fonction de projection.

### [maxOf](/v1/api/array/maxOf/fr)
Retourne la valeur maximale selon une fonction de projection.

### [minElements](/v1/api/array/minElements/fr)
Retourne le(s) élément(s) ayant la valeur minimale.

### [maxElements](/v1/api/array/maxElements/fr)
Retourne le(s) élément(s) ayant la valeur maximale.

## Modification

### [set](/v1/api/array/set/fr)
Modifie un élément à un index spécifique.

### [fill](/v1/api/array/fill/fr)
Remplit une section du tableau avec une valeur.

### [fillAll](/v1/api/array/fillAll/fr)
Remplit tout le tableau avec une valeur.

### [copyWithin](/v1/api/array/copyWithin/fr)
Copie une section du tableau vers un autre emplacement.

## Ajout et suppression

### [push](/v1/api/array/push/fr)
Ajoute un ou plusieurs éléments à la fin du tableau.

### [pop](/v1/api/array/pop/fr)
Supprime et retourne le dernier élément.

### [unshift](/v1/api/array/unshift/fr)
Ajoute un ou plusieurs éléments au début du tableau.

### [shift](/v1/api/array/shift/fr)
Supprime et retourne le premier élément.

### [concat](/v1/api/array/concat/fr)
Concatène plusieurs tableaux ensemble.

### [spliceDelete](/v1/api/array/spliceDelete/fr)
Supprime des éléments à partir d'un index.

### [spliceInsert](/v1/api/array/spliceInsert/fr)
Insère des éléments à un index spécifique.

### [spliceReplace](/v1/api/array/spliceReplace/fr)
Remplace des éléments à partir d'un index.

## Recherche et modification

### [findAndSpliceDelete](/v1/api/array/findAndSpliceDelete/fr)
Trouve et supprime un élément.

### [findAndSpliceInsert](/v1/api/array/findAndSpliceInsert/fr)
Trouve un élément et insère de nouveaux éléments.

### [findAndSpliceReplace](/v1/api/array/findAndSpliceReplace/fr)
Trouve et remplace un élément via splice.

## Utilitaires

### [coalescing](/v1/api/array/coalescing/fr)
Retourne le premier élément non-null et non-undefined.
