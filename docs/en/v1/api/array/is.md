---
outline: [2, 3]
description: "The is() method checks whether a value is an array (type guard)."
prev:
  text: "some"
  link: "/en/v1/api/array/some"
next:
  text: "map"
  link: "/en/v1/api/array/map"
---

# is

The **`is()`** method checks whether a value is an array (type guard).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/is/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function is<
	GenericInput extends unknown
>(
	input: GenericInput
): input is Extract<GenericValue, readonly any[]>
```

## Parameters

- `input`: The value to test.

## Return value

`true` if the value is an array, `false` otherwise. Narrows the type to an array when `true`.

## See also

- [`from`](/en/v1/api/array/from) - Creates an array from an iterable

## Sources

- [MDN Web Docs - Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
