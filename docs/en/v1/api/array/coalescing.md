---
outline: [2, 3]
prev:
  text: "findAndSpliceReplace"
  link: "/en/v1/api/array/findAndSpliceReplace"
next:
  text: "Array"
  link: "/en/v1/api/array/"
---

# coalescing

The **`coalescing()`** function takes a value or an array and normalizes it into an array. If the value is not already an array, it is wrapped in an array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/coalescing/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax
```typescript
function coalescing<
	GenericInput extends AnyValue
>(
	input: GenericInput
): ArrayCoalescing<GenericInput>
```

`ArrayCoalescing` returns an array if the input is not one, or keeps the input array. This guarantees the result is always an array.

## Parameters

- `input`: A value or an array of values.

## Return value

An array. If `input` is already an array, it is returned as is. Otherwise, the value is wrapped in an array.

## See also

- [`find`](/en/v1/api/array/find) - Locates an element matching a predicate
- [`coalesce` (Number)](/en/v1/api/number/) - For other scalar types

## Sources

- [MDN Web Docs - Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
