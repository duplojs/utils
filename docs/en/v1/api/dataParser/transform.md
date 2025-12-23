---
outline: [2, 3]
prev:
  text: "pipe"
  link: "/en/v1/api/dataParser/pipe"
next:
  text: "refine"
  link: "/en/v1/api/dataParser/refine"
---

# transform

`DDataParser.transform(inner, fn)` applies a parser, then transforms the validated value (synchronously or asynchronously) before returning it. Ideal to create business objects (`URL`, `Date`, DTOs) without a manual `pipe`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/transform/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `inner`: starting parser (string, object, etc.).
- `theFunction(value, error)`: transformation function (can use `error` to signal a custom error by returning `SymbolDataParserError`).
- `checkers`: `checkerRefine` applied on the transformed result.
- `errorMessage`: generic message if the pipeline fails.

## Return value

A `DataParserTransform`. `schema.parse(data)` validates the input with `inner`, executes `theFunction`, and returns the new value via `DEither.success`. If any stage fails, you receive `DEither.error<DataParserError>` with the full trace.

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/transform/extended.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## See also

- [`record`](/en/v1/api/dataParser/record) - Parser for key/value dictionaries
- [`recover`](/en/v1/api/dataParser/recover) - Lets you recover from an error by providing a fallback value
