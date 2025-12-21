---
outline: [2, 3]
prev:
  text: "sum"
  link: "/en/v1/api/array/sum"
next:
  text: "maxOf"
  link: "/en/v1/api/array/maxOf"
---

# minOf

The **`minOf()`** function returns the smallest numeric value of an array without modifying it. It accepts both classic arrays and immutable tuples.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/minOf/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function minOf<
	GenericInput extends readonly number[]
>(
	input: GenericArray
): number | undefined
```

## Parameters

- `input`: Array of numbers to analyze.

## Return value

The smallest number present in `input`, or `undefined` if the array is empty.

## See also

- [`maxOf`](/en/v1/api/array/maxOf) - Returns the maximum value of an array
- [`reduce`](/en/v1/api/array/reduce) - Allows writing custom aggregations

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
