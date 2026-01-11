---
outline: [2, 3]
description: "DDataParser.record(keyParser, valueParser) validates dynamic dictionaries by checking both the shape of the keys (string/literal/template literal/number/union) and the associated values."
prev:
  text: "tuple"
  link: "/en/v1/api/dataParser/tuple"
next:
  text: "union"
  link: "/en/v1/api/dataParser/union"
---

# record

`DDataParser.record(keyParser, valueParser)` validates dynamic dictionaries by checking both the shape of the keys (string/literal/template literal/number/union) and the associated values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/record/tryout.doc.ts"
  majorVersion="v1"
  height="530px"
/>

## Parameters

- `key`: parser for the keys (`DP.string()`, `DP.templateLiteral(...)`, `DP.literal([...])`, etc.).
- `input`: parser applied to each entry (`DP.number()`, `DP.object(...)`, ...).
- `checkers`: `checkerRefine` to express global constraints (required keys, minimum sum, etc.).
- `errorMessage`: generic message if the input is not an indexable object.

## Return value

A `DataParserRecord`. `schema.parse(data)` returns `DEither.success<Record<OutputKey, OutputValue>>` or `DEither.error<DataParserError>` with the incriminated keys.

## See also

- [`object`](/en/v1/api/dataParser/object) - Parser for objects
- [`empty`](/en/v1/api/dataParser/empty) - Parser for empty values
