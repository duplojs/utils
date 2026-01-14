---
outline: [2, 3]
prev:
  text: "sort"
  link: "/en/v1/api/date/sort"
next:
  text: "max"
  link: "/en/v1/api/date/max"
---

# sortTimes

The **`sortTimes()`** function sorts an array of `TheTime` according to the desired order (`ASC` or `DSC`) and returns a new sorted array.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/sortTimes/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntax

### Classic signature

```typescript
function sortTimes<
  GenericArray extends readonly TheTime[],
>(
  array: GenericArray,
  type: SortType,
): TheTime[]
```

### Curried signature

```typescript
function sortTimes<
  GenericArray extends readonly TheTime[],
>(
  type: SortType,
): (array: GenericArray) => TheTime[]
```

## Parameters

- `array`: Array of durations in `TheTime` format.
- `type`: Sort order, `"ASC"` for ascending, `"DSC"` for descending.

## Return value

A new array containing the same durations sorted. The original array remains unchanged.

## See also

- [`sort`](/en/v1/api/date/sort) - Sorts dates
- [`max`](/en/v1/api/date/max) - Returns the maximum date of a tuple
