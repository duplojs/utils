---
outline: [2, 3]
prev:
  text: 'Common'
  link: '/fr/v1/api/common/'
next:
  text: 'Clean'
  link: '/fr/v1/api/clean/'
---

# Array

Fonctions pour manipuler les tableaux de manière immutable et type-safe. Toutes les fonctions préservent le tableau original et retournent une nouvelle valeur.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DArray` et `A` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DArray, A } from "@duplojs/utils";
import * as DArray from "@duplojs/utils/array";
import * as A from "@duplojs/utils/array";
```

## Création et conversion

### [from](/fr/v1/api/array/from)
Crée un tableau à partir d'un itérable ou d'un objet array-like.

### [toTuple](/fr/v1/api/array/toTuple)
Convertit un tableau en tuple avec typage strict.

## Accès aux éléments

### [at](/fr/v1/api/array/at)
Retourne l'élément à un index (supporte les index négatifs).

### [first](/fr/v1/api/array/first)
Retourne le premier élément du tableau.

### [last](/fr/v1/api/array/last)
Retourne le dernier élément du tableau.

### [length](/fr/v1/api/array/length)
Retourne la longueur du tableau.

## Recherche et test

### [includes](/fr/v1/api/array/includes)
Vérifie si un tableau contient un élément.

### [notIncludes](/fr/v1/api/array/notIncludes)
Vérifie qu'un tableau ne contient pas une valeur donnée (type guard).

### [indexOf](/fr/v1/api/array/indexOf)
Retourne l'index de la première occurrence d'un élément.

### [lastIndexOf](/fr/v1/api/array/lastIndexOf)
Retourne l'index de la dernière occurrence d'un élément.

### [isLastIndex](/fr/v1/api/array/isLastIndex)
Indique si un index correspond au dernier élément du tableau.

### [find](/fr/v1/api/array/find)
Trouve le premier élément qui satisfait une condition.

### [findLast](/fr/v1/api/array/findLast)
Trouve le dernier élément qui satisfait une condition.

### [findIndex](/fr/v1/api/array/findIndex)
Trouve l'index du premier élément qui satisfait une condition.

### [findLastIndex](/fr/v1/api/array/findLastIndex)
Trouve l'index du dernier élément qui satisfait une condition.

### [every](/fr/v1/api/array/every)
Vérifie si tous les éléments satisfont une condition.

### [some](/fr/v1/api/array/some)
Vérifie si au moins un élément satisfait une condition.

### [is](/fr/v1/api/array/is)
Vérifie si une valeur est un tableau (type guard).

## Transformation

### [map](/fr/v1/api/array/map)
Applique une fonction à chaque élément et retourne un nouveau tableau.

### [filter](/fr/v1/api/array/filter)
Filtre les éléments selon une condition.

### [select](/fr/v1/api/array/select)
Filtre et transforme en une seule passe (avec inférence de la sortie).

### [slice](/fr/v1/api/array/slice)
Extrait une portion du tableau sans le modifier.

### [flat](/fr/v1/api/array/flat)
Aplatit un tableau imbriqué d'un niveau spécifié.

### [flatMap](/fr/v1/api/array/flatMap)
Applique une fonction puis aplatit le résultat d'un niveau.

### [chunk](/fr/v1/api/array/chunk)
Découpe un tableau en blocs de taille fixe.

### [reverse](/fr/v1/api/array/reverse)
Inverse l'ordre des éléments du tableau.

### [sort](/fr/v1/api/array/sort)
Trie les éléments du tableau.

## Agrégation

### [reduce](/fr/v1/api/array/reduce)
Réduit le tableau à une seule valeur (de gauche à droite).

### [reduceRight](/fr/v1/api/array/reduceRight)
Réduit le tableau à une seule valeur (de droite à gauche).

### [join](/fr/v1/api/array/join)
Joint tous les éléments en une chaîne avec un séparateur.

### [group](/fr/v1/api/array/group)
Groupe les éléments selon une fonction de clé.

### [sum](/fr/v1/api/array/sum)
Calcule la somme des éléments du tableau.

## Min/Max

### [minOf](/fr/v1/api/array/minOf)
Retourne la valeur minimale selon une fonction de projection.

### [maxOf](/fr/v1/api/array/maxOf)
Retourne la valeur maximale selon une fonction de projection.

### [minElements](/fr/v1/api/array/minElements)
Retourne le(s) élément(s) ayant la valeur minimale.

### [maxElements](/fr/v1/api/array/maxElements)
Retourne le(s) élément(s) ayant la valeur maximale.

## Modification

### [set](/fr/v1/api/array/set)
Modifie un élément à un index spécifique.

### [fill](/fr/v1/api/array/fill)
Remplit une section du tableau avec une valeur.

### [fillAll](/fr/v1/api/array/fillAll)
Remplit tout le tableau avec une valeur.

### [copyWithin](/fr/v1/api/array/copyWithin)
Copie une section du tableau vers un autre emplacement.

### [insert](/fr/v1/api/array/insert)
Ajoute une valeur en fin de tableau (arguments inversés pour le currying).

## Ajout et suppression

### [push](/fr/v1/api/array/push)
Ajoute un ou plusieurs éléments à la fin du tableau.

### [pop](/fr/v1/api/array/pop)
Supprime et retourne le dernier élément.

### [unshift](/fr/v1/api/array/unshift)
Ajoute un ou plusieurs éléments au début du tableau.

### [shift](/fr/v1/api/array/shift)
Supprime et retourne le premier élément.

### [concat](/fr/v1/api/array/concat)
Concatène plusieurs tableaux ensemble.

### [spliceDelete](/fr/v1/api/array/spliceDelete)
Supprime des éléments à partir d'un index.

### [spliceInsert](/fr/v1/api/array/spliceInsert)
Insère des éléments à un index spécifique.

### [spliceReplace](/fr/v1/api/array/spliceReplace)
Remplace des éléments à partir d'un index.

## Recherche et modification

### [findAndReplace](/fr/v1/api/array/findAndReplace)
Trouve un élément et le remplace par une nouvelle valeur.

### [findAndSpliceDelete](/fr/v1/api/array/findAndSpliceDelete)
Trouve et supprime un élément.

### [findAndSpliceInsert](/fr/v1/api/array/findAndSpliceInsert)
Trouve un élément et insère de nouveaux éléments.

### [findAndSpliceReplace](/fr/v1/api/array/findAndSpliceReplace)
Trouve et remplace un élément via splice.

## Utilitaires

### [coalescing](/fr/v1/api/array/coalescing)
Retourne le premier élément non-null et non-undefined.
