---
outline: [2, 3]
description: "The flatMap() method applies a transform function to each element and then automatically flattens the result by one level. It therefore combines map() and flat(1) in a single step."
prev:
  text: "flat"
  link: "/en/v1/api/array/flat"
next:
  text: "chunk"
  link: "/en/v1/api/array/chunk"
---

# flatMap

The **`flatMap()`** method applies a transform function to each element and then automatically flattens the result by one level. It therefore combines `map()` and `flat(1)` in a single step.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/flatMap/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function flatMap<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	input:  GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayFlatMapParams<GenericInput>
	) => GenericOutput
): FlatArray<GenericOutput, 1>[]
```

### Curried signature

```typescript
function flatMap<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayFlatMapParams<GenericInput>
	) => GenericOutput
): (input: GenericInput) => FlatArray<GenericOutput, 1>[]
```

### Helper parameters

```typescript
interface ArrayFlatMapParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Parameters

- `input`: The source array.
- `theFunction`: Function applied to each element. It returns an array (or a value) that will be flattened by one level.
- `params.index`: Position of the current element.
- `params.self`: The whole array (useful for comparing the length or accessing neighbors during the transformation).

## Return value

A new array with the transformed values flattened by one level. Input tuples keep precise typing thanks to `FlatArray`.

## See also

- [`map`](/en/v1/api/array/map) - Applies a function to each element
- [`flat`](/en/v1/api/array/flat) - Flattens a nested array

## Sources

- [MDN Web Docs - Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
