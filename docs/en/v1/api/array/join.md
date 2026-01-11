---
outline: [2, 3]
description: "The join() method concatenates the elements of an array of strings, inserting a separator between each of them. It respects the structure of tuples to statically compute the resulting string."
prev:
  text: "reduceRight"
  link: "/en/v1/api/array/reduceRight"
next:
  text: "group"
  link: "/en/v1/api/array/group"
---

# join

The **`join()`** method concatenates the elements of an array of strings, inserting a separator between each of them. It respects the structure of tuples to statically compute the resulting string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/join/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function join<
	GenericInput extends readonly string[], 
	GenericSeparator extends string
>(
	input: GenericInput,
	separator: GenericSeparator
): GenericInput extends AnyTuple ? ComputeResult<GenericInput, GenericSeparator> : string
```

### Curried signature

```typescript
function join<
	GenericInput extends readonly string[], 
	GenericSeparator extends string
>(
	separator: GenericSeparator
): (
	input: GenericInput
) => GenericInput extends AnyTuple ? ComputeResult<GenericInput, GenericSeparator> : string
```

## Parameters

- `input`: The array (or tuple) of strings to concatenate.
- `separator`: The string inserted between each element.

## Return value

A string containing all elements separated by `separator`. When the input is a tuple, the result is known statically (`ComputeResult`).

## See also

- [`reduce`](/en/v1/api/array/reduce) - Aggregates an array with a free state
- [`group`](/en/v1/api/array/group) - Groups multiple values by key

## Sources

- [MDN Web Docs - Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
