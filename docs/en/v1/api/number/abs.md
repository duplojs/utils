---
outline: [2, 3]
description: "The abs() method returns the absolute value of a number. The absolute value of a number is its distance from zero, always positive or zero."
prev:
  text: "negate"
  link: "/en/v1/api/number/negate"
next:
  text: "round"
  link: "/en/v1/api/number/round"
---

# abs

The **`abs()`** method returns the absolute value of a number. The absolute value of a number is its distance from zero, always positive or zero.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/abs/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function abs<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: The number whose absolute value you want.

## Return value

The absolute value of the given number. Always returns a positive number or zero.

## See also

- [`negate`](/en/v1/api/number/negate) - Inverts the sign of a number
- [`subtract`](/en/v1/api/number/subtract) - Subtracts two numbers

## Sources

- [MDN Web Docs - Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
