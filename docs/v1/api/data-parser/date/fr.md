---
outline: [2, 3]
prev:
  text: "bigint"
  link: "/v1/api/data-parser/bigint/fr"
next:
  text: "literal"
  link: "/v1/api/data-parser/literal/fr"
---

# date

`DDataParser.date()` valide un `TheDate` (format propriétaire `date${number}${"-" | "+"}`), accepte des `Date`, timestamps ou `TheDate` existants en entrée et renvoie une valeur immuable safe à travers vos services.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/date/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé si l'entrée n'est pas convertible en `TheDate`.
- `checkers` : `checkerRefine` pour exprimer vos règles (plages, intervalles, etc.).
- `coerce` : `true` pour accepter `Date`, number ou string ISO puis convertir en `TheDate`. Par défaut `false`.

## Valeur de retour

Un `DataParserDate` avec l'API habituelle (`parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`). Le `parse` renvoie `DEither.success<TheDate>` ou `DEither.error<DataParserError>` contenant les issues.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/v1/api/data-parser/date/examples/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/data-parser/date/examples/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Voir aussi

- [`nil`](/v1/api/data-parser/nil/fr) - Parser pour les valeurs null/undefined
- [`empty`](/v1/api/data-parser/empty/fr) - Parser pour les valeurs vides
