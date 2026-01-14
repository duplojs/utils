---
outline: [2, 3]
description: "The findLastIndex() method returns the index of the last element of an array that satisfies a given condition."
prev:
  text: "findIndex"
  link: "/en/v1/api/array/findIndex"
next:
  text: "every"
  link: "/en/v1/api/array/every"
---

# findLastIndex

The **`findLastIndex()`** method returns the index of the last element of an array that satisfies a given condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findLastIndex/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

### Classic signature

```typescript
function findLastIndex<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastIndexParams
	) => boolean
): number | undefined
```

### Curried signature

```typescript
function findLastIndex<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastIndexParams
	) => boolean
): (input: GenericInput) => number | undefined
```

### Helper parameters

```typescript
interface ArrayFindLastIndexParams {
	index: number;
}
```

## Parameters

- `input`: The array to search in.
- `predicate`: Predicate function that tests each element. Receives the element and an object containing the index.
- `params.index`: Position of the current element in the array.

## Return value

The index of the last element that satisfies the condition, or `undefined` if no element matches.

## See also

- [`findLast`](/en/v1/api/array/findLast) - Returns the element instead of the index
- [`findIndex`](/en/v1/api/array/findIndex) - Finds the index of the first element

## Sources

- [MDN Web Docs - Array.findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
