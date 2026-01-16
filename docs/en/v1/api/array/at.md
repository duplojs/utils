---
outline: [2, 3]
description: "The at() method returns the element at a given index (supports negative indexes)."
prev:
  text: "toTuple"
  link: "/en/v1/api/array/toTuple"
next:
  text: "first"
  link: "/en/v1/api/array/first"
---

# at

The **`at()`** method returns the element at a given index (supports negative indexes).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/at/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

### Classic signature

```typescript
export function at<
	GenericArray extends readonly unknown[],
	GenericIndex extends number,
>(
	array: GenericArray,
	index: GenericIndex,
): AtArray<GenericArray, GenericIndex>
```

### Curried signature

```typescript
export function at<
	GenericArray extends readonly unknown[],
	GenericIndex extends number,
>(
	index: GenericIndex,
): (array: GenericArray) => AtArray<GenericArray, GenericIndex>
```

## Parameters

- `input`: The array from which to retrieve an element.
- `index`: The index of the element to retrieve (can be negative to count from the end).

## Return value

The element at the given index, or `undefined` if the index is out of bounds.

## See also

- [`first`](/en/v1/api/array/first) - Returns the first element of the array
- [`last`](/en/v1/api/array/last) - Returns the last element of the array

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
