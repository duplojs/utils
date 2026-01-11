---
outline: [2, 3]
description: "The atan() method returns the arctangent of a number, that is, the angle (in radians) whose tangent is equal to the given value. It is the inverse function of tan()."
prev:
  text: "acos"
  link: "/en/v1/api/number/acos"
next:
  text: "atan2"
  link: "/en/v1/api/number/atan2"
---

# atan

The **`atan()`** method returns the arctangent of a number, that is, the angle (in radians) whose tangent is equal to the given value. It is the inverse function of `tan()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/atan/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function atan<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: A number representing the tangent of an angle.

## Return value

The angle in radians (between -π/2 and π/2) whose tangent equals the given value.

## See also

- [`tan`](/en/v1/api/number/tan) - Calculates the tangent of an angle
- [`atan2`](/en/v1/api/number/atan2) - Calculates the arctangent of y/x with quadrant handling
- [`asin`](/en/v1/api/number/asin) - Calculates the arcsine

## Sources

- [MDN Web Docs - Math.atan()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan)
