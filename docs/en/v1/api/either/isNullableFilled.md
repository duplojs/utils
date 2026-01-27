---
outline: [2, 3]
description: "Type guard that checks that the nullable Either actually contains a value."
prev:
  text: "whenIsNullableEmpty"
  link: "/en/v1/api/either/whenIsNullableEmpty"
next:
  text: "whenIsNullableFilled"
  link: "/en/v1/api/either/whenIsNullableFilled"
---

# isNullableFilled

Type guard that checks that the nullable Either actually contains a value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isNullableFilled/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function isNullableFilled<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, NullableFilled>;
```

## Parameters

- `input`: Result of `nullable`.

## Return value

`true` if the value is not `null`.

## See also

- [`whenIsNullableFilled`](/en/v1/api/either/whenIsNullableFilled).
- [`isNullableEmpty`](/en/v1/api/either/isNullableEmpty).
