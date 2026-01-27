---
outline: [2, 3]
description: "Applies a function only when an optional is empty (undefined)."
prev:
  text: "isOptionalEmpty"
  link: "/en/v1/api/either/isOptionalEmpty"
next:
  text: "isOptionalFilled"
  link: "/en/v1/api/either/isOptionalFilled"
---

# whenIsOptionalEmpty

Applies a function only when an `optional` is empty (`undefined`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsOptionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

### Classic signature

```typescript
function whenIsOptionalEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, OptionalEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, OptionalEmpty>;
```

### Curried signature

```typescript
function whenIsOptionalEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, OptionalEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, OptionalEmpty>;
```

## Parameters

- `theFunction`: Callback executed if the value is `undefined`.
- `input`: Value/Either to analyze.

## Return value

Result of the callback if empty, otherwise the initial value.

## See also

- [`whenIsOptionalFilled`](/en/v1/api/either/whenIsOptionalFilled).
- [`optional`](/en/v1/api/either/optional).
