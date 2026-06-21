---
outline: [2, 3]
description: "Applies one callback on Left values and a second callback on every non-Left value."
prev:
  text: "whenIsLeft"
  link: "/en/v1/api/either/whenIsLeft"
next:
  text: "unwrapLeft"
  link: "/en/v1/api/either/unwrapLeft"
---

# whenIsLeftOtherwise

Applies one callback on `Left` values and a second callback on every non-`Left` value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsLeftOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntax

### Classic signature

```typescript
function whenIsLeftOtherwise<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputOtherwise
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  otherwiseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): GenericOutputLeft | GenericOutputOtherwise;
```

### Curried signature

```typescript
function whenIsLeftOtherwise<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputOtherwise
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  otherwiseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): (input: GenericInput) => GenericOutputLeft | GenericOutputOtherwise;
```

## Parameters

- `theFunction`: Callback executed when input is `Left` (receives unwrapped payload).
- `otherwiseFunction`: Callback executed for remaining values (`Right` or non-Either), without unwrap.
- `input`: Value to process immediately (optional in curried style).

## Return value

Returns the result of `theFunction` for `Left`, otherwise the result of `otherwiseFunction`.

## See also

- [`whenIsRightOtherwise`](/en/v1/api/either/whenIsRightOtherwise) - Symmetric variant for `Right`.
- [`whenIsLeft`](/en/v1/api/either/whenIsLeft) - Left-only mapping without explicit otherwise.
