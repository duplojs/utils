---
outline: [2, 3]
description: "Applies one callback on Right values and a second callback on every non-Right value."
prev:
  text: "whenIsRight"
  link: "/en/v1/api/either/whenIsRight"
next:
  text: "unwrapRightOrThrow"
  link: "/en/v1/api/either/unwrapRightOrThrow"
---

# whenIsRightElse

Applies one callback on `Right` values and a second callback on every non-`Right` value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsRightElse/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntax

### Classic signature

```typescript
function whenIsRightElse<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputElse
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  elseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): GenericOutputRight | GenericOutputElse;
```

### Curried signature

```typescript
function whenIsRightElse<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputElse
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  elseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): (input: GenericInput) => GenericOutputRight | GenericOutputElse;
```

## Parameters

- `theFunction`: Callback executed when input is `Right` (receives unwrapped payload).
- `elseFunction`: Callback executed for remaining values (`Left` or non-Either), without unwrap.
- `input`: Value to process immediately (optional in curried style).

## Return value

Returns the result of `theFunction` for `Right`, otherwise the result of `elseFunction`.

## See also

- [`whenIsLeftElse`](/en/v1/api/either/whenIsLeftElse) - Symmetric variant for `Left`.
- [`whenIsRight`](/en/v1/api/either/whenIsRight) - Right-only mapping without explicit else.
