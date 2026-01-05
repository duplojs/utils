---
outline: [2, 3]
description: "The negate() method inverts the sign of a number. A positive number becomes negative and vice versa. It is equivalent to multiplying by -1."
prev:
  text: "power"
  link: "/en/v1/api/number/power"
next:
  text: "abs"
  link: "/en/v1/api/number/abs"
---

# negate

The **`negate()`** method inverts the sign of a number. A positive number becomes negative and vice versa. It is equivalent to multiplying by -1.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/negate/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function negate<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: The number whose sign you want to invert.

## Return value

The number with its sign inverted. If the number is positive, returns its negative version. If the number is negative, returns its positive version.

## See also

- [`abs`](/en/v1/api/number/abs) - Returns the absolute value of a number
- [`subtract`](/en/v1/api/number/subtract) - Subtracts two numbers

## Sources

- [MDN Web Docs - Unary negation (-)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
