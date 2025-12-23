---
outline: [2, 3]
prev:
  text: "clamp"
  link: "/en/v1/api/number/clamp"
next:
  text: "toFixed"
  link: "/en/v1/api/number/toFixed"
---

# sqrt

The **`sqrt()`** method returns the square root of a number. The square root of a number x is the value y such that y² = x.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/sqrt/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function sqrt<
	GenericInput extends number
>(
	input: GenericInput
): number
```

## Parameters

- `input`: The number for which to compute the square root.

## Return value

The square root of the given number. If the number is negative, returns `NaN`.

## See also

- [`power`](/en/v1/api/number/power) - Raises a number to a power
- [`abs`](/en/v1/api/number/abs) - Returns the absolute value of a number

## Sources

- [MDN Web Docs - Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
