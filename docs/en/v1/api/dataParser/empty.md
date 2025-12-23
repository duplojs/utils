---
outline: [2, 3]
prev:
  text: "nil"
  link: "/en/v1/api/dataParser/nil"
next:
  text: "unknown"
  link: "/en/v1/api/dataParser/unknown"
---

# empty

`DDataParser.empty()` only validates `undefined`. It is the building block to express intentionally absent fields or to combine with `optional`/`nullable`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/empty/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message when the input is not `undefined`.
- `checkers`: `checkerRefine` to add constraints.
- `coerce`: `true` to convert certain falsy values to `undefined`. Defaults to `false`.

## Return value

A `DataParserEmpty`. `parse` returns `DEither.success<undefined>` or `DEither.error<DataParserError>`.

## See also

- [`date`](/en/v1/api/dataParser/date) - Parser for dates
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Coercion functions for various types
