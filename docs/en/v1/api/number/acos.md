---
outline: [2, 3]
description: "The acos() method returns the arccosine of a number, that is, the angle (in radians) whose cosine is equal to the given value. It is the inverse function of cos()."
prev:
  text: "asin"
  link: "/en/v1/api/number/asin"
next:
  text: "atan"
  link: "/en/v1/api/number/atan"
---

# acos

The **`acos()`** method returns the arccosine of a number, that is, the angle (in radians) whose cosine is equal to the given value. It is the inverse function of `cos()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/acos/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

```typescript
function acos<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: A number between -1 and 1 representing the cosine of an angle.

## Return value

The angle in radians (between 0 and π) whose cosine equals the given value. Returns `NaN` if the value is outside the interval [-1, 1].

## See also

- [`cos`](/en/v1/api/number/cos) - Calculates the cosine of an angle
- [`asin`](/en/v1/api/number/asin) - Calculates the arcsine
- [`atan`](/en/v1/api/number/atan) - Calculates the arctangent

## Sources

- [MDN Web Docs - Math.acos()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)
