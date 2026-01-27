---
outline: [2, 3]
description: "Type guard detecting an NullishEmpty."
prev:
  text: "nullishFilled"
  link: "/en/v1/api/either/nullishFilled"
next:
  text: "whenIsNullishEmpty"
  link: "/en/v1/api/either/whenIsNullishEmpty"
---

# isNullishEmpty

Type guard detecting an `NullishEmpty`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isNullishEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function isNullishEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, NullishEmpty>;
```

## Parameters

- `input`: `Either` coming from the nullish helpers.

## Return value

`true` if the wrapped value is `null` or `undefined`.

## See also

- [`whenIsNullishEmpty`](/en/v1/api/either/whenIsNullishEmpty).
- [`isNullishFilled`](/en/v1/api/either/isNullishFilled).
