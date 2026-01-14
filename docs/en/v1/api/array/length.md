---
outline: [2, 3]
description: "The length() method returns the length of an array."
prev:
  text: "toTuple"
  link: "/en/v1/api/array/toTuple"
next:
  text: "lengthEqual"
  link: "/en/v1/api/array/lengthEqual"
---

# length

The **`length()`** method returns the length of an array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/length/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function length<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput["length"]
```

## Parameters

- `input`: The array whose length you want to obtain.

## Return value

The length of the array with precise typing.

## See also

- [`at`](/en/v1/api/array/at) - Returns the element at an index

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
