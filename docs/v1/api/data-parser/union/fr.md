---
outline: [2, 3]
prev:
  text: "record"
  link: "/v1/api/data-parser/record/fr"
next:
  text: "optional"
  link: "/v1/api/data-parser/optional/fr"
---

# union

`DDataParser.union()` essaie plusieurs parsers dans l'ordre fourni et retourne le premier succès. En cas d'échec, toutes les issues sont agrégées pour aider au debugging.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/union/examples/tryout.doc.ts"
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
  src="/v1/api/data-parser/union/examples/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Voir aussi

- [`boolean`](/v1/api/data-parser/boolean/fr) - Parser pour les valeurs booléennes
- [`date`](/v1/api/data-parser/date/fr) - Parser pour les dates
