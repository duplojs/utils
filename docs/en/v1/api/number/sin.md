---
outline: [2, 3]
description: "The sin() method returns the sine of an angle expressed in radians. Sine is a fundamental trigonometric function that returns the y-coordinate of a point on the unit circle."
prev:
  text: "toFixed"
  link: "/en/v1/api/number/toFixed"
next:
  text: "cos"
  link: "/en/v1/api/number/cos"
---

# sin

The **`sin()`** method returns the sine of an angle expressed in radians. Sine is a fundamental trigonometric function that returns the y-coordinate of a point on the unit circle.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/sin/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function sin<
	GenericInput extends number,
>(
	input: GenericInput
): number
```

## Parameters

- `input`: The angle in radians for which to calculate the sine.

## Return value

The sine of the given angle, a value between -1 and 1.

## See also

- [`cos`](/en/v1/api/number/cos) - Calculates the cosine of an angle
- [`tan`](/en/v1/api/number/tan) - Calculates the tangent of an angle
- [`asin`](/en/v1/api/number/asin) - Calculates the arcsine

## Sources

- [MDN Web Docs - Math.sin()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)
