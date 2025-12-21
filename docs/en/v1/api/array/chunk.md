---
outline: [2, 3]
prev:
  text: "flatMap"
  link: "/en/v1/api/array/flatMap"
next:
  text: "reverse"
  link: "/en/v1/api/array/reverse"
---

# chunk

The **`chunk()`** function splits an array into subarrays of a fixed size and returns the list of these blocks. The last block may be shorter if the size does not divide the array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/chunk/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function chunk<
  GenericInput extends readonly unknown[],
>(
  input: GenericInput,
  size: number,
): GenericInput[]
```

### Curried signature

```typescript
function chunk<
  GenericInput extends readonly unknown[],
>(
  size: number,
): (input: GenericInput) => GenericInput[]
```

## Parameters

- `input`: Array to split.
- `size`: Size of each chunk.

## Return value

A new array containing the created subarrays. The original array is not modified.

## See also

- [`slice`](/en/v1/api/array/slice) - Extracts a portion of an array
- [`flatMap`](/en/v1/api/array/flatMap) - Maps then flattens the result
