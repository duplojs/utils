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

# whenIsLeftElse

Applies one callback on `Left` values and a second callback on every non-`Left` value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsLeftElse/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntax

### Classic signature

```typescript
function whenIsLeftElse<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputElse
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  elseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): GenericOutputLeft | GenericOutputElse;
```

### Curried signature

```typescript
function whenIsLeftElse<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputElse
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  elseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): (input: GenericInput) => GenericOutputLeft | GenericOutputElse;
```

## Parameters

- `theFunction`: Callback executed when input is `Left` (receives unwrapped payload).
- `elseFunction`: Callback executed for remaining values (`Right` or non-Either), without unwrap.
- `input`: Value to process immediately (optional in curried style).

## Return value

Returns the result of `theFunction` for `Left`, otherwise the result of `elseFunction`.

## See also

- [`whenIsRightElse`](/en/v1/api/either/whenIsRightElse) - Symmetric variant for `Right`.
- [`whenIsLeft`](/en/v1/api/either/whenIsLeft) - Left-only mapping without explicit else.
