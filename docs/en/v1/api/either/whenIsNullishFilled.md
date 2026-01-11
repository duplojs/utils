---
outline: [2, 3]
description: "Executes a callback only when the Either contains a defined value (NullishFilled)."
prev:
  text: "isNullishFilled"
  link: "/en/v1/api/either/isNullishFilled"
next:
  text: "nullable"
  link: "/en/v1/api/either/nullable"
---

# whenIsNullishFilled

Executes a callback only when the Either contains a defined value (`NullishFilled`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsNullishFilled/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function whenIsNullishFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishFilled>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
```

### Curried signature

```typescript
function whenIsNullishFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishFilled>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
```

## Parameters

- `theFunction`: Callback applied when the value is present.
- `input`: Value/Either to process.

## Return value

Result of the callback or the original value if the Either was `NullishEmpty`.

## See also

- [`whenIsNullishEmpty`](/en/v1/api/either/whenIsNullishEmpty).
- [`nullish`](/en/v1/api/either/nullish).
