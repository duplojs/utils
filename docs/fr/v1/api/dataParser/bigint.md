---
outline: [2, 3]
description: "Valide des bigint tout en conservant la précision native. DDataParser.bigint() s'occupe de la coercition facultative (BigInt(value)) et accepte des checkers comme min, max ou refine."
prev:
  text: "boolean"
  link: "/fr/v1/api/dataParser/boolean"
next:
  text: "date"
  link: "/fr/v1/api/dataParser/date"
---

# bigint

Valide des `bigint` tout en conservant la précision native. `DDataParser.bigint()` s'occupe de la coercition facultative (`BigInt(value)`) et accepte des checkers comme `min`, `max` ou `refine`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/bigint/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé si la valeur n'est pas un `bigint` valide.
- `checkers` : `checkerBigIntMin`, `checkerBigIntMax`, `checkerRefine`.
- `coerce` : `true` pour convertir depuis `string` / `number` via `BigInt`. Par défaut `false`.

## Valeur de retour

Un `DataParserBigInt` avec toute l'API classique (`parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`). `schema.parse(data)` → `DEither.success<bigint>` ou `DEither.error<DataParserError>`.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/examples/v1/api/dataParser/bigint/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/bigint/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [`number`](/fr/v1/api/dataParser/number) - Parser pour les nombres
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Fonctions de coercition pour divers types
