---
outline: [2, 3]
description: "The select() function is close to [filter](/en/v1/api/array/filter) but also lets you transform the kept elements. It is especially useful to get type discrimination on the output side without having to write an explicit type guard (the output is inferred from the values passed to select())."
prev:
  text: "filter"
  link: "/en/v1/api/array/filter"
next:
  text: "slice"
  link: "/en/v1/api/array/slice"
---

# select

The **`select()`** function is close to [`filter`](/en/v1/api/array/filter) but also lets you **transform** the kept elements. It is especially useful to get **type discrimination** on the output side without having to write an explicit type guard (the output is inferred from the values passed to `select()`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/select/tryout.doc.ts"
  majorVersion="v1"
  height="985px"
  :foldLines="[8]"
/>

## Syntax

### Classic signature

```typescript
function select<
	GenericInput extends readonly unknown[],
	GenericSelect extends ArraySelectSelect,
>(
	input: GenericInput,
	theFunction: (
		params: ArraySelectParams<GenericInput>
	) => GenericSelect | ArraySelectSkip,
): GenericSelect["-select"][]
```

### Curried signature

```typescript
function select<
	GenericInput extends readonly unknown[],
	GenericSelect extends ArraySelectSelect,
>(
	theFunction: (
		params: ArraySelectParams<GenericInput>
	) => GenericSelect | ArraySelectSkip,
): (input: GenericInput) => GenericSelect["-select"][]
```

### Helper parameters

```typescript
interface ArraySelectParams<
	GenericInputArray extends readonly unknown[],
> {
	element: GenericInputArray[number];
	index: number;
	self: GenericInputArray;
	skip(): ArraySelectSkip;
	select<GenericOutput extends unknown = unknown>(
		output: GenericOutput
	): ArraySelectSelect<GenericOutput>;
}
```

## Parameters

- `input`: The array to iterate over.
- `theFunction`: Function called for each element.
- `params.element`: The current element.
- `params.index`: Index of the current element.
- `params.self`: The whole array.
- `params.skip()`: Skips the element (adds nothing to the result).
- `params.select(output)`: Keeps the element by adding `output` to the result.

## Return value

A new array containing only the values passed to `select()`, in the same order as the iteration. The output typing is inferred as a union of the selected values.

## See also

- [`filter`](/en/v1/api/array/filter) - Keeps elements (without transformation)
- [`map`](/en/v1/api/array/map) - Transforms each element (without filtering)
- [`flatMap`](/en/v1/api/array/flatMap) - Transforms then flattens the result
