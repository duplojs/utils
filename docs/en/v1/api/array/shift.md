---
outline: [2, 3]
description: "The shift() function removes the first element of an array and returns a shortened copy. For tuples, the type is updated exactly thanks to ShiftTuple."
prev:
  text: "unshift"
  link: "/en/v1/api/array/unshift"
next:
  text: "concat"
  link: "/en/v1/api/array/concat"
---

# shift

The **`shift()`** function removes the first element of an array and returns a shortened copy. For tuples, the type is updated exactly thanks to `ShiftTuple`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/shift/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function shift<
	const GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple ? ShiftTuple<GenericInput> : GenericInput
```

## Parameters

- `input`: Array from which to remove the first element.

## Return value

A new array without its first element.

## See also

- [`unshift`](/en/v1/api/array/unshift) - Adds elements to the head
- [`pop`](/en/v1/api/array/pop) - Removes the final element

## Sources

- [MDN Web Docs - Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
