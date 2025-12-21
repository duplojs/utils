---
outline: [2, 3]
prev:
  text: "spliceReplace"
  link: "/en/v1/api/array/spliceReplace"
next:
  text: "findAndSpliceDelete"
  link: "/en/v1/api/array/findAndSpliceDelete"
---

# findAndReplace

The **`findAndReplace()`** function searches for the first element that satisfies a predicate, replaces it with a new value, and returns the updated array. If no element matches, it returns `undefined`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findAndReplace/tryout.doc.ts"
  majorVersion="v1"
  height="540px"
  :foldLines="[22]"
/>

## Syntax

### Classic signature

```typescript
function findAndReplace<
  GenericArray extends readonly unknown[],
  GenericValue extends AnyValue,
>(
  input: GenericArray,
  predicate: (
    element: GenericArray[number],
    params: { index: number }
  ) => boolean,
  value: GenericValue,
): (GenericArray[number] | GenericValue)[] | undefined
```

### Curried signature

```typescript
function findAndReplace<
  GenericArray extends readonly unknown[],
  GenericValue extends AnyValue,
>(
  predicate: (
    element: GenericArray[number],
    params: { index: number }
  ) => boolean,
  value: GenericValue,
): (input: GenericArray) => (GenericArray[number] | GenericValue)[] | undefined
```

## Parameters

- `input`: Source array.
- `predicate`: Function called for each element with the element and its index. Must return `true` when the element is targeted.
- `value`: New value that replaces the found element.

## Return value

A new array with the element replaced, or `undefined` if no element satisfies the predicate.

## See also

- [`find`](/en/v1/api/array/find) - Finds the first element that satisfies a condition
- [`findAndSpliceReplace`](/en/v1/api/array/findAndSpliceReplace) - Replaces a segment via `splice`
