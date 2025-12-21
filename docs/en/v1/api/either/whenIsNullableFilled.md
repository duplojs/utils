---
outline: [2, 3]
prev:
  text: "isNullableFilled"
  link: "/en/v1/api/either/isNullableFilled"
next:
  text: "optional"
  link: "/en/v1/api/either/optional"
---

# whenIsNullableFilled

Applies a function only when the nullable Either contains a value (`NullableFilled`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsNullableFilled/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function whenIsNullableFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableFilled>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
```

### Curried signature

```typescript
function whenIsNullableFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableFilled>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
```

## Parameters

- `theFunction`: Callback executed when the value is present.
- `input`: Value/Either to inspect.

## Return value

Result of the callback if the value exists, otherwise the initial value (`NullableEmpty`).

## See also

- [`whenIsNullableEmpty`](/en/v1/api/either/whenIsNullableEmpty).
- [`nullable`](/en/v1/api/either/nullable).
