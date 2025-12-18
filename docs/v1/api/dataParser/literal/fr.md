---
outline: [2, 3]
prev:
  text: "date"
  link: "/v1/api/dataParser/date/fr"
next:
  text: "templateLiteral"
  link: "/v1/api/dataParser/templateLiteral/fr"
---

# literal

`DDataParser.literal()` restreint l'entrée à une ou plusieurs valeurs exactes (`string`, `number`, `bigint`, `boolean`, `null`, `undefined`). Pratique pour exprimer des enums runtime sans perdre l'inférence TypeScript.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/literal/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `input` : valeur autorisée ou tableau de valeurs (automatiquement normalisé en tableau).
- `errorMessage` : message personnalisé si l'entrée ne correspond pas à la liste blanche.
- `checkers` : `checkerRefine` pour ajouter de la logique métier.

## Valeur de retour

Un `DataParserLiteral` dont `parse` renvoie `DEither.success<LiteralUnion>` en cas de succès, sinon `DEither.error<DataParserError>`.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/v1/api/dataParser/literal/examples/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/dataParser/literal/examples/extended.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Voir aussi

- [`number`](/v1/api/dataParser/number/fr) - Parser pour les nombres
- [`tuple`](/v1/api/dataParser/tuple/fr) - Parser pour les tableaux à taille fixe
