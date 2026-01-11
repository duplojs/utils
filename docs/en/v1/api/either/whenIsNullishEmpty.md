---
outline: [2, 3]
description: "Applies a callback only when the Either is NullishEmpty."
prev:
  text: "isNullishEmpty"
  link: "/en/v1/api/either/isNullishEmpty"
next:
  text: "isNullishFilled"
  link: "/en/v1/api/either/isNullishFilled"
---

# whenIsNullishEmpty

Applies a callback only when the Either is `NullishEmpty`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsNullishEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function whenIsNullishEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
```

### Curried signature

```typescript
function whenIsNullishEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
```

## Parameters

- `theFunction`: Callback executed in case of absence.
- `input`: `Either` or compatible value (optional in the curried version).

## Return value

Result of the callback if `NullishEmpty`, otherwise the original value.

## See also

- [`whenIsNullishFilled`](/en/v1/api/either/whenIsNullishFilled).
- [`nullish`](/en/v1/api/either/nullish).
