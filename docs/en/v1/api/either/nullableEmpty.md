---
outline: [2, 3]
description: "Explicitly builds an EitherLeft<\"nullable\"> containing null."
prev:
  text: "nullable"
  link: "/en/v1/api/either/nullable"
next:
  text: "nullableFilled"
  link: "/en/v1/api/either/nullableFilled"
---

# nullableEmpty

Explicitly builds an `EitherLeft<"nullable">` containing `null`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/nullableEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function nullableEmpty(): EitherNullableEmpty;
```

## Parameters

None.

## Return value

An `EitherNullableEmpty` representing absence.

## See also

- [`nullableFilled`](/en/v1/api/either/nullableFilled).
- [`whenIsNullableEmpty`](/en/v1/api/either/whenIsNullableEmpty).
