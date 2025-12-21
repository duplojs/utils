---
outline: [2, 3]
prev:
  text: "pop"
  link: "/en/v1/api/array/pop"
next:
  text: "shift"
  link: "/en/v1/api/array/shift"
---

# unshift

The **`unshift()`** function adds one or more elements to the beginning of the array and returns an enriched copy.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/unshift/tryout.doc.ts"
  majorVersion="v1"
  height="270px"
/>

## Syntax

### Classic signature

```typescript
function unshift<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	element: NoInfer<GenericElement>,
	...elements: NoInfer<GenericElement>[]
): GenericElement[]
```

### Curried signature

```typescript
function unshift<
	GenericElement extends unknown
>(
	element: NoInfer<GenericElement>
): (input: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `input`: Source array.
- `element`, `...elements`: Values inserted at the beginning (in the order provided).

## Return value

A new array whose prefix matches the added values, followed by the former content.

## See also

- [`shift`](/en/v1/api/array/shift) - Removes the first element
- [`push`](/en/v1/api/array/push) - Adds at the end of the array

## Sources

- [MDN Web Docs - Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
