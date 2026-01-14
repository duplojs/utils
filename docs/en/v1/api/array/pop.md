---
outline: [2, 3]
description: "The pop() function returns a new array without its last element. Tuples are updated exactly (via PopTuple)."
prev:
  text: "push"
  link: "/en/v1/api/array/push"
next:
  text: "unshift"
  link: "/en/v1/api/array/unshift"
---

# pop

The **`pop()`** function returns a new array without its last element. Tuples are updated exactly (via `PopTuple`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/pop/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function pop<
	const GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple ? PopTuple<GenericInput> : GenericInput
```

## Parameters

- `input`: Array from which to remove the last element.

## Return value

A new array deprived of its last element. The other values are copied identically.

## See also

- [`push`](/en/v1/api/array/push) - Adds elements at the end of the array
- [`shift`](/en/v1/api/array/shift) - Removes the first element

## Sources

- [MDN Web Docs - Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
