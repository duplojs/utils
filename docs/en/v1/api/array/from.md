---
outline: [2, 3]
description: "The from() method creates an array from an iterable, an array-like object, or an async iterable."
prev:
  text: "Array"
  link: "/en/v1/api/array/"
next:
  text: "toTuple"
  link: "/en/v1/api/array/toTuple"
---

# from

The **`from()`** method creates an array from an iterable, an array-like object, or an async iterable.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/from/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
  :foldLines="[5,14,28]"
/>

## Syntax

```typescript
function from<
	const GenericInput extends (ArrayLike<unknown> | Iterable<unknown> | AsyncIterable<unknown>)
>(
	input: GenericInput
): GenericInput extends AsyncIterable<infer InferredValue> 
	? Promise<InferredValue[]> 
	: GenericInput extends Iterable<infer InferredValue> 
		? InferredValue[] 
		: GenericInput extends ArrayLike<infer InferredValue> 
			? InferredValue[] 
			: never
```

## Parameters

- `input`: An iterable, an array-like object, or an async iterable to convert into an array.

## Return value

An array containing all elements from the iterable. If the input is an async iterable, returns a Promise resolved with an array.

## See also

- [`toTuple`](/en/v1/api/array/toTuple) - Converts an array to a tuple with strict typing

## Sources

- [MDN Web Docs - Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
