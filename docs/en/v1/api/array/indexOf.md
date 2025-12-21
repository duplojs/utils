---
outline: [2, 3]
prev:
  text: "notIncludes"
  link: "/en/v1/api/array/notIncludes"
next:
  text: "lastIndexOf"
  link: "/en/v1/api/array/lastIndexOf"
---

# indexOf

The **`indexOf()`** method returns the index of the first occurrence of an element in an array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/indexOf/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function indexOf<
	GenericElement extends unknown
>(
	input: readonly GenericElement[], 
	element: GenericElement, 
	fromIndex?: number
): number | undefined
```

### Curried signature

```typescript
function indexOf<
	GenericElement extends unknown
>(
	element: GenericElement
): (input: readonly GenericElement[]) => number | undefined
```

## Parameters

- `input`: The array to search in.
- `element`: The element to search for.
- `fromIndex`: Starting index for the search (optional).

## Return value

The index of the first occurrence of the element, or `undefined` if the element is not found.

## See also

- [`lastIndexOf`](/en/v1/api/array/lastIndexOf) - Returns the index of the last occurrence
- [`findIndex`](/en/v1/api/array/findIndex) - Finds the index with a condition

## Sources

- [MDN Web Docs - Array.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
