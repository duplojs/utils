---
outline: [2, 3]
prev:
  text: "bigint"
  link: "/en/v1/api/dataParser/bigint"
next:
  text: "time"
  link: "/en/v1/api/dataParser/time"
---

# date

`DDataParser.date()` validates a `TheDate` (proprietary format `date${number}${"-" | "+"}`), accepts `Date`, timestamps, or existing `TheDate` as input, and returns an immutable safe value across your services.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/date/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message if the input cannot be converted to `TheDate`.
- `checkers`: `checkerRefine` to express your rules (ranges, intervals, etc.).
- `coerce`: `true` to accept `Date`, number, or ISO string then convert to `TheDate`. Defaults to `false`.

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

- [`nil`](/en/v1/api/dataParser/nil) - Parser for null/undefined values
- [`empty`](/en/v1/api/dataParser/empty) - Parser for empty values
