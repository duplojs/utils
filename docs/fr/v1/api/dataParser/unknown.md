---
outline: [2, 3]
description: "DDataParser.unknown() laisse passer n'importe quelle valeur mais conserve la mécanique d'erreurs et de checkers. Idéal pour un point d'entrée permissif avant d'enchaîner un pipe ou d'ajouter vos checkerRefine."
prev:
  text: "empty"
  link: "/fr/v1/api/dataParser/empty"
next:
  text: "object"
  link: "/fr/v1/api/dataParser/object"
---

# unknown

`DDataParser.unknown()` laisse passer n'importe quelle valeur mais conserve la mécanique d'erreurs et de checkers. Idéal pour un point d'entrée permissif avant d'enchaîner un `pipe` ou d'ajouter vos `checkerRefine`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/unknown/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé en cas de rejet manuel.
- `checkers` : `checkerRefine` pour resserrer la validation.

## Valeur de retour

Un `DataParserUnknown`. `schema.parse(data)` retourne `DEither.success<unknown>` ou `DEither.error<DataParserError>`.

## Voir aussi

- [`date`](/fr/v1/api/dataParser/date) - Parser pour les dates
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Fonctions de coercition pour divers types
