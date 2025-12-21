---
outline: [2, 3]
prev:
  text: "atan"
  link: "/en/v1/api/number/atan"
next:
  text: "greater"
  link: "/en/v1/api/number/greater"
---

# atan2

The **`atan2()`** method returns the arctangent of the quotient of its arguments (y/x), taking into account the signs of both arguments to determine the correct quadrant. Unlike `atan()`, it returns an angle between -π and π, covering all quadrants of the trigonometric circle.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/atan2/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function atan2<
	GenericAxisY extends number
>(
	axisY: GenericAxisY,
	axisX: number
): number
```

### Curried signature

```typescript
function atan2<
	GenericAxisY extends number
>(
	axisX: number
): (axisY: GenericAxisY) => number
```

## Parameters

- `axisY`: The y coordinate (or vertical component, classic signature only).
- `axisX`: The x coordinate (or horizontal component).

**Important note**: The parameter order in the classic signature is `axisY` then `axisX`, which follows the standard mathematical convention `atan2(y, x)`.

## Return value

**Classic signature**: returns the angle in radians (between -π and π) between the positive x-axis and the point (axisX, axisY).

**Curried signature**: returns a function that takes the y coordinate and computes the corresponding angle.

## See also

- [`atan`](/en/v1/api/number/atan) - Calculates the arctangent (single quadrant)
- [`tan`](/en/v1/api/number/tan) - Calculates the tangent of an angle
- [`sin`](/en/v1/api/number/sin) - Calculates the sine of an angle
- [`cos`](/en/v1/api/number/cos) - Calculates the cosine of an angle

## Sources

- [MDN Web Docs - Math.atan2()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)
