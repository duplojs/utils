---
outline: [2, 3]
description: "The spliceReplace() function replaces a portion of the array with a set of new values. It is an immutable shortcut to splice with deleteCount equal to the number of elements to insert."
prev:
  text: "spliceInsert"
  link: "/en/v1/api/array/spliceInsert"
next:
  text: "findAndReplace"
  link: "/en/v1/api/array/findAndReplace"
---

# spliceReplace

The **`spliceReplace()`** function replaces a portion of the array with a set of new values. It is an immutable shortcut to `splice` with `deleteCount` equal to the number of elements to insert.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/spliceReplace/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntax

### Classic signature

```typescript
function spliceReplace<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	indexFrom: number,
	elements: GenericElement[]
): GenericElement[]
```

### Curried signature

```typescript
function spliceReplace<
	GenericElement extends unknown
>(
	indexFrom: number,
	elements: GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `input`: Source array.
- `indexFrom`: Index of the first element replaced.
- `elements`: Replacement array that overwrites as many elements as its length.

## Return value

A new array where the targeted portion is replaced by `elements`.

## See also

- [`spliceDelete`](/en/v1/api/array/spliceDelete) - Removes values without inserting any
- [`spliceInsert`](/en/v1/api/array/spliceInsert) - Inserts without deleting

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
