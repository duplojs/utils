---
outline: [2, 3]
description: "The getFirstDayOfMonth() function returns the first day of the month for a TheDate or SerializedTheDate."
prev:
  text: "getLastDayOfWeek"
  link: "/en/v1/api/date/getLastDayOfWeek"
next:
  text: "getLastDayOfMonth"
  link: "/en/v1/api/date/getLastDayOfMonth"
---

# getFirstDayOfMonth

The **`getFirstDayOfMonth()`** function returns the first day of the month (as `TheDate`) for the provided date input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getFirstDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getFirstDayOfMonth<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): TheDate
```

## Parameters

- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` set to the first day of the month (at midnight UTC).

## See also

- [`getLastDayOfMonth`](/en/v1/api/date/getLastDayOfMonth)
- [`getDayOfMonth`](/en/v1/api/date/getDayOfMonth)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
