---
outline: [2, 3]
description: "The asin() method returns the arcsine of a number, that is, the angle (in radians) whose sine is equal to the given value. It is the inverse function of sin()."
prev:
  text: "tan"
  link: "/en/v1/api/number/tan"
next:
  text: "acos"
  link: "/en/v1/api/number/acos"
---

# asin

The **`asin()`** method returns the arcsine of a number, that is, the angle (in radians) whose sine is equal to the given value. It is the inverse function of `sin()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/asin/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

```typescript
function asin<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: A number between -1 and 1 representing the sine of an angle.

## Return value

The angle in radians (between -π/2 and π/2) whose sine equals the given value. Returns `NaN` if the value is outside the interval [-1, 1].

## See also

- [`sin`](/en/v1/api/number/sin) - Calculates the sine of an angle
- [`acos`](/en/v1/api/number/acos) - Calculates the arccosine
- [`atan`](/en/v1/api/number/atan) - Calculates the arctangent

## Sources

- [MDN Web Docs - Math.asin()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin)
