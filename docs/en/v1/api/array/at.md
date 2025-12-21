---
outline: [2, 3]
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
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function at<
	GenericInputTuple extends readonly unknown[], 
	GenericIndex extends number
>(
	input: GenericInputTuple, 
	index: GenericIndex
): AtTuple<GenericInputTuple, GenericIndex>

function at<
	GenericElement extends unknown
>(
	input: readonly GenericElement[], 
	index: number
): GenericElement | undefined
```

### Curried signature

```typescript
function at<
	GenericInputTuple extends readonly unknown[], 
	GenericIndex extends number
>(
	index: GenericIndex
): (input: GenericInputTuple) => AtTuple<GenericInputTuple, GenericIndex>

function at<
	GenericElement extends unknown
>(
	index: number
): (input: readonly GenericElement[]) => GenericElement | undefined
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
