---
outline: [2, 3]
description: "Type guard that detects an EitherNullableEmpty."
prev:
  text: "nullableFilled"
  link: "/en/v1/api/either/nullableFilled"
next:
  text: "whenIsNullableEmpty"
  link: "/en/v1/api/either/whenIsNullableEmpty"
---

# isNullableEmpty

Type guard that detects an `EitherNullableEmpty`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isNullableEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function isNullableEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullableEmpty>;
```

## Parameters

- `input`: `Either` coming from `nullable`.

## Return value

`true` if the value is `null`.

## See also

- [`whenIsNullableEmpty`](/en/v1/api/either/whenIsNullableEmpty).
- [`isNullableFilled`](/en/v1/api/either/isNullableFilled).
