---
outline: [2, 3]
description: "The last() method returns the last element of an array."
prev:
  text: "first"
  link: "/en/v1/api/array/first"
next:
  text: "length"
  link: "/en/v1/api/array/length"
---

# last

The **`last()`** method returns the last element of an array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/last/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function last<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends readonly [...any[], infer InferredValue] 
	? InferredValue 
	: GenericInput[number] | undefined
```

## Parameters

- `input`: The array from which to retrieve the last element.

## Return value

The last element of the array, or `undefined` if the array is empty.

## See also

- [`at`](/en/v1/api/array/at) - Returns the element at a given index
- [`first`](/en/v1/api/array/first) - Returns the first element of the array

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
