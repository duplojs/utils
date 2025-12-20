---
outline: [2, 3]
prev:
  text: "number"
  link: "/en/v1/api/dataParser/number"
next:
  text: "bigint"
  link: "/en/v1/api/dataParser/bigint"
---

# boolean

Builds a parser for booleans. `DDataParser.boolean()` checks the input, supports coercion (`"true"`, `1`, etc.), and allows custom checkers via `checkerRefine`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/boolean/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message when the input cannot be interpreted as a boolean.
- `checkers`: `checkerRefine` to add business rules (for example force `true`).
- `coerce`: `true` to convert `"true"`, `"false"`, `1`, `0`, etc. Defaults to `false`.

## Return value

A `DataParserBoolean` with `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `schema.parse(data)` returns `DEither.success<boolean>` or `DEither.error<DataParserError>`.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/boolean/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/boolean/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## See also

- [`string`](/en/v1/api/dataParser/string) - Parser for strings
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Coercion functions for various types
