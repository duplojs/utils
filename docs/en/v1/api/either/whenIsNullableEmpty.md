---
outline: [2, 3]
description: "Executes a callback only when the Either is NullableEmpty."
prev:
  text: "isNullableEmpty"
  link: "/en/v1/api/either/isNullableEmpty"
next:
  text: "isNullableFilled"
  link: "/en/v1/api/either/isNullableFilled"
---

# whenIsNullableEmpty

Executes a callback only when the Either is `NullableEmpty`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsNullableEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function whenIsNullableEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
```

### Curried signature

```typescript
function whenIsNullableEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
```

## Parameters

- `theFunction`: Callback called when there is no value.
- `input`: Value/Either to process.

## Return value

Result of the callback if `null`, otherwise the original value.

## See also

- [`whenIsNullableFilled`](/en/v1/api/either/whenIsNullableFilled).
- [`nullable`](/en/v1/api/either/nullable).
