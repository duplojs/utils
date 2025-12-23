---
outline: [2, 3]
prev:
  text: "reverse"
  link: "/en/v1/api/array/reverse"
next:
  text: "reduce"
  link: "/en/v1/api/array/reduce"
---

# sort

The **`sort()`** method sorts the elements of an array using a custom comparison function and returns a new sorted array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/sort/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function sort<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	compareFn: (
		first: GenericElement, 
		second: GenericElement
	) => number
): GenericElement[]
```

### Curried signature

```typescript
function sort<
	GenericElement extends unknown
>(
	compareFn: (
		first: GenericElement, 
		second: GenericElement
	) => number
): (input: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `input`: The array to sort.
- `compareFn`: Function that compares two elements. It must return a negative number, zero, or a positive number to define the relative order.

## Return value

A new array containing the same elements sorted according to the provided function. The initial array is never modified.

## See also

- [`reverse`](/en/v1/api/array/reverse) - Reverses the order of the elements

## Sources

- [MDN Web Docs - Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
