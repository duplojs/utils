---
outline: [2, 3]
prev:
  text: "refine"
  link: "/en/v1/api/dataParser/refine"
next:
  text: "coerce.*"
  link: "/en/v1/api/dataParser/coerce"
---

# recover

`DDataParser.recover(inner, fallback)` wraps a parser and returns its output when it succeeds or a fallback value when it fails. Handy to ensure a safe value while still collecting errors (useful for partial DTOs, logs, migrations, etc.).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/recover/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Parameters

- `inner`: parser to protect.
- `recoveredValue`: value returned when `inner` fails (and final output type).
- `checkers`: applied to the final result (whether it comes from `inner` or the fallback).
- `errorMessage`: generic message in case of failure before recovery.

## Return value

A `DataParserRecover`. `schema.parse(data)` always returns `DEither.success` with either the result of `inner` or the fallback. Errors produced while running `inner` are still available in `DataParserError` for audit/logging.

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/recover/extended.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## See also

- [`date`](/en/v1/api/dataParser/date) - Parser for dates
- [`nil`](/en/v1/api/dataParser/nil) - Parser for null or undefined values
