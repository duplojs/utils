---
outline: [2, 3]
prev:
  text: "record"
  link: "/en/v1/api/dataParser/record"
next:
  text: "optional"
  link: "/en/v1/api/dataParser/optional"
---

# union

`DDataParser.union()` tries multiple parsers in the provided order and returns the first success. On failure, all issues are aggregated to help with debugging.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/union/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Parameters

- `options`: non-empty array of parsers (`[DP.string(), DP.number(), ...]`).
- `checkers`: `checkerRefine` to apply a rule on the final result (e.g. forbid certain values).
- `errorMessage`: custom message when no option matches.

## Return value

A `DataParserUnion`. `schema.parse(data)` returns `DEither.success<OutputUnion>` if it finds a match, otherwise `DEither.error<DataParserError>` containing the errors from each option.

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/union/extended.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## See also

- [`boolean`](/en/v1/api/dataParser/boolean) - Parser for boolean values
- [`date`](/en/v1/api/dataParser/date) - Parser for dates
