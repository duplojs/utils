---
outline: [2, 3]
description: "The includes() method checks whether an array contains a given element."
prev:
  text: "lengthEqual"
  link: "/en/v1/api/array/lengthEqual"
next:
  text: "notIncludes"
  link: "/en/v1/api/array/notIncludes"
---

# includes

The **`includes()`** method checks whether an array contains a given element.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/includes/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

### Classic signature

```typescript
function includes<
	GenericArrayValue extends unknown
>(
	input: readonly GenericArrayValue[], 
	value: NoInfer<GenericArrayValue>
): boolean
```

### Curried signature

```typescript
function includes<
	GenericArrayValue extends unknown
>(
	value: NoInfer<GenericArrayValue>
): (input: readonly GenericArrayValue[]) => boolean
```

## Parameters

- `input`: The array to search in.
- `value`: The value to search for in the array.

## Return value

`true` if the array contains the value, `false` otherwise.

## See also

- [`indexOf`](/en/v1/api/array/indexOf) - Returns the index of the first occurrence
- [`find`](/en/v1/api/array/find) - Finds the first element that satisfies a condition

## Sources

- [MDN Web Docs - Array.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
