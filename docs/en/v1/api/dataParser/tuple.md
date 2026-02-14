---
outline: [2, 3]
description: "DDataParser.tuple() describes a positional array with different parsers per index and, optionally, a rest. Perfect to model multi-value returns or fixed parameters."
prev:
  text: "array"
  link: "/en/v1/api/dataParser/array"
next:
  text: "record"
  link: "/en/v1/api/dataParser/record"
---

# tuple

`DDataParser.tuple()` describes a positional array with different parsers per index and, optionally, a `rest`. Perfect to model multi-value returns or fixed parameters.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/tuple/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Parameters

- `shape`: array of parsers `[DP.string(), DP.number(), ...]`.
- `rest`: optional parser applied to extra elements.
- `checkers`: `checkerArrayMin`, `checkerArrayMax`, `checkerRefine` to validate the overall shape.

## Return value

A `DataParserTuple`. `schema.parse(data)` returns `DEither.success<[...]>` if all elements satisfy their parser, otherwise `DEither.error<DataParserError>` with the incriminated index.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/tuple/checkers.doc.ts"
  majorVersion="v1"
  height="600px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/tuple/extended.doc.ts"
  majorVersion="v1"
  height="650px"
/>

## See also

- [`templateLiteral`](/en/v1/api/dataParser/templateLiteral) - Parser for formatted strings
- [`nil`](/en/v1/api/dataParser/nil) - Parser for null/undefined values
