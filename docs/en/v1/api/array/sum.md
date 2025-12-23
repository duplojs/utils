---
outline: [2, 3]
prev:
  text: "group"
  link: "/en/v1/api/array/group"
next:
  text: "minOf"
  link: "/en/v1/api/array/minOf"
---

# sum

The **`sum()`** method adds all the numeric values of an immutable array and returns the total sum as a `number`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/sum/tryout.doc.ts"
  majorVersion="v1"
  height="310px"
/>

## Syntax

```typescript
function sum<
	GenericInput extends readonly number[]
>(
	input: GenericInput
): number
```

## Parameters

- `input`: Array of numbers to add.

## Return value

The total sum of all the elements of the array. When the input is a tuple, TypeScript can infer a literal sum if the compiler is able to compute it.

## See also

- [`reduce`](/en/v1/api/array/reduce) - To implement custom aggregations
- [`group`](/en/v1/api/array/group) - To group and then summarize values

## Sources

- [MDN Web Docs - Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
