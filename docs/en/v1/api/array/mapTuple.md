---
outline: [2, 3]
description: "The mapTuple() method maps each element of an array while preserving tuple length at the type level."
prev:
  text: "map"
  link: "/en/v1/api/array/map"
next:
  text: "filter"
  link: "/en/v1/api/array/filter"
---

# mapTuple

The **`mapTuple()`** method maps each element of an array while preserving tuple length at the type level.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/mapTuple/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntax

### Classic signature

```typescript
function mapTuple<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapTupleParams<GenericInput>
	) => GenericOutput
): MapTuple<GenericInput, GenericOutput>
```

### Curried signature

```typescript
function mapTuple<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapTupleParams<GenericInput>
	) => GenericOutput
): (input: GenericInput) => MapTuple<GenericInput, GenericOutput>
```

### Helper parameters

```typescript
interface ArrayMapTupleParams<
	GenericInputTuple extends readonly unknown[]
> {
	index: number;
	self: GenericInputTuple;
}
```

## Parameters

- `input`: Array or tuple to transform.
- `theFunction`: Mapping function receiving current element, index, and source array.

## Return value

A new mapped array. If `input` is a tuple, the output keeps the same tuple length.

## See also

- [`map`](/en/v1/api/array/map) - Maps values in a generic array
- [`filter`](/en/v1/api/array/filter) - Filters values based on a predicate

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
