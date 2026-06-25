---
outline: [2, 3]
description: "DDataParser.checkerRefine(predicate, options?) creates a custom checker. It plugs in everywhere (schema.addChecker, checkers option, extended.refine API) and reuses the error engine (path, message, rejected value)."
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

## Checker contract

The contract is based on the target parser output type: a checker `DataParserChecker<..., T>` is compatible with a parser whose output is `T`.

When the predicate is declared as a TypeScript type guard, the checker also refines the parser output type. This lets `parse(...)`, `Output<typeof schema>`, Clean constraints, and NewTypes carry the validated subtype instead of the wider source type.

### Type guard refinement

<MonacoTSEditor
  src="/examples/v1/api/dataParser/refine/typeGuard.doc.ts"
  majorVersion="v1"
  height="586px"
/>

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
