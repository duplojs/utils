---
outline: [2, 3]
description: "The lastIndexOf() method returns the index of the last occurrence of an element in an array."
prev:
  text: "indexOf"
  link: "/en/v1/api/array/indexOf"
next:
  text: "isLastIndex"
  link: "/en/v1/api/array/isLastIndex"
---

# lastIndexOf

The **`lastIndexOf()`** method returns the index of the last occurrence of an element in an array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/lastIndexOf/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function lastIndexOf<
	GenericElement extends unknown
>(
	input: readonly GenericElement[], 
	element: GenericElement, 
	fromIndex?: number
): number | undefined
```

### Curried signature

```typescript
function lastIndexOf<
	GenericElement extends unknown
>(
	element: GenericElement
): (input: readonly GenericElement[]) => number | undefined
```

## Parameters

- `input`: The array to search in.
- `element`: The element to search for.
- `fromIndex`: Starting index for the reverse search (optional).

## Return value

The index of the last occurrence of the element, or `undefined` if the element is not found.

## See also

- [`indexOf`](/en/v1/api/array/indexOf) - Returns the index of the first occurrence
- [`findLastIndex`](/en/v1/api/array/findLastIndex) - Finds the last index with a condition

## Sources

- [MDN Web Docs - Array.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
