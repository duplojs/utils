---
outline: [2, 3]
description: "The modulo() method returns the remainder of the Euclidean division of two numbers. This operation is useful to determine parity, create circular rotations, or handle pagination."
prev:
  text: "divide"
  link: "/en/v1/api/number/divide"
next:
  text: "power"
  link: "/en/v1/api/number/power"
---

# modulo

The **`modulo()`** method returns the remainder of the Euclidean division of two numbers. This operation is useful to determine parity, create circular rotations, or handle pagination.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/modulo/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function modulo<
	GenericInput extends number
>(
	input: GenericInput,
	divisor: number
): number
```

### Curried signature

```typescript
function modulo<
	GenericInput extends number
>(
	divisor: number
): (input: GenericInput) => number
```

## Parameters

- `input`: The dividend (the number to divide, classic signature only).
- `divisor`: The divisor (the number to divide by).

## Return value

returns the remainder of the Euclidean division of `input` by `divisor`. The result has the same sign as the dividend (`input % divisor`).

## See also

- [`divide`](/en/v1/api/number/divide) - Divides two numbers
- [`floor`](/en/v1/api/number/floor) - Rounds a number down

## Sources

- [MDN Web Docs - Remainder (%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
