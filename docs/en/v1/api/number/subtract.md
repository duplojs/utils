---
outline: [2, 3]
description: "The subtract() method subtracts one number from another. It supports two forms: a curried form for functional composition and a direct form for immediate calculation."
prev:
  text: "add"
  link: "/en/v1/api/number/add"
next:
  text: "multiply"
  link: "/en/v1/api/number/multiply"
---

# subtract

The **`subtract()`** method subtracts one number from another. It supports two forms: a curried form for functional composition and a direct form for immediate calculation.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/subtract/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtract<
	GenericInput extends number
>(
	input: GenericInput,
	subtrahend: number
): number
```

### Curried signature

```typescript
function subtract<
	GenericInput extends number
>(
	subtrahend: number
): (input: GenericInput) => number
```

## Parameters

- `input`: The number from which to subtract (classic signature only).
- `subtrahend`: The number to subtract.

## Return value

**Classic signature**: returns the result of the subtraction (`value - subtrahend`).

## See also

- [`add`](/en/v1/api/number/add) - Adds two numbers
- [`negate`](/en/v1/api/number/negate) - Inverts the sign of a number
- [`abs`](/en/v1/api/number/abs) - Returns the absolute value of a number

## Sources

- [MDN Web Docs - Subtraction (-)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
