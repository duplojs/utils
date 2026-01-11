---
outline: [2, 3]
description: "Allows undefined while keeping a strict parser for the present value. DDataParser.optional(inner) returns the output of inner when a value is provided and lets undefined pass otherwise."
prev:
  text: "union"
  link: "/en/v1/api/dataParser/union"
next:
  text: "nullable"
  link: "/en/v1/api/dataParser/nullable"
---

# optional

Allows `undefined` while keeping a strict parser for the present value. `DDataParser.optional(inner)` returns the output of `inner` when a value is provided and lets `undefined` pass otherwise.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/optional/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `inner`: parser applied when a value is provided.
- `coalescingValue`: (optional) replaces `undefined` with a default value and narrows the output type to `Output<inner>`.
- `checkers`: `checkerRefine` or custom helpers evaluating `Output<inner> | undefined`.
- `errorMessage`: message used when the input is neither `undefined` nor valid for `inner`.

## Return value

A `DataParserOptional`. `schema.parse(data)` returns `DEither.success<Output | undefined>` or `DEither.error<DataParserError>` with the incriminated path. Checkers/restrictions apply only when the value is not `undefined` (unless you implement different logic in your refinements).

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/optional/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## See also

- [`nullable`](/en/v1/api/dataParser/nullable) - Allows accepting `null` in a parser
- [`array`](/en/v1/api/dataParser/array) - Parser for arrays
