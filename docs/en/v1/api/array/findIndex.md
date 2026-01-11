---
outline: [2, 3]
description: "The findIndex() method returns the index of the first element of an array that satisfies a given condition."
prev:
  text: "findLast"
  link: "/en/v1/api/array/findLast"
next:
  text: "findLastIndex"
  link: "/en/v1/api/array/findLastIndex"
---

# findIndex

The **`findIndex()`** method returns the index of the first element of an array that satisfies a given condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findIndex/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function findIndex<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindIndexParams
	) => boolean
): number | undefined
```

### Curried signature

```typescript
function findIndex<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindIndexParams
	) => boolean
): (input: GenericInput) => number | undefined
```

### Helper parameters

```typescript
interface ArrayFindIndexParams {
	index: number;
}
```

## Parameters

- `input`: The array to search in.
- `predicate`: Predicate function that tests each element. Receives the element and an object containing the index.
- `params.index`: Position of the current element in the array.

## Return value

The index of the first element that satisfies the condition, or `undefined` if no element matches.

## See also

- [`find`](/en/v1/api/array/find) - Returns the element instead of the index
- [`findLastIndex`](/en/v1/api/array/findLastIndex) - Finds the index of the last element

## Sources

- [MDN Web Docs - Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
