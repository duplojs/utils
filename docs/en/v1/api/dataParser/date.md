---
outline: [2, 3]
description: "DDataParser.date() validates immutable TheDate values, accepts TheDate/SerializedTheDate/Date, and can coerce safe timestamps and parsable date strings."
prev:
  text: "bigint"
  link: "/en/v1/api/dataParser/bigint"
next:
  text: "time"
  link: "/en/v1/api/dataParser/time"
---

# date

`DDataParser.date()` validates immutable `TheDate` values. It natively accepts `TheDate`, `SerializedTheDate`, and JavaScript `Date`. In coercive mode (`coerce: true`), it also accepts safe timestamps and parsable date strings.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/date/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message if the input cannot be converted to `TheDate`.
- `checkers`: `checkerRefine` to express your rules (ranges, intervals, etc.).
- `coerce`: `true` to also accept `number` (safe timestamp) and `string` (parsable date) and convert to `TheDate`. Defaults to `false`.

## Return value

A `DataParserDate` with the usual API (`parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`). `parse` returns `DEither.success<TheDate>` or `DEither.error<DataParserError>` containing the issues.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/date/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/date/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## See also

- [`time`](/en/v1/api/dataParser/time) - Parser for `TheTime` durations
- [`nil`](/en/v1/api/dataParser/nil) - Parser for null/undefined values
- [`empty`](/en/v1/api/dataParser/empty) - Parser for empty values
