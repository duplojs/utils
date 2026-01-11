---
outline: [2, 3]
description: "The max() method returns the largest value among the provided numbers. It lets you compare several values and obtain the maximum."
prev:
  text: "trunc"
  link: "/en/v1/api/number/trunc"
next:
  text: "min"
  link: "/en/v1/api/number/min"
---

# max

The **`max()`** method returns the largest value among the provided numbers. It lets you compare several values and obtain the maximum.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/max/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function max<
	GenericInput extends AnyTuple<number>
>(
	input: GenericInput
): number
```

## Parameters

- `input`: Tuple of numbers to compare.

## Return value

The largest number in the provided tuple.

## See also

- [`min`](/en/v1/api/number/min) - Returns the minimum value
- [`clamp`](/en/v1/api/number/clamp) - Clamps a number within a range

## Sources

- [MDN Web Docs - Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
