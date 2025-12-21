---
outline: [2, 3]
prev:
  text: "nullableEmpty"
  link: "/en/v1/api/either/nullableEmpty"
next:
  text: "isNullableEmpty"
  link: "/en/v1/api/either/isNullableEmpty"
---

# nullableFilled

Builds an `EitherRight<"nullable">` for a non-null value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/nullableFilled/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntax

```typescript
function nullableFilled<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherNullableFilled<GenericInput>;
```

## Parameters

- `input`: Defined value.

## Return value

An `EitherNullableFilled` representing the “present” state.

## See also

- [`nullable`](/en/v1/api/either/nullable).
- [`whenIsNullableFilled`](/en/v1/api/either/whenIsNullableFilled).
