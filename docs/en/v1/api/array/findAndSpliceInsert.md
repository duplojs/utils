---
outline: [2, 3]
description: "The findAndSpliceInsert() function searches for the first element that satisfies a predicate and inserts an array of elements at that position without deleting the found element."
prev:
  text: "findAndSpliceDelete"
  link: "/en/v1/api/array/findAndSpliceDelete"
next:
  text: "findAndSpliceReplace"
  link: "/en/v1/api/array/findAndSpliceReplace"
---

# findAndSpliceInsert

The **`findAndSpliceInsert()`** function searches for the first element that satisfies a predicate and inserts an array of elements at that position without deleting the found element.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findAndSpliceInsert/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntax

### Classic signature

```typescript
function findAndSpliceInsert<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	elements: GenericElement[]
): GenericElement[] | undefined
```

### Curried signature

```typescript
function findAndSpliceInsert<
	GenericElement extends unknown
>(
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	elements: GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[] | undefined
```

## Parameters

- `input`: Original array.
- `predicate`: Function determining where to insert.
- `elements`: Array of elements to insert before the found element.

## Return value

A new array with the inserted elements or `undefined` if the condition is never satisfied.

## See also

- [`findAndSpliceDelete`](/en/v1/api/array/findAndSpliceDelete)
- [`findAndSpliceReplace`](/en/v1/api/array/findAndSpliceReplace)

## Sources

- [MDN Web Docs - Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
