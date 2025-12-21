---
outline: [2, 3]
prev:
  text: "findAndSpliceInsert"
  link: "/en/v1/api/array/findAndSpliceInsert"
next:
  text: "coalescing"
  link: "/en/v1/api/array/coalescing"
---

# findAndSpliceReplace

The **`findAndSpliceReplace()`** function looks for an element with a predicate and replaces it, along with the following elements, with an array of new values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findAndSpliceReplace/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntax

### Classic signature

```typescript
function findAndSpliceReplace<
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
function findAndSpliceReplace<
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

- `input`: Array to modify.
- `predicate`: Condition for finding the position to replace.
- `elements`: Values that will replace those present from the found index onward. Their count determines how many elements are overwritten.

## Return value

A new array with the replacements, or `undefined` if no element is found.

## See also

- [`findAndSpliceDelete`](/en/v1/api/array/findAndSpliceDelete)
- [`findAndSpliceInsert`](/en/v1/api/array/findAndSpliceInsert)

## Sources

- [MDN Web Docs - Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
