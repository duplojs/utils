---
outline: [2, 3]
prev:
  text: "sortTimes"
  link: "/en/v1/api/date/sortTimes"
next:
  text: "min"
  link: "/en/v1/api/date/min"
---

# max

The **`max()`** function returns the most recent date of a tuple of `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/max/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntax

```typescript
function max<
  GenericInput extends AnyTuple<TheDate>
>(input: GenericInput): TheDate
```

## Parameters

- `input`: Tuple of dates in `TheDate` format.

## Return value

The maximum date of the tuple, as a `TheDate`.

## See also

- [`min`](/en/v1/api/date/min) - Returns the minimum date
- [`sort`](/en/v1/api/date/sort) - Sorts an array of dates
