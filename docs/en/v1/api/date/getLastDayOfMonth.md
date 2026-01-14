---
outline: [2, 3]
description: "The getLastDayOfMonth() function returns the last day of the month corresponding to the provided TheDate."
prev:
  text: "getFirstDayOfMonth"
  link: "/en/v1/api/date/getFirstDayOfMonth"
next:
  text: "addYears"
  link: "/en/v1/api/date/addYears"
---

# getLastDayOfMonth

The **`getLastDayOfMonth()`** function returns the last day of the month corresponding to the provided `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getLastDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getLastDayOfMonth(
	input: TheDate
): TheDate
```

## Parameters

- `input`: Target `TheDate`.

## Return value

A `TheDate` set to the last day of the same month (midnight UTC).

## See also

- [`getFirstDayOfMonth`](/en/v1/api/date/getFirstDayOfMonth)
- [`addMonths`](/en/v1/api/date/addMonths)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
