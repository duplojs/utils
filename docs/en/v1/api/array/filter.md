---
outline: [2, 3]
description: "The filter() method selects the elements of an array that satisfy a predicate and returns a new array. It can also serve as a type guard to refine the typing of the kept elements."
prev:
  text: "map"
  link: "/en/v1/api/array/map"
next:
  text: "select"
  link: "/en/v1/api/array/select"
---

# filter

The **`filter()`** method selects the elements of an array that satisfy a predicate and returns a new array. It can also serve as a type guard to refine the typing of the kept elements.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/filter/tryout.doc.ts"
  majorVersion="v1"
  height="376px"
  :foldLines="[2,34]"
/>

## Syntax

### Classic signature

```typescript
// Type Guard
function filter<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	input: GenericInput,
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => element is GenericOutput
): GenericOutput[]

// Boolean
function filter<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput,
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => boolean
): GenericInput[number][]
```

### Curried signature

```typescript
// Type Guard
function filter<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => element is GenericOutput
): (input: GenericInput) => GenericOutput[]

// Boolean
function filter<
	GenericInput extends readonly unknown[]
>(
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => boolean
): (array: GenericInput) => GenericInput[number][]
```

### Helper parameters

```typescript
interface ArrayFilterParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Parameters

- `input`: The array to filter.
- `predicate`: Function applied to each element. It decides whether the element is kept and can act as a type guard.
- `params.index`: Position of the current element in the original array.
- `params.self`: The whole array (useful for comparing or inspecting a neighbor during filtering).

## Return value

A new array containing only the elements for which the predicate returns `true`. The order is preserved and the initial array remains unchanged.

## See also

- [`map`](/en/v1/api/array/map) - Transforms each element
- [`every`](/en/v1/api/array/every) - Checks whether all elements satisfy a condition

## Sources

- [MDN Web Docs - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
