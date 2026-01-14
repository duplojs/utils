---
outline: [2, 3]
description: "The multiply() method multiplies two numbers together. It can be used in a curried mode to create partially applied multiplication functions."
prev:
  text: "subtract"
  link: "/en/v1/api/number/subtract"
next:
  text: "divide"
  link: "/en/v1/api/number/divide"
---

# multiply

The **`multiply()`** method multiplies two numbers together. It can be used in a curried mode to create partially applied multiplication functions.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/multiply/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function multiply<
	GenericInput extends number
>(
	input: GenericInput,
	operand: number
): number
```

### Curried signature

```typescript
function multiply<
	GenericInput extends number
>(
	operand: number
): (input: GenericInput) => number
```

## Parameters

- `input`: The number to multiply (multiplicand, classic signature only).
- `operand`: The multiplier.

## Return value

returns the product of the two numbers (`input * operand`).

## See also

- [`divide`](/en/v1/api/number/divide) - Divides two numbers
- [`add`](/en/v1/api/number/add) - Adds two numbers
- [`subtract`](/en/v1/api/number/subtract) - Subtracts two numbers

## Sources

- [MDN Web Docs - Multiplication (*)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
