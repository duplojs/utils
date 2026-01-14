---
outline: [2, 3]
description: "The concat() function merges multiple arrays into a new continuous array."
prev:
  text: "shift"
  link: "/en/v1/api/array/shift"
next:
  text: "spliceDelete"
  link: "/en/v1/api/array/spliceDelete"
---

# concat

The **`concat()`** function merges multiple arrays into a new continuous array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/concat/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

### Classic signature

```typescript
function concat<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	elements: readonly GenericElement[],
	...elementsRest: readonly GenericElement[][]
): GenericElement[]
```

### Curried signature

```typescript
function concat<
	GenericElement extends unknown
>(
	elements: readonly GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `input`: Base array.
- `elements`, `...elementsRest`: Additional arrays to chain together.

## Return value

A new array containing all elements in the order the arrays were provided.

## See also

- [`push`](/en/v1/api/array/push) - Adds values individually
- [`spliceInsert`](/en/v1/api/array/spliceInsert) - Inserts at a given position

## Sources

- [MDN Web Docs - Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
