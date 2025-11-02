---
outline: [2, 3]
prev:
  text: 'Pattern'
  link: '/v1/api/pattern/fr'
next:
  text: 'Either'
  link: '/v1/api/either/fr'
---

# Generator

Fonctions pour manipuler les générateurs JavaScript de manière fonctionnelle et type-safe. Les générateurs permettent de traiter des séquences de données de façon lazy (paresseuse), en ne calculant les valeurs que lorsqu'elles sont nécessaires.

## Exécution

### [execute](/v1/api/generator/execute/fr)
Exécute un générateur et retourne toutes ses valeurs dans un tableau.

## Itération

### [loop](/v1/api/generator/loop/fr)
Itère sur chaque élément d'un générateur avec une fonction callback.

### [asyncLoop](/v1/api/generator/asyncLoop/fr)
Itère sur chaque élément d'un générateur avec une fonction callback asynchrone.

## Transformation

### [map](/v1/api/generator/map/fr)
Transforme chaque élément d'un générateur en appliquant une fonction.

### [asyncMap](/v1/api/generator/asyncMap/fr)
Transforme chaque élément d'un générateur avec une fonction asynchrone.

## Filtrage

### [filter](/v1/api/generator/filter/fr)
Filtre les éléments d'un générateur selon un prédicat.

### [asyncFilter](/v1/api/generator/asyncFilter/fr)
Filtre les éléments d'un générateur avec un prédicat asynchrone.

## Réduction

### [reduce](/v1/api/generator/reduce/fr)
Réduit un générateur à une seule valeur en appliquant une fonction d'accumulation.

### [asyncReduce](/v1/api/generator/asyncReduce/fr)
Réduit un générateur à une seule valeur avec une fonction d'accumulation asynchrone.
