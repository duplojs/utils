---
outline: [2, 3]
prev:
  text: "isBoolFalsy"
  link: "/en/v1/api/either/isBoolFalsy"
next:
  text: "nullish"
  link: "/en/v1/api/either/nullish"
---

# whenIsBoolFalsy

Applies a callback only when the boolean value is falsy.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsBoolFalsy/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function whenIsBoolFalsy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherBoolFalsy>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
```

### Curried signature

```typescript
function whenIsBoolFalsy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherBoolFalsy>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
```

## Parameters

- `theFunction`: Callback executed when the value is falsy.
- `input`: Immediate input (optional in the curried version).

## Return value

Result of the callback for falsy cases, otherwise the original truthy value.

## See also

- [`whenIsBoolTruthy`](/en/v1/api/either/whenIsBoolTruthy).
- [`bool`](/en/v1/api/either/bool).
