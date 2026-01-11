---
outline: [2, 3]
description: "The some() method checks whether at least one element of an array satisfies a given condition."
prev:
  text: "every"
  link: "/en/v1/api/array/every"
next:
  text: "is"
  link: "/en/v1/api/array/is"
---

# some

The **`some()`** method checks whether at least one element of an array satisfies a given condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/some/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function some<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArraySomeParams<GenericInput>
	) => boolean
): boolean
```

### Curried signature

```typescript
function some<
	GenericInput extends readonly unknown[]
>(
predicate: (
	element: GenericInput[number], 
	params: ArraySomeParams<GenericInput>
) => boolean
): (array: GenericInput) => boolean
```

### Helper parameters

```typescript
interface ArraySomeParams<
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
- `params.self`: The whole array (useful to compare the position or access a neighbor).

## Return value

`true` if at least one element satisfies the condition, `false` otherwise.

## See also

- [`every`](/en/v1/api/array/every) - Checks whether all elements satisfy a condition
- [`find`](/en/v1/api/array/find) - Finds the first element that satisfies a condition

## Sources

- [MDN Web Docs - Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
