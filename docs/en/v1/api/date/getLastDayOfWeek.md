---
outline: [2, 3]
description: "The getLastDayOfWeek() function returns the Sunday corresponding to the week of the provided TheDate."
prev:
  text: "getFirstDayOfWeek"
  link: "/en/v1/api/date/getFirstDayOfWeek"
next:
  text: "getFirstDayOfMonth"
  link: "/en/v1/api/date/getFirstDayOfMonth"
---

# getLastDayOfWeek

The **`getLastDayOfWeek()`** function returns the Sunday corresponding to the week of the provided `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getLastDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function getLastDayOfWeek(
	input: TheDate
): TheDate
```

## Parameters

- `input`: Target `TheDate`.

## Return value

A `TheDate` representing Sunday of the same week.

## See also

- [`getFirstDayOfWeek`](/en/v1/api/date/getFirstDayOfWeek)
- [`getDayOfWeek`](/en/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
