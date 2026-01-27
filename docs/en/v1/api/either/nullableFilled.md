---
outline: [2, 3]
description: "Builds an Right<\"nullable\"> for a non-null value."
prev:
  text: "nullableEmpty"
  link: "/en/v1/api/either/nullableEmpty"
next:
  text: "isNullableEmpty"
  link: "/en/v1/api/either/isNullableEmpty"
---

# nullableFilled

Builds an `Right<"nullable">` for a non-null value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/nullableFilled/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function nullableFilled<
	const GenericInput extends unknown
>(
  input: GenericInput
): NullableFilled<GenericInput>;
```

## Parameters

- `input`: Defined value.

## Return value

An `NullableFilled` representing the “present” state.

## See also

- [`nullable`](/en/v1/api/either/nullable).
- [`whenIsNullableFilled`](/en/v1/api/either/whenIsNullableFilled).
