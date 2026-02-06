---
outline: [2, 3]
description: "DDataParser.date() valide des dates immutables TheDate, accepte TheDate/SerializedTheDate/Date, et peut coercer timestamps sûrs et chaînes de date parsables."
prev:
  text: "bigint"
  link: "/fr/v1/api/dataParser/bigint"
next:
  text: "time"
  link: "/fr/v1/api/dataParser/time"
---

# date

`DDataParser.date()` valide des dates immutables `TheDate`. Le parser accepte nativement `TheDate`, `SerializedTheDate` et `Date` JavaScript. En mode coercitif (`coerce: true`), il accepte aussi des timestamps sûrs et des chaînes de date parsables.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/date/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé si l'entrée n'est pas convertible en `TheDate`.
- `checkers` : `checkerRefine` pour exprimer vos règles (plages, intervalles, etc.).
- `coerce` : `true` pour accepter aussi `number` (timestamp sûr) et `string` (date parsable) puis convertir en `TheDate`. Par défaut `false`.

## Valeur de retour

Un `DataParserDate` avec l'API habituelle (`parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`). Le `parse` renvoie `DEither.success<TheDate>` ou `DEither.error<DataParserError>` contenant les issues.

## Autres exemples

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

- [`time`](/fr/v1/api/dataParser/time) - Parser pour les durées `TheTime`
- [`nil`](/fr/v1/api/dataParser/nil) - Parser pour les valeurs null/undefined
- [`empty`](/fr/v1/api/dataParser/empty) - Parser pour les valeurs vides
