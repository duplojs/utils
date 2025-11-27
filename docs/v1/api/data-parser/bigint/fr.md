---
outline: [2, 3]
prev:
  text: "boolean"
  link: "/v1/api/data-parser/boolean/fr"
next:
  text: "date"
  link: "/v1/api/data-parser/date/fr"
---

# bigint

Valide des `bigint` tout en conservant la précision native. `DDataParser.bigint()` s'occupe de la coercition facultative (`BigInt(value)`) et accepte des checkers comme `min`, `max` ou `refine`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/bigint/examples/tryout.doc.ts"
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
  src="/v1/api/data-parser/bigint/examples/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/data-parser/bigint/examples/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [number](/v1/api/data-parser/number/fr)
- [`coerce.*`](/v1/api/data-parser/coerce/fr)
