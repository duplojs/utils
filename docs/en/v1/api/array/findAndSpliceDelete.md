---
outline: [2, 3]
description: "The findAndSpliceDelete() function searches for the first element that satisfies a predicate, then deletes deleteCount elements starting from that index."
prev:
  text: "findAndReplace"
  link: "/en/v1/api/array/findAndReplace"
next:
  text: "findAndSpliceInsert"
  link: "/en/v1/api/array/findAndSpliceInsert"
---

# findAndSpliceDelete

The **`findAndSpliceDelete()`** function searches for the first element that satisfies a predicate, then deletes `deleteCount` elements starting from that index.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findAndSpliceDelete/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function findAndSpliceDelete<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	deleteCount: number
): GenericElement[] | undefined
```

### Curried signature

```typescript
function findAndSpliceDelete<
	GenericElement extends unknown
>(
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	deleteCount: number
): (input: readonly GenericElement[]) => GenericElement[] | undefined
```

## Parameters

- `input`: Array to traverse.
- `predicate`: Function that identifies the element to delete. Receives the element and its index.
- `deleteCount`: Number of elements to remove starting from the found element.

## Return value

A new array with the elements removed or `undefined` if no element satisfies the predicate.

## See also

- [`findAndSpliceInsert`](/en/v1/api/array/findAndSpliceInsert)
- [`findAndSpliceReplace`](/en/v1/api/array/findAndSpliceReplace)

## Sources

- [MDN Web Docs - Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
