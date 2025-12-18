---
outline: [2, 3]
prev:
  text: "empty"
  link: "/v1/api/dataParser/empty/fr"
next:
  text: "object"
  link: "/v1/api/dataParser/object/fr"
---

# unknown

`DDataParser.unknown()` laisse passer n'importe quelle valeur mais conserve la mécanique d'erreurs et de checkers. Idéal pour un point d'entrée permissif avant d'enchaîner un `pipe` ou d'ajouter vos `checkerRefine`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/unknown/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé en cas de rejet manuel.
- `checkers` : `checkerRefine` pour resserrer la validation.

## Valeur de retour

Un `DataParserUnknown`. `schema.parse(data)` retourne `DEither.success<unknown>` ou `DEither.error<DataParserError>`.

## Voir aussi

- [`date`](/v1/api/dataParser/date/fr) - Parser pour les dates
- [`coerce.*`](/v1/api/dataParser/coerce/fr) - Fonctions de coercition pour divers types
