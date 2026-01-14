---
outline: [2, 3]
description: "The map() method applies a transform function to each element of an array and returns a new array containing the results, without modifying the input."
prev:
  text: "is"
  link: "/en/v1/api/array/is"
next:
  text: "filter"
  link: "/en/v1/api/array/filter"
---

# map

The **`map()`** method applies a transform function to each element of an array and returns a new array containing the results, without modifying the input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/map/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

### Classic signature

```typescript
function map<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapParams<GenericInput>
	) => GenericOutput
): GenericOutput[]
```

### Curried signature

```typescript
function map<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapParams<GenericInput>
	) => GenericOutput
): (input: GenericInput) => GenericOutput[]
```

### Helper parameters

```typescript
interface ArrayMapParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Parameters

- `input`: The array to transform.
- `theFunction`: Function applied to each element. It receives the current element and an object providing the index and the full array.
- `params.index`: Position of the current element in the source array.
- `params.self`: The full array (handy for comparing the current position or accessing neighbors).

## Return value

A new array containing the values returned by the transform function. The original array is never modified.

## See also

- [`filter`](/en/v1/api/array/filter) - Filters elements according to a condition
- [`flatMap`](/en/v1/api/array/flatMap) - Transforms then flattens the result by one level

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
