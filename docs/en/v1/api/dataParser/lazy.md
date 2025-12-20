---
outline: [2, 3]
prev:
  text: "nullable"
  link: "/en/v1/api/dataParser/nullable"
next:
  text: "pipe"
  link: "/en/v1/api/dataParser/pipe"
---

# lazy

`DDataParser.lazy(() => parser)` lets you describe recursive structures (trees, categories, menus, etc.) by deferring parser resolution. The getter is evaluated only at runtime, which avoids circular references.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/lazy/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Parameters

- `getter`: function that returns the real parser (often an `object` that itself contains the `lazy`).
- `checkers`: `checkerRefine` applied on the complete structure (e.g. limit depth, check global invariants).
- `errorMessage`: custom message if the input does not match the resolved schema.

## Return value

A `DataParserLazy`. `schema.parse(data)` returns `DEither.success<Output>` when the value satisfies the resolved parser, otherwise `DEither.error<DataParserError>` with the exact path even in recursion cases.

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/lazy/extended.doc.ts"
  majorVersion="v1"
  height="560px"
/>

## See also

- [`object`](/en/v1/api/dataParser/object) - Parser for objects
- [`bigint`](/en/v1/api/dataParser/bigint) - Parser for bigint integers
