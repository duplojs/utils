---
outline: [2, 3]
description: "Explicitly builds an Left<\"nullish\"> with null or undefined."
prev:
  text: "nullish"
  link: "/en/v1/api/either/nullish"
next:
  text: "nullishFilled"
  link: "/en/v1/api/either/nullishFilled"
---

# nullishEmpty

Explicitly builds an `Left<"nullish">` with `null` or `undefined`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/nullishEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function nullishEmpty<
	const GenericInput extends NullishValue = undefined
>(
  value?: GenericInput
): NullishEmpty<GenericInput>;
```

## Parameters

- `input`: `null` or `undefined` (optional).

## Return value

`NullishEmpty<GenericInput>` allowing you to explicitly signal the absence of a value.

## See also

- [`whenIsNullishEmpty`](/en/v1/api/either/whenIsNullishEmpty).
- [`nullishFilled`](/en/v1/api/either/nullishFilled).
