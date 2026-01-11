---
outline: [2, 3]
description: "DDataParser.tuple() décrit un tableau positionnel avec des parsers différents par index et, optionnellement, un reste (rest). Parfait pour modéliser des retours multi-valeurs ou des paramètres fixes."
prev:
  text: "array"
  link: "/fr/v1/api/dataParser/array"
next:
  text: "record"
  link: "/fr/v1/api/dataParser/record"
---

# tuple

`DDataParser.tuple()` décrit un tableau positionnel avec des parsers différents par index et, optionnellement, un reste (`rest`). Parfait pour modéliser des retours multi-valeurs ou des paramètres fixes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/tuple/tryout.doc.ts"
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

- [`templateLiteral`](/fr/v1/api/dataParser/templateLiteral) - Parser pour les chaînes de caractères formatées
- [`nil`](/fr/v1/api/dataParser/nil) - Parser pour les valeurs null/undefined
