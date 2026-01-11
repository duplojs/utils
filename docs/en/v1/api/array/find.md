---
outline: [2, 3]
description: "The find() method returns the first element of an array that satisfies a given condition."
prev:
  text: "isLastIndex"
  link: "/en/v1/api/array/isLastIndex"
next:
  text: "findLast"
  link: "/en/v1/api/array/findLast"
---

# find

The **`find()`** method returns the first element of an array that satisfies a given condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/find/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
// Type Guard
function find<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => element is GenericOutput
): GenericOutput | undefined

// Boolean
function find<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => boolean
): GenericInput[number] | undefined
```

### Curried signature

```typescript
// Type Guard
function find<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => element is GenericOutput
): (input: GenericInput) => GenericOutput | undefined

// Boolean
function find<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => boolean
): (input: GenericInput) => GenericInput[number] | undefined
```

### Helper parameters

```typescript
interface ArrayFindParams {
	index: number;
}
```

## Parameters

- `input`: The array to search in.
- `predicate`: Predicate function that tests each element (and can act as a type guard). Receives the element and an object containing the index.
- `params.index`: Position of the current element in the array.

## Return value

The first element that satisfies the condition, or `undefined` if no element matches.

## See also

- [`findLast`](/en/v1/api/array/findLast) - Finds the last element that satisfies a condition
- [`findIndex`](/en/v1/api/array/findIndex) - Returns the index instead of the element

## Sources

- [MDN Web Docs - Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
