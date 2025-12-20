---
outline: [2, 3]
prev:
  text: "empty"
  link: "/en/v1/api/dataParser/empty"
next:
  text: "object"
  link: "/en/v1/api/dataParser/object"
---

# unknown

`DDataParser.unknown()` lets any value through but keeps the error and checker mechanics. Ideal as a permissive entry point before chaining a `pipe` or adding your `checkerRefine`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/unknown/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message in case of manual rejection.
- `checkers`: `checkerRefine` to tighten validation.

## Return value

A `DataParserUnknown`. `schema.parse(data)` returns `DEither.success<unknown>` or `DEither.error<DataParserError>`.

## See also

- [`date`](/en/v1/api/dataParser/date) - Parser for dates
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Coercion functions for various types
