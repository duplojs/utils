---
outline: [2, 3]
description: "The sort() function sorts an array of TheDate according to the desired order (ASC or DSC) and returns a new sorted array."
prev:
  text: "betweenThanTime"
  link: "/en/v1/api/date/betweenThanTime"
next:
  text: "sortTimes"
  link: "/en/v1/api/date/sortTimes"
---

# sort

The **`sort()`** function sorts an array of `TheDate` according to the desired order (`ASC` or `DSC`) and returns a new sorted array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/sort/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

### Classic signature

```typescript
function sort<
  GenericArray extends readonly TheDate[],
>(
  array: GenericArray,
  type: SortType,
): TheDate[]
```

### Curried signature

```typescript
function sort<
  GenericArray extends readonly TheDate[],
>(
  type: SortType,
): (array: GenericArray) => TheDate[]
```

## Parameters

- `array`: Array of dates in `TheDate` format.
- `type`: Sort order, `"ASC"` for ascending, `"DSC"` for descending.

## Return value

A new array containing the same dates sorted. The original array remains unchanged.

## See also

- [`max`](/en/v1/api/date/max) - Returns the maximum date of a tuple
- [`min`](/en/v1/api/date/min) - Returns the minimum date of a tuple
- [`between`](/en/v1/api/date/between) - Checks membership in an interval
