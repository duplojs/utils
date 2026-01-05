---
outline: [2, 3]
description: "Builds an EitherLeft<\"optional\"> containing undefined."
prev:
  text: "optional"
  link: "/en/v1/api/either/optional"
next:
  text: "optionalFilled"
  link: "/en/v1/api/either/optionalFilled"
---

# optionalEmpty

Builds an `EitherLeft<"optional">` containing `undefined`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/optionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntax

```typescript
function optionalEmpty(): EitherOptionalEmpty;
```

## Parameters

None.

## Return value

`EitherOptionalEmpty` to signal absence.

## See also

- [`optionalFilled`](/en/v1/api/either/optionalFilled).
- [`whenIsOptionalEmpty`](/en/v1/api/either/whenIsOptionalEmpty).
