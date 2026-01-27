---
outline: [2, 3]
description: "Callback executed only for BoolTruthy values. Otherwise, the initial value is returned."
prev:
  text: "isBoolTruthy"
  link: "/en/v1/api/either/isBoolTruthy"
next:
  text: "isBoolFalsy"
  link: "/en/v1/api/either/isBoolFalsy"
---

# whenIsBoolTruthy

Callback executed only for `BoolTruthy` values. Otherwise, the initial value is returned.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsBoolTruthy/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

### Classic signature

```typescript
function whenIsBoolTruthy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, BoolTruthy>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, BoolTruthy>;
```

### Curried signature

```typescript
function whenIsBoolTruthy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, BoolTruthy>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, BoolTruthy>;
```

## Parameters

- `theFunction`: Function executed only when the value is truthy.
- `input`: Value or `Either` to process (optional in the curried version).

## Return value

The result of `theFunction` for truthy values, otherwise the original value (`BoolFalsy`).

## See also

- [`whenIsBoolFalsy`](/en/v1/api/either/whenIsBoolFalsy).
- [`bool`](/en/v1/api/either/bool) – To generate the truthy/falsy source.
