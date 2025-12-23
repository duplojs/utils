---
outline: [2, 3]
prev:
  text: "concat"
  link: "/en/v1/api/array/concat"
next:
  text: "spliceInsert"
  link: "/en/v1/api/array/spliceInsert"
---

# spliceDelete

The **`spliceDelete()`** function deletes a given number of elements from an index and returns a new cleaned-up array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/spliceDelete/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function spliceDelete<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput,
	indexTo: number,
	deleteCount: number
): GenericInput
```

### Curried signature

```typescript
function spliceDelete<
	GenericInput extends readonly unknown[]
>(
	indexTo: number,
	deleteCount: number
): (input: GenericInput) => GenericInput
```

## Parameters

- `input`: Source array.
- `indexTo`: Index where deletion starts.
- `deleteCount`: Number of elements to remove.

## Return value

A new array without the targeted elements.

## See also

- [`spliceInsert`](/en/v1/api/array/spliceInsert) - Inserts elements at an index
- [`spliceReplace`](/en/v1/api/array/spliceReplace) - Replaces a portion with another

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
