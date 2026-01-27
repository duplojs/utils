---
outline: [2, 3]
description: "Builds an Left<\"optional\"> containing undefined."
prev:
  text: "optional"
  link: "/en/v1/api/either/optional"
next:
  text: "optionalFilled"
  link: "/en/v1/api/either/optionalFilled"
---

# optionalEmpty

Builds an `Left<"optional">` containing `undefined`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/optionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function optionalEmpty(): OptionalEmpty;
```

## Parameters

None.

## Return value

`OptionalEmpty` to signal absence.

## See also

- [`optionalFilled`](/en/v1/api/either/optionalFilled).
- [`whenIsOptionalEmpty`](/en/v1/api/either/whenIsOptionalEmpty).
