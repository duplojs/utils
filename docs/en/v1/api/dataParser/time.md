---
outline: [2, 3]
prev:
  text: "date"
  link: "/en/v1/api/dataParser/date"
next:
  text: "literal"
  link: "/en/v1/api/dataParser/literal"
---

# time

Validates durations in `TheTime` format. `DDataParser.time()` accepts a `TheTime` (or a safe millisecond `number`), applies your checkers (`min`, `max`, `refine`, etc.) and returns an `Either` containing either the validated value or a `DataParserError`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message when the input is not a `TheTime`.
- `checkers`: `checkerTimeMin`, `checkerTimeMax`, `checkerRefine`, etc.
- `coerce`: `true` to accept an ISO string (`HH:MM[:SS[.mmm]]`) before converting to `TheTime`. Defaults to `false`.

## Return value

A `DataParserTime` with `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `parse` returns `DEither.success<TheTime>` if everything passes or `DEither.error<DataParserError>` with the accumulated issues.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/extended.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## See also

- [`date`](/en/v1/api/dataParser/date) - Parser for dates
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Coercion functions for various types
