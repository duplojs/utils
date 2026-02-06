---
outline: [2, 3]
description: "DDataParser.time() validates TheTime durations, accepts TheTime/SerializedTheTime/safe number inputs, and can coerce ISO-like time strings."
prev:
  text: "date"
  link: "/en/v1/api/dataParser/date"
next:
  text: "literal"
  link: "/en/v1/api/dataParser/literal"
---

# time

`DDataParser.time()` validates `TheTime` durations. It natively accepts `TheTime`, `SerializedTheTime`, and safe numeric values. In coercive mode (`coerce: true`), it also accepts ISO-like time strings (`HH:MM[:SS[.mmm]]`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message when the input cannot be converted to `TheTime`.
- `checkers`: `checkerTimeMin`, `checkerTimeMax`, `checkerRefine`, etc.
- `coerce`: `true` to accept a number (ms) or an ISO string (`HH:MM[:SS[.mmm]]`) before converting to `TheTime`. Defaults to `false`.

## Return value

A `DataParserTime` with `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `parse` returns `DEither.success<TheTime>` if everything passes or `DEither.error<DataParserError>` with the accumulated issues.

In extended mode (`DPE.time()`), `.min(...)` and `.max(...)` respectively add `checkerTimeMin` and `checkerTimeMax`.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## See also

- [`date`](/en/v1/api/dataParser/date) - Parser for dates
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Coercion functions for various types
