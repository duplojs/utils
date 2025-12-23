---
outline: [2, 3]
prev:
  text: "Data Parser"
  link: "/en/v1/api/dataParser/"
next:
  text: "number"
  link: "/en/v1/api/dataParser/number"
---

# string

Builds a parser for strings. `DDataParser.string()` guarantees the input is a string (with optional coercion support), applies the provided checkers, and returns a typed `Either` containing either the validated value or a detailed `DataParserError`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/string/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message injected into each `issue` when the input is not a string.
- `checkers`: array of checkers (`checkerStringMin`, `checkerStringMax`, `checkerStringRegex`, `checkerEmail`, `checkerUrl`, `checkerRefine`, etc.) executed after the base validation.
- `coerce`: `true` to transform non-string inputs (numbers, booleans, objects with `toString`) before running the checkers. Defaults to `false`.

## Return value

A `DataParserString` providing `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, and `clone`. `schema.parse(data)` returns `DEither.success<string>` when all validations pass, or `DEither.error<DataParserError>` with the paths (`path`), messages, and rejected values.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/string/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/string/extended.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## See also

- [`boolean`](/en/v1/api/dataParser/boolean) — parser for boolean values
- [`coerce.*`](/en/v1/api/dataParser/coerce) — specialized variants to normalize inputs before strict validation
