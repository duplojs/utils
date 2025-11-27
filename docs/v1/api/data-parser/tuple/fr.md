---
outline: [2, 3]
prev:
  text: "array"
  link: "/v1/api/data-parser/array/fr"
next:
  text: "record"
  link: "/v1/api/data-parser/record/fr"
---

# tuple

`DDataParser.tuple()` décrit un tableau positionnel avec des parsers différents par index et, optionnellement, un reste (`rest`). Parfait pour modéliser des retours multi-valeurs ou des paramètres fixes.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/tuple/examples/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Paramètres

- `shape` : tableau de parsers `[DP.string(), DP.number(), ...]`.
- `rest` : parser optionnel appliqué aux éléments supplémentaires.
- `checkers` : `checkerArrayMin`, `checkerArrayMax`, `checkerRefine` pour valider la forme globale.

## Valeur de retour

Un `DataParserTuple`. `schema.parse(data)` renvoie `DEither.success<[...]>` si tous les éléments vérifient leur parser, sinon `DEither.error<DataParserError>` avec l'index incriminé.

## Voir aussi

- [`templateLiteral`](/v1/api/data-parser/templateLiteral/fr) - Parser pour les chaînes de caractères formatées
- [`nil`](/v1/api/data-parser/nil/fr) - Parser pour les valeurs null/undefined
