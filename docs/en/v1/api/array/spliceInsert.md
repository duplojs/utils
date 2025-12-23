---
outline: [2, 3]
prev:
  text: "spliceDelete"
  link: "/en/v1/api/array/spliceDelete"
next:
  text: "spliceReplace"
  link: "/en/v1/api/array/spliceReplace"
---

# spliceInsert

The **`spliceInsert()`** function inserts an array of elements at a precise index without deleting existing values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/spliceInsert/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntax

### Classic signature

```typescript
function spliceInsert<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	indexFrom: number,
	elements: GenericElement[]
): GenericElement[]
```

### Curried signature

```typescript
function spliceInsert<
	GenericElement extends unknown
>(
	indexFrom: number,
	elements: GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `input`: Source array.
- `indexFrom`: Position at which to insert the new values.
- `elements`: Array of values to insert.

## Return value

A new array containing the elements added at the requested index, with existing elements shifted.

## See also

- [`spliceDelete`](/en/v1/api/array/spliceDelete) - Deletes a segment
- [`spliceReplace`](/en/v1/api/array/spliceReplace) - Replaces a segment with another

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
