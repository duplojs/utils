---
outline: [2, 3]
prev:
  text: "templateLiteral"
  link: "/en/v1/api/dataParser/templateLiteral"
next:
  text: "empty"
  link: "/en/v1/api/dataParser/empty"
---

# nil

`DDataParser.nil()` only accepts `null`. Useful to explicitly describe fields that must be `null` or to combine with `optional/nullable`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/nil/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `errorMessage`: custom message when the input is not `null`.
- `checkers`: `checkerRefine` to add business logic.
- `coerce`: `true` to convert `undefined`/`"null"` to `null`. Defaults to `false`.

## Return value

A `DataParserNil`. `schema.parse(data)` returns `DEither.success<null>` or `DEither.error<DataParserError>`.

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/nil/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## See also

- [`date`](/en/v1/api/dataParser/date)
- [`literal`](/en/v1/api/dataParser/literal)
- [`optional`](/en/v1/api/dataParser/optional)
