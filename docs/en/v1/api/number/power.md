---
outline: [2, 3]
description: "The power() method raises a number to a given exponent. It calculates the value of a number multiplied by itself a certain number of times."
prev:
  text: "modulo"
  link: "/en/v1/api/number/modulo"
next:
  text: "negate"
  link: "/en/v1/api/number/negate"
---

# power

The **`power()`** method raises a number to a given exponent. It calculates the value of a number multiplied by itself a certain number of times.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/power/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function power<
	GenericInput extends number
>(
	input: GenericInput,
	exponent: number
): number
```

### Curried signature

```typescript
function power<
	GenericInput extends number
>(
	exponent: number
): (input: GenericInput) => number
```

## Parameters

- `input`: The base number to raise to a power (classic signature only).
- `exponent`: The exponent to which to raise the number.

## Return value

returns the result of `input` raised to the power `exponent`. Equivalent to `value ** exponent` or `Math.pow(value, exponent)`.

## See also

- [`multiply`](/en/v1/api/number/multiply) - Multiplies two numbers
- [`sqrt`](/en/v1/api/number/sqrt) - Calculates the square root

## Sources

- [MDN Web Docs - Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
