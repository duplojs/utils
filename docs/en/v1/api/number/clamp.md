---
outline: [2, 3]
description: "The clamp() method limits a number within a given range. If the value is below the lower bound, it returns the lower bound. If it is above the upper bound, it returns the upper bound. Otherwise, it returns the value itself."
prev:
  text: "min"
  link: "/en/v1/api/number/min"
next:
  text: "sqrt"
  link: "/en/v1/api/number/sqrt"
---

# clamp

The **`clamp()`** method limits a number within a given range. If the value is below the lower bound, it returns the lower bound. If it is above the upper bound, it returns the upper bound. Otherwise, it returns the value itself.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/clamp/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function clamp<
	GenericInput extends number
>(
	input: GenericInput,
	lowerBound: number,
	upperBound: number
): number
```

### Curried signature

```typescript
function clamp<
	GenericInput extends number
>(
	lowerBound: number,
	upperBound: number
): (input: GenericInput) => number
```

## Parameters

- `input`: The number to clamp within the interval (classic signature only).
- `lowerBound`: The lower bound of the interval.
- `upperBound`: The upper bound of the interval.

## Return value

returns a number clamped to the interval `[lowerBound, upperBound]`. If `lowerBound` and `upperBound` are inverted, the function automatically reorders them.

## See also

- [`max`](/en/v1/api/number/max) - Returns the maximum value
- [`min`](/en/v1/api/number/min) - Returns the minimum value

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [MDN Web Docs - Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
