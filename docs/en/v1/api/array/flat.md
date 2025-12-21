---
outline: [2, 3]
prev:
  text: "slice"
  link: "/en/v1/api/array/slice"
next:
  text: "flatMap"
  link: "/en/v1/api/array/flatMap"
---

# flat

The **`flat()`** method flattens a nested array up to the requested depth and returns a new array containing the unrolled elements.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/flat/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

```typescript
function flat<
	const GenericInput extends readonly unknown[],
	const GenericDepth extends number = 1
>(
	input: GenericInput,
	depth?: GenericDepth
): FlatArray<GenericInput, GenericDepth>[]
```

## Parameters

- `input`: The potentially nested array to flatten.
- `depth`: The number of levels to unroll. Defaults to `1`.

## Return value

A new array in which the elements have been concatenated up to the requested depth. If the input is a tuple, the resulting type precisely reflects the flattening level.

## See also

- [`flatMap`](/en/v1/api/array/flatMap) - Transforms then flattens the result by one level
- [`map`](/en/v1/api/array/map) - Applies a function to each element

## Sources

- [MDN Web Docs - Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
