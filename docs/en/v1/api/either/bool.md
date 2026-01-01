---
outline: [2, 3]
prev:
  text: "safeCallback"
  link: "/en/v1/api/either/safeCallback"
next:
  text: "boolTruthy"
  link: "/en/v1/api/either/boolTruthy"
---

# bool

Converts any value into a boolean monad (`EitherBoolTruthy` or `EitherBoolFalsy`). Handy to keep track of the test while benefiting from the `whenIsBoolTruthy/whenIsBoolFalsy` helpers.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/bool/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function bool<
	const GenericInput extends unknown = undefined
>(
  input: GenericInput
): GenericInput extends BoolFalsyValue
  ? EitherBoolFalsy<GenericInput>
  : EitherBoolTruthy<GenericInput> | EitherBoolFalsy<BoolFalsyValue>;
```

## Parameters

- `input`: Value to interpret. Standard falsy values (`""`, `0`, `false`, `null`, `undefined`) produce a `Left`.

## Return value

An `Either`: `Right<"bool">` when the value is truthy, `Left<"bool">` otherwise. Typing preserves the original value.

## See also

- [`boolTruthy`](/en/v1/api/either/boolTruthy) & [`boolFalsy`](/en/v1/api/either/boolFalsy).
- [`whenIsBoolTruthy`](/en/v1/api/either/whenIsBoolTruthy) – To act only on truthy values.
