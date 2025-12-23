---
outline: [2, 3]
prev:
  text: "transform"
  link: "/en/v1/api/dataParser/transform"
next:
  text: "recover"
  link: "/en/v1/api/dataParser/recover"
---

# refine

`DDataParser.checkerRefine(predicate, options?)` creates a custom checker. It plugs in everywhere (`schema.addChecker`, `checkers` option, `extended.refine` API) and reuses the error engine (`path`, message, rejected value).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/refine/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## When to use it?

- Validate a business pattern not covered by native checkers (IBAN, slug, etc.).
- Centralize a reusable rule across multiple schemas (`checkerRefine` is a reusable value).
- Express rules on complex structures (objects, tuples...) by relying on `addChecker`.

## Additional examples

### Validate coordinates

<MonacoTSEditor
  src="/examples/v1/api/dataParser/refine/object.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## See also

- [`string`](/en/v1/api/dataParser/string) - Parser for strings
- [`literal`](/en/v1/api/dataParser/literal) - Parser for literal values
