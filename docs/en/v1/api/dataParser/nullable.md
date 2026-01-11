---
outline: [2, 3]
description: "Allows null while applying a strict parser when the value is present. DDataParser.nullable(inner) returns null or the output of inner."
prev:
  text: "optional"
  link: "/en/v1/api/dataParser/optional"
next:
  text: "lazy"
  link: "/en/v1/api/dataParser/lazy"
---

# nullable

Allows `null` while applying a strict parser when the value is present. `DDataParser.nullable(inner)` returns `null` or the output of `inner`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/nullable/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `inner`: parser used when the value is not `null`.
- `coalescingValue`: optional, replaces `null` with a default value and narrows the output type.
- `checkers`: `checkerRefine` or other helpers applied on `Output<inner> | null`.
- `errorMessage`: message for inputs that are neither `null` nor valid for `inner`.

## Return value

A `DataParserNullable`. `schema.parse(data)` returns `DEither.success<Output | null>` or `DEither.error<DataParserError>`. Checkers let you, for example, restrict dates to a period even when they are optional.

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/nullable/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## See also

- [`object`](/en/v1/api/dataParser/object) - Parser for objects
- [`array`](/en/v1/api/dataParser/array) - Parser for arrays
