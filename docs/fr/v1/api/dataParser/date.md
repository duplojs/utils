---
outline: [2, 3]
prev:
  text: "bigint"
  link: "/fr/v1/api/dataParser/bigint"
next:
  text: "time"
  link: "/fr/v1/api/dataParser/time"
---

# date

`DDataParser.date()` valide un `TheDate` (format propriétaire `date${number}${"-" | "+"}`), accepte des `Date`, timestamps ou `TheDate` existants en entrée et renvoie une valeur immuable safe à travers vos services.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/date/tryout.doc.ts"
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
  src="/examples/v1/api/dataParser/date/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/date/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Voir aussi

- [`nil`](/fr/v1/api/dataParser/nil) - Parser pour les valeurs null/undefined
- [`empty`](/fr/v1/api/dataParser/empty) - Parser pour les valeurs vides
