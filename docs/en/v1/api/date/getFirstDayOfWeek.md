---
outline: [2, 3]
description: "The getFirstDayOfWeek() function returns the Monday of the week for a TheDate or SerializedTheDate."
prev:
  text: "getMilliseconds"
  link: "/en/v1/api/date/getMilliseconds"
next:
  text: "getLastDayOfWeek"
  link: "/en/v1/api/date/getLastDayOfWeek"
---

# getFirstDayOfWeek

The **`getFirstDayOfWeek()`** function returns the Monday corresponding to the week of the provided `TheDate` or `SerializedTheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getFirstDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getFirstDayOfWeek<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): TheDate
```

## Parameters

- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` representing Monday of the same week, normalized to `00:00:00.000` UTC.

## See also

- [`getLastDayOfWeek`](/en/v1/api/date/getLastDayOfWeek)
- [`getDayOfWeek`](/en/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
