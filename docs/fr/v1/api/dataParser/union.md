---
outline: [2, 3]
description: "DDataParser.union() essaie plusieurs parsers dans l'ordre fourni et retourne le premier succès. En cas d'échec, toutes les issues sont agrégées pour aider au debugging."
prev:
  text: "record"
  link: "/fr/v1/api/dataParser/record"
next:
  text: "optional"
  link: "/fr/v1/api/dataParser/optional"
---

# union

`DDataParser.union()` essaie plusieurs parsers dans l'ordre fourni et retourne le premier succès. En cas d'échec, toutes les issues sont agrégées pour aider au debugging.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/union/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Paramètres

- `options` : tableau non vide de parsers (`[DP.string(), DP.number(), ...]`).
- `checkers` : `checkerRefine` pour appliquer une règle sur le résultat final (ex: interdire certaines valeurs).
- `errorMessage` : message personnalisé quand aucune option ne correspond.

## Valeur de retour

Un `DataParserUnion`. `schema.parse(data)` renvoie `DEither.success<OutputUnion>` s'il trouve un match, sinon `DEither.error<DataParserError>` contenant les erreurs de chaque option.

## Others exemples

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/union/extended.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Voir aussi

- [`boolean`](/fr/v1/api/dataParser/boolean) - Parser pour les valeurs booléennes
- [`date`](/fr/v1/api/dataParser/date) - Parser pour les dates
