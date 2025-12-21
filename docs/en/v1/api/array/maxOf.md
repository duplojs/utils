---
outline: [2, 3]
prev:
  text: "minOf"
  link: "/en/v1/api/array/minOf"
next:
  text: "minElements"
  link: "/en/v1/api/array/minElements"
---

# maxOf

The **`maxOf()`** function returns the largest numeric value of an array (or tuple) without touching the original.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/maxOf/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function maxOf<
	GenericInput extends readonly number[]
>(
	input: GenericInput
): number | undefined
```

## Parameters

- `input`: Array of numbers whose maximum is sought.

## Return value

The largest number found, or `undefined` if the array is empty.

## See also

- [`minOf`](/en/v1/api/array/minOf) - Computes the minimum value
- [`maxElements`](/en/v1/api/array/maxElements) - Checks a maximum number of elements

## Sources

- [MDN Web Docs - Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
