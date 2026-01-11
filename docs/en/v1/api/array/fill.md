---
outline: [2, 3]
description: "The fill() function fills a portion of an array with a given value and returns a modified copy."
prev:
  text: "set"
  link: "/en/v1/api/array/set"
next:
  text: "fillAll"
  link: "/en/v1/api/array/fillAll"
---

# fill

The **`fill()`** function fills a portion of an array with a given value and returns a modified copy.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/fill/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function fill<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	element: GenericElement, 
	start: number, 
	end: number
): GenericElement[];
```

### Curried signature

```typescript
function fill<
	GenericElement extends unknown
>(
	element: GenericElement, 
	start: number, 
	end: number
): (input: readonly GenericElement[]) => GenericElement[];
```

## Parameters

- `input`: Source array.
- `element`: Value that replaces each element of the targeted section.
- `start`: Start index (inclusive).
- `end`: End index (exclusive).

## Return value

A new array whose section `[start, end)` contains `element`. The rest of the array remains unchanged.

## See also

- [`fillAll`](/en/v1/api/array/fillAll) - Fills the entire array
- [`set`](/en/v1/api/array/set) - Replaces a single index

## Sources

- [MDN Web Docs - Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
