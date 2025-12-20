---
outline: [2, 3]
prev:
  text: "literal"
  link: "/en/v1/api/dataParser/literal"
next:
  text: "nil"
  link: "/en/v1/api/dataParser/nil"
---

# templateLiteral

Builds a parser for a deterministic string shape (`"order-${number}"`, `"user-${string}-${number}"`, etc.). `DDataParser.templateLiteral()` takes an array mixing primitive parts and sub-parsers (`string`, `number`, `literal`, ...) and returns a strongly typed `string` parser.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/templateLiteral/tryout.doc.ts"
  majorVersion="v1"
  height="600px"
/>

## Parameters

- `template`: shape to validate (primitive parts or compatible sub-parsers).
- `pattern`: `RegExp` automatically generated from the template (override rarely needed).
- `checkers`: `checkerRefine` to apply additional rules.

## Return value

A `DataParserTemplateLiteral` that produces a `string` matching the provided template. `parse` → `DEither.success<string>` or `DEither.error<DataParserError>`.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/templateLiteral/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/templateLiteral/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## See also

- [`bigint`](/en/v1/api/dataParser/bigint) - Parser for large integers
- [`boolean`](/en/v1/api/dataParser/boolean) - Parser for boolean values
