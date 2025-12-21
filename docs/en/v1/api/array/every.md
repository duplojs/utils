---
outline: [2, 3]
prev:
  text: "findLastIndex"
  link: "/en/v1/api/array/findLastIndex"
next:
  text: "some"
  link: "/en/v1/api/array/some"
---

# every

The **`every()`** method checks whether all elements of an array satisfy a given condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/every/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function every<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayEveryParams<GenericInput>
	) => boolean
): boolean
```

### Curried signature

```typescript
function every<
	GenericInput extends readonly unknown[]
>(
predicate: (
	element: GenericInput[number], 
	params: ArrayEveryParams<GenericInput>
) => boolean
): (input: GenericInput) => boolean
```

### Helper parameters

```typescript
interface ArrayEveryParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Parameters

- `input`: The array to test.
- `predicate`: Predicate function that tests each element. Receives the element, its index, and the whole array.
- `params.index`: Position of the current element.
- `params.self`: The whole array (useful for comparisons or inspecting a neighbor).

## Return value

`true` if all elements satisfy the condition, `false` otherwise.

## See also

- [`some`](/en/v1/api/array/some) - Checks whether at least one element satisfies a condition
- [`find`](/en/v1/api/array/find) - Finds the first element that satisfies a condition

## Sources

- [MDN Web Docs - Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
