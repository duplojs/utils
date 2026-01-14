---
outline: [2, 3]
description: "The findLast() method returns the last element of an array that satisfies a given condition."
prev:
  text: "find"
  link: "/en/v1/api/array/find"
next:
  text: "findIndex"
  link: "/en/v1/api/array/findIndex"
---

# findLast

The **`findLast()`** method returns the last element of an array that satisfies a given condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findLast/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

### Classic signature

```typescript
// Type Guard
function findLast<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => element is GenericOutput
): GenericOutput | undefined

// Boolean
function findLast<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => boolean
): GenericInput[number] | undefined
```

### Curried signature

```typescript
// Type Guard
function findLast<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => element is GenericOutput
): (input: GenericInput) => GenericOutput | undefined

// Boolean
function findLast<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => boolean
): (input: GenericInput) => GenericInput[number] | undefined
```

### Helper parameters

```typescript
interface ArrayFindLastParams {
	index: number;
}
```

## Parameters

- `input`: The array to search in.
- `predicate`: Predicate function that tests each element (and can act as a type guard). Receives the element and an object containing the index.
- `params.index`: Position of the current element in the array.

## Return value

The last element that satisfies the condition, or `undefined` if no element matches.

## See also

- [`find`](/en/v1/api/array/find) - Finds the first element that satisfies a condition
- [`findLastIndex`](/en/v1/api/array/findLastIndex) - Returns the index instead of the element

## Sources

- [MDN Web Docs - Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
