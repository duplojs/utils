---
outline: [2, 3]
prev:
  text: "date"
  link: "/en/v1/api/dataParser/date"
next:
  text: "templateLiteral"
  link: "/en/v1/api/dataParser/templateLiteral"
---

# literal

`DDataParser.literal()` restricts the input to one or more exact values (`string`, `number`, `bigint`, `boolean`, `null`, `undefined`). Handy for expressing runtime enums without losing TypeScript inference.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/literal/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `input`: allowed value or array of values (automatically normalized to an array).
- `errorMessage`: custom message if the input does not match the whitelist.
- `checkers`: `checkerRefine` to add business logic.

## Return value

A `DataParserLiteral` whose `parse` returns `DEither.success<LiteralUnion>` on success, otherwise `DEither.error<DataParserError>`.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/literal/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/literal/extended.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## See also

- [`number`](/en/v1/api/dataParser/number) - Parser for numbers
- [`tuple`](/en/v1/api/dataParser/tuple) - Parser for fixed-size arrays
