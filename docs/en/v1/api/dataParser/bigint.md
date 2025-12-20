---
outline: [2, 3]
prev:
  text: "boolean"
  link: "/en/v1/api/dataParser/boolean"
next:
  text: "date"
  link: "/en/v1/api/dataParser/date"
---

# bigint

Validates `bigint` while preserving native precision. `DDataParser.bigint()` handles optional coercion (`BigInt(value)`) and accepts checkers like `min`, `max`, or `refine`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/bigint/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message if the value is not a valid `bigint`.
- `checkers`: `checkerBigIntMin`, `checkerBigIntMax`, `checkerRefine`.
- `coerce`: `true` to convert from `string` / `number` via `BigInt`. Defaults to `false`.

## Return value

A `DataParserBigInt` with the full API (`parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`). `schema.parse(data)` → `DEither.success<bigint>` or `DEither.error<DataParserError>`.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/bigint/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/bigint/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## See also

- [`number`](/en/v1/api/dataParser/number) - Parser for numbers
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Coercion functions for various types
