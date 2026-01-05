---
outline: [2, 3]
description: "The toFixed() method formats a number using fixed-point notation with a specified number of decimals. It returns a string representation of the number."
prev:
  text: "sqrt"
  link: "/en/v1/api/number/sqrt"
next:
  text: "sin"
  link: "/en/v1/api/number/sin"
---

# toFixed

The **`toFixed()`** method formats a number using fixed-point notation with a specified number of decimals. It returns a string representation of the number.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/toFixed/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function toFixed<
	GenericInput extends number
>(
	input: GenericInput,
	digits: number
): string
```

### Curried signature

```typescript
function toFixed<
	GenericInput extends number
>(
	digits: number
): (input: GenericInput) => string
```

## Parameters

- `input`: The number to format (classic signature only).
- `digits`: The number of digits after the decimal point (between 0 and 100).

## Return value

returns a string representing the number with the specified number of decimals.

## See also

- [`round`](/en/v1/api/number/round) - Rounds a number to the nearest integer
- [`floor`](/en/v1/api/number/floor) - Rounds a number down
- [`ceil`](/en/v1/api/number/ceil) - Rounds a number up

## Sources

- [MDN Web Docs - Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
