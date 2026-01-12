---
outline: [2, 3]
description: "The first() method returns the first element of an array."
prev:
  text: "at"
  link: "/en/v1/api/array/at"
next:
  text: "last"
  link: "/en/v1/api/array/last"
---

# first

The **`first()`** method returns the first element of an array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/first/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function first<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple 
	? GenericInput[0] 
	: GenericInput[number] | undefined
```

## Parameters

- `input`: The array from which to retrieve the first element.

## Return value

The first element of the array, or `undefined` if the array is empty.

## See also

- [`at`](/en/v1/api/array/at) - Returns the element at a given index
- [`last`](/en/v1/api/array/last) - Returns the last element of the array

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
