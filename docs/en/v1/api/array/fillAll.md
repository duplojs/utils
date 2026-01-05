---
outline: [2, 3]
description: "The fillAll() function replaces all the elements of an array with a single value and returns the result without altering the input."
prev:
  text: "fill"
  link: "/en/v1/api/array/fill"
next:
  text: "copyWithin"
  link: "/en/v1/api/array/copyWithin"
---

# fillAll

The **`fillAll()`** function replaces all the elements of an array with a single value and returns the result without altering the input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/fillAll/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function fillAll<
	GenericElement extends unknown 
>(
	input: readonly unknown[],
	element: GenericElement
): GenericElement[]
```

### Curried signature

```typescript
function fillAll<
	GenericElement extends unknown
>(
	element: GenericElement
): (input: readonly unknown[]) => GenericElement[]
```

## Parameters

- `input`: Source array.
- `element`: Value to copy at each position (the output type is based on this value).

## Return value

A new array where all elements equal `element`, typed from that value. The initial array remains unchanged.

## See also

- [`fill`](/en/v1/api/array/fill) - Limits filling to a section
- [`set`](/en/v1/api/array/set) - Changes a single specific index

## Sources

- [MDN Web Docs - Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
