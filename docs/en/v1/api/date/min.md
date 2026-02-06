---
outline: [2, 3]
description: "The min() function returns the oldest date of a tuple of TheDate."
prev:
  text: "minTime"
  link: "/en/v1/api/date/minTime"
next:
  text: "round"
  link: "/en/v1/api/date/round"
---

# min

The **`min()`** function returns the oldest date of a tuple of `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/min/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function min<
  GenericInput extends AnyTuple<TheDate | SerializedTheDate>
>(input: GenericInput): TheDate
```

## Parameters

- `input`: Tuple of `TheDate` or `SerializedTheDate` values.

## Return value

The minimum date of the tuple, as a `TheDate`.

## See also

- [`max`](/en/v1/api/date/max) - Returns the maximum date
- [`sort`](/en/v1/api/date/sort) - Sorts an array of dates
