---
outline: [2, 3]
prev:
  text: 'Either'
  link: '/fr/v1/api/either/'
next:
  text: 'String'
  link: '/fr/v1/api/string/'
---

# Generator

Fonctions pour manipuler les générateurs JavaScript de manière fonctionnelle et type-safe. Les générateurs permettent de traiter des séquences de données de façon lazy (paresseuse), en ne calculant les valeurs que lorsqu'elles sont nécessaires.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DGenerator` et `G` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DGenerator, G } from "@duplojs/utils";
import * as DGenerator from "@duplojs/utils/generator";
import * as G from "@duplojs/utils/generator";
```

## Exécution

### [execute](/fr/v1/api/generator/execute)
Exécute un générateur et retourne toutes ses valeurs dans un tableau.

## Itération

### [loop](/fr/v1/api/generator/loop)
Itère sur chaque élément d'un générateur avec une fonction callback.

### [asyncLoop](/fr/v1/api/generator/asyncLoop)
Itère sur chaque élément d'un générateur avec une fonction callback asynchrone.

## Transformation

### [map](/fr/v1/api/generator/map)
Transforme chaque élément d'un générateur en appliquant une fonction.

### [asyncMap](/fr/v1/api/generator/asyncMap)
Transforme chaque élément d'un générateur avec une fonction asynchrone.

### [chunk](/fr/v1/api/generator/chunk)
Découpe un itérable en blocs de taille fixe et retourne un générateur de tableaux.

## Filtrage

### [filter](/fr/v1/api/generator/filter)
Filtre les éléments d'un générateur selon un prédicat.

### [asyncFilter](/fr/v1/api/generator/asyncFilter)
Filtre les éléments d'un générateur avec un prédicat asynchrone.

## Réduction

### [reduce](/fr/v1/api/generator/reduce)
Réduit un générateur à une seule valeur en appliquant une fonction d'accumulation.

### [asyncReduce](/fr/v1/api/generator/asyncReduce)
Réduit un générateur à une seule valeur avec une fonction d'accumulation asynchrone.
