---
outline: [2, 3]
description: "The sort() function sorts an array of strings in ascending (ASC) or descending (DSC) order and returns a new array."
prev:
  text: "betweenThan"
  link: "/en/v1/api/string/trimEnd"
next:
  text: "sortCompare"
  link: "/en/v1/api/string/sortCompare"
---

# sort

The **`sort()`** function sorts an array of strings in ascending (`ASC`) or descending (`DSC`) order and returns a new array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/sort/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function sort<
  GenericArray extends readonly string[],
>(
  array: GenericArray,
  type: SortType,
): string[]
```

### Curried signature

```typescript
function sort<
  GenericArray extends readonly string[],
>(
  type: SortType,
): (array: GenericArray) => string[]
```

## Parameters

- `array`: Array of strings to sort.
- `type`: Sort order, `"ASC"` (ascending) or `"DSC"` (descending).

## Return value

A new array of sorted strings. The original array remains unchanged.

## See also

- [`concat`](/en/v1/api/string/concat) - Concatenates multiple strings
- [`split`](/en/v1/api/string/split) - Splits a string into an array
