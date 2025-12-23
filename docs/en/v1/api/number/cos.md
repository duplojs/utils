---
outline: [2, 3]
prev:
  text: "sin"
  link: "/en/v1/api/number/sin"
next:
  text: "tan"
  link: "/en/v1/api/number/tan"
---

# cos

The **`cos()`** method returns the cosine of an angle expressed in radians. Cosine is a fundamental trigonometric function that returns the x-coordinate of a point on the unit circle.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/cos/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function cos<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: The angle in radians for which to calculate the cosine.

## Return value

The cosine of the given angle, a value between -1 and 1.

## See also

- [`sin`](/en/v1/api/number/sin) - Calculates the sine of an angle
- [`tan`](/en/v1/api/number/tan) - Calculates the tangent of an angle
- [`acos`](/en/v1/api/number/acos) - Calculates the arccosine

## Sources

- [MDN Web Docs - Math.cos()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos)
