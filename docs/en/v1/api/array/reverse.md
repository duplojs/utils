---
outline: [2, 3]
prev:
  text: "chunk"
  link: "/en/v1/api/array/chunk"
next:
  text: "sort"
  link: "/en/v1/api/array/sort"
---

# reverse

The **`reverse()`** method returns a copy of an array with the elements in reverse order, while leaving the initial array intact. Tuples retain exact typing thanks to `ReverseTuple`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/reverse/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function reverse<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple ? ReverseTuple<GenericInput> : GenericInput
```

## Parameters

- `input`: The array whose order you want to reverse.

## Return value

A new array containing the same elements but in reverse order. When the input is a tuple, the result exactly reflects the new arrangement of the elements.

## See also

- [`sort`](/en/v1/api/array/sort) - Sorts an array via a comparison function
- [`map`](/en/v1/api/array/map) - Transforms each element independently

## Sources

- [MDN Web Docs - Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
