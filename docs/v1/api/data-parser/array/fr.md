---
outline: [2, 3]
prev:
  text: "object"
  link: "/v1/api/data-parser/object/fr"
next:
  text: "tuple"
  link: "/v1/api/data-parser/tuple/fr"
---

# array

`DDataParser.array()` valide des tableaux homogènes en appliquant un parser élément et des checkers (`min`, `max`, `refine`, ...). Chaque erreur inclut l'index fautif (`items[2]`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/array/examples/tryout.doc.ts"
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
  src="/v1/api/data-parser/array/examples/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/data-parser/array/examples/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Voir aussi

- [`number`](/v1/api/data-parser/number/fr) - Parser pour les nombres
- [`record`](/v1/api/data-parser/record/fr) - Parser pour les objets
