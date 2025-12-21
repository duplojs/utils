---
outline: [2, 3]
prev:
  text: "cos"
  link: "/en/v1/api/number/cos"
next:
  text: "asin"
  link: "/en/v1/api/number/asin"
---

# tan

The **`tan()`** method returns the tangent of an angle expressed in radians. Tangent is the ratio between the sine and cosine of an angle (tan = sin/cos).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/tan/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function tan<
	GenericInput extends number,
>(
	input: GenericInput
): number
```

## Parameters

- `input`: The angle in radians for which to calculate the tangent.

## Return value

The tangent of the given angle. The value tends toward infinity when the angle approaches π/2 (90°) or -π/2 (-90°).

## See also

- [`sin`](/en/v1/api/number/sin) - Calculates the sine of an angle
- [`cos`](/en/v1/api/number/cos) - Calculates the cosine of an angle
- [`atan`](/en/v1/api/number/atan) - Calculates the arctangent

## Sources

- [MDN Web Docs - Math.tan()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)
