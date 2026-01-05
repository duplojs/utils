---
outline: [2, 3]
description: "The push() function adds one or more elements to the end of the array and returns a new instance, leaving the input intact."
prev:
  text: "insert"
  link: "/en/v1/api/array/insert"
next:
  text: "pop"
  link: "/en/v1/api/array/pop"
---

# push

The **`push()`** function adds one or more elements to the end of the array and returns a new instance, leaving the input intact.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/push/tryout.doc.ts"
  majorVersion="v1"
  height="270px"
/>

## Syntax

### Classic signature

```typescript
function push<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	element: NoInfer<GenericElement>,
	...elements: NoInfer<GenericElement>[]
): GenericElement[]
```

### Curried signature

```typescript
function push<
	GenericElement extends unknown
>(
	element: NoInfer<GenericElement>
): (input: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `input`: Source array.
- `element`, `...elements`: Values to add at the end.

## Return value

A new array containing all original elements followed by the added elements.

## See also

- [`unshift`](/en/v1/api/array/unshift) - Adds to the beginning of the array
- [`concat`](/en/v1/api/array/concat) - Merges multiple arrays

## Sources

- [MDN Web Docs - Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
