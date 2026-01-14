---
outline: [2, 3]
description: "The getFirstDayOfMonth() function returns the first day of the month (in TheDate format) for the given date."
prev:
  text: "getLastDayOfWeek"
  link: "/en/v1/api/date/getLastDayOfWeek"
next:
  text: "getLastDayOfMonth"
  link: "/en/v1/api/date/getLastDayOfMonth"
---

# getFirstDayOfMonth

The **`getFirstDayOfMonth()`** function returns the first day of the month (in `TheDate` format) for the given date.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getFirstDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getFirstDayOfMonth(
	input: TheDate
): TheDate
```

## Parameters

- `input`: `TheDate` for which to find the first day of the month.

## Return value

A `TheDate` set to the first day of the month (at midnight UTC).

## See also

- [`getLastDayOfMonth`](/en/v1/api/date/getLastDayOfMonth)
- [`getDayOfMonth`](/en/v1/api/date/getDayOfMonth)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
