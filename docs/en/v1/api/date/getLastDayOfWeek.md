---
outline: [2, 3]
description: "The getLastDayOfWeek() function returns the Sunday of the week for a TheDate or SerializedTheDate."
prev:
  text: "getFirstDayOfWeek"
  link: "/en/v1/api/date/getFirstDayOfWeek"
next:
  text: "getFirstDayOfMonth"
  link: "/en/v1/api/date/getFirstDayOfMonth"
---

# getLastDayOfWeek

The **`getLastDayOfWeek()`** function returns the Sunday corresponding to the week of the provided `TheDate` or `SerializedTheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getLastDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getLastDayOfWeek<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): TheDate
```

## Parameters

- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` representing Sunday of the same week, normalized to `23:59:59.999` UTC.

## See also

- [`getFirstDayOfWeek`](/en/v1/api/date/getFirstDayOfWeek)
- [`getDayOfWeek`](/en/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
