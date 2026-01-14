---
outline: [2, 3]
description: "The isLastIndex() function indicates whether an index corresponds to the last element of an array. It is curried to fit easily into compositions or reductions."
prev:
  text: "lastIndexOf"
  link: "/en/v1/api/array/lastIndexOf"
next:
  text: "find"
  link: "/en/v1/api/array/find"
---

# isLastIndex

The **`isLastIndex()`** function indicates whether an index corresponds to the last element of an array. It is curried to fit easily into compositions or reductions.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/isLastIndex/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntax

### Classic signature

```typescript
function isLastIndex<
  GenericInput extends readonly unknown[],
>(
  input: GenericInput,
  index: number,
): boolean
```

### Curried signature

```typescript
function isLastIndex<
  GenericInput extends readonly unknown[],
>(
  index: number,
): (input: GenericInput) => boolean
```

## Parameters

- `input`: Target array.
- `index`: Index to test.

## Return value

`true` if `index` points to the last element of the array, `false` otherwise.

## See also

- [`lastIndexOf`](/en/v1/api/array/lastIndexOf) - Gives the index of the last occurrence
- [`length`](/en/v1/api/array/length) - Returns the size of an array
- [`reduce`](/en/v1/api/array/reduce) - Reduces an array to one value
