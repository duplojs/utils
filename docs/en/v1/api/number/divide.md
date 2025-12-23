---
outline: [2, 3]
prev:
  text: "multiply"
  link: "/en/v1/api/number/multiply"
next:
  text: "modulo"
  link: "/en/v1/api/number/modulo"
---

# divide

The **`divide()`** method performs division of two numbers. It can be used in a curried way to create reusable division functions.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/divide/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function divide<
	GenericInput extends number
>(
	input: GenericInput,
	divisor: number
): number
```

### Curried signature

```typescript
function divide<
	GenericInput extends number
>(
	divisor: number
): (input: GenericInput) => number
```

## Parameters

- `input`: The number to divide (dividend, classic signature only).
- `divisor`: The number to divide by (divisor).

## Return value

returns the result of the division (`input / divisor`).

## See also

- [`multiply`](/en/v1/api/number/multiply) - Multiplies two numbers
- [`modulo`](/en/v1/api/number/modulo) - Computes the remainder of a division
- [`add`](/en/v1/api/number/add) - Adds two numbers
- [`subtract`](/en/v1/api/number/subtract) - Subtracts two numbers

## Sources

- [MDN Web Docs - Division (/)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)
