---
outline: [2, 3]
prev:
  text: "isOptionalFilled"
  link: "/en/v1/api/either/isOptionalFilled"
next:
  text: "future"
  link: "/en/v1/api/either/future"
---

# whenIsOptionalFilled

Applies a callback only when the optional Either contains a value (`OptionalFilled`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsOptionalFilled/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function whenIsOptionalFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherOptionalFilled>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherOptionalFilled>;
```

### Curried signature

```typescript
function whenIsOptionalFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherOptionalFilled>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherOptionalFilled>;
```

## Parameters

- `theFunction`: Callback executed when the value is defined.
- `input`: Value/Either to process.

## Return value

Result of the callback or the original value if the optional was empty.

## See also

- [`whenIsOptionalEmpty`](/en/v1/api/either/whenIsOptionalEmpty).
- [`optional`](/en/v1/api/either/optional).
