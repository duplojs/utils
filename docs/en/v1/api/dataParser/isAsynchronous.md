---
outline: [2, 3]
description: "dataParser.isAsynchronous() tells whether a parser (or nested parsers) requires async execution before parsing."
prev:
  text: "recover"
  link: "/en/v1/api/dataParser/recover"
next:
  text: "coerce.*"
  link: "/en/v1/api/dataParser/coerce"
---

# isAsynchronous

`dataParser.isAsynchronous()` tells whether a parser (or nested parsers) requires async execution before parsing. It does not run any validation.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/isAsynchronous/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Parameters

None.

## Return value

A boolean: `true` when the parser needs async execution, otherwise `false`.

## See also

- [`transform`](/en/v1/api/dataParser/transform) - Transform a parsed value (sync or async)
- [`pipe`](/en/v1/api/dataParser/pipe) - Compose multiple parsers into a pipeline
