---
outline: [2, 3]
description: "Validates numbers (integers or floats) with optional constraints. DDataParser.number() ensures the input is a number, applies your checkers (min, max, int, refine, etc.) and returns an Either containing either the validated value or a rich DataParserError."
prev:
  text: "string"
  link: "/en/v1/api/dataParser/string"
next:
  text: "boolean"
  link: "/en/v1/api/dataParser/boolean"
---

# number

Validates numbers (integers or floats) with optional constraints. `DDataParser.number()` ensures the input is a number, applies your checkers (`min`, `max`, `int`, `refine`, etc.) and returns an `Either` containing either the validated value or a rich `DataParserError`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/number/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message when the input is not a number.
- `checkers`: `checkerNumberMin`, `checkerNumberMax`, `checkerInt`, `checkerRefine`, etc.
- `coerce`: `true` to convert strings/booleans before validation (via `Number(value)`). Defaults to `false`.

## Return value

A `DataParserNumber` with `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `parse` returns `DEither.success<number>` if everything passes or `DEither.error<DataParserError>` with the accumulated issues.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/number/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/number/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## See also

- [`date`](/en/v1/api/dataParser/date) - Parser for dates
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Coercion functions for various types
