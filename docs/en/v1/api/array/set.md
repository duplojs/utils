---
outline: [2, 3]
description: "The set() function replaces the value at a given index and returns a new array without modifying the original."
prev:
  text: "maxElements"
  link: "/en/v1/api/array/maxElements"
next:
  text: "fill"
  link: "/en/v1/api/array/fill"
---

# set

The **`set()`** function replaces the value at a given index and returns a new array without modifying the original.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/set/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

### Classic signature

```typescript
function set<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	index: number, 
	element: GenericElement
): GenericElement[];
```

### Curried signature

```typescript
function set<
	GenericElement extends unknown
>(
	index: number, 
	element: GenericElement
): (input: readonly GenericElement[]) => GenericElement[];
```

## Parameters

- `input`: The source array.
- `index`: The index to replace (indexes are normalized with a modulo on length, so out-of-range values target an existing position).
- `element`: The new value.

## Return value

A new array whose targeted element (after index normalization) matches `element`. Other elements are copied as is.

## See also

- [`fill`](/en/v1/api/array/fill) - Fills a portion of the array
- [`copyWithin`](/en/v1/api/array/copyWithin) - Copies a segment within the same array

## Sources

- [MDN Web Docs - Array.prototype.with()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)
