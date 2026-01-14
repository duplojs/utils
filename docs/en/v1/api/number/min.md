---
outline: [2, 3]
description: "The min() method returns the smallest value among the provided numbers. It lets you compare several values and obtain the minimum."
prev:
  text: "max"
  link: "/en/v1/api/number/max"
next:
  text: "clamp"
  link: "/en/v1/api/number/clamp"
---

# min

The **`min()`** method returns the smallest value among the provided numbers. It lets you compare several values and obtain the minimum.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/min/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function min<
	GenericInput extends AnyTuple<number>
>(
	input: GenericInput
): number
```

## Parameters

- `input`: Tuple of numbers to compare.

## Return value

The smallest number in the provided tuple.

## See also

- [`max`](/en/v1/api/number/max) - Returns the maximum value
- [`clamp`](/en/v1/api/number/clamp) - Clamps a number within a range

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
