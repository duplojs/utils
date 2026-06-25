---
outline: [2, 3]
description: "DDataParser.array() valide des tableaux homogènes en appliquant un parser élément et des checkers (min, max, refine, ...). Chaque erreur inclut l'index fautif (items[2])."
prev:
  text: "object"
  link: "/fr/v1/api/dataParser/object"
next:
  text: "tuple"
  link: "/fr/v1/api/dataParser/tuple"
---

# array

`DDataParser.array()` valide des tableaux homogènes en appliquant un parser élément et des checkers (`min`, `max`, `refine`, ...). Chaque erreur inclut l'index fautif (`items[2]`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/array/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Paramètres

- `element` : parser utilisé pour chaque entrée (peut être un objet, union, etc.).
- `checkers` : `checkerArrayMin`, `checkerArrayMax`, `checkerRefine`, etc.
- `errorMessage` : message personnalisé lorsque l'entrée n'est pas un tableau.

## Valeur de retour

Un `DataParserArray` avec `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. Le `parse` renvoie `DEither.success<Output>` ou `DEither.error<DataParserError>` avec les indices fautifs. Les appels littéraux à `checkerArrayMin(...)` et `checkerArrayMax(...)` sont reflétés dans le type de sortie : la longueur minimale peut produire une forme de tuple non vide et la longueur maximale ajoute `MaxElements<N>`.

## Autres exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/examples/v1/api/dataParser/array/checkers.doc.ts"
  majorVersion="v1"
  height="607px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/array/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Voir aussi

- [`number`](/fr/v1/api/dataParser/number) - Parser pour les nombres
- [`record`](/fr/v1/api/dataParser/record) - Parser pour les objets
