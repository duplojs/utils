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
  height="500px"
/>

## Paramètres

- `element` : parser utilisé pour chaque entrée (peut être un objet, union, etc.).
- `checkers` : `checkerArrayMin`, `checkerArrayMax`, `checkerRefine`, etc.
- `errorMessage` : message personnalisé lorsque l'entrée n'est pas un tableau.

## Valeur de retour

Un `DataParserArray` avec `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. Le `parse` renvoie `DEither.success<Element[]>` ou `DEither.error<DataParserError>` avec les indices fautifs.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/examples/v1/api/dataParser/array/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
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
