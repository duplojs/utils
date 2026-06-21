---
outline: [2, 3]
description: "Applies one callback on Right values and a second callback on every non-Right value."
prev:
  text: "whenIsRight"
  link: "/en/v1/api/either/whenIsRight"
next:
  text: "unwrapRight"
  link: "/en/v1/api/either/unwrapRight"
---

# whenIsRightOtherwise

Applies one callback on `Right` values and a second callback on every non-`Right` value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsRightOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntax

### Classic signature

```typescript
function whenIsRightOtherwise<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputOtherwise
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  otherwiseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): GenericOutputRight | GenericOutputOtherwise;
```

### Curried signature

```typescript
function whenIsRightOtherwise<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputOtherwise
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  otherwiseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): (input: GenericInput) => GenericOutputRight | GenericOutputOtherwise;
```

## Parameters

- `theFunction`: Callback executed when input is `Right` (receives unwrapped payload).
- `otherwiseFunction`: Callback executed for remaining values (`Left` or non-Either), without unwrap.
- `input`: Value to process immediately (optional in curried style).

## Return value

Returns the result of `theFunction` for `Right`, otherwise the result of `otherwiseFunction`.

## See also

- [`whenIsLeftOtherwise`](/en/v1/api/either/whenIsLeftOtherwise) - Symmetric variant for `Left`.
- [`whenIsRight`](/en/v1/api/either/whenIsRight) - Right-only mapping without explicit otherwise.
