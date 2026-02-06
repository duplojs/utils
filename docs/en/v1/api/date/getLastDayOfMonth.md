---
outline: [2, 3]
description: "The getLastDayOfMonth() function returns the last day of the month for a TheDate or SerializedTheDate."
prev:
  text: "getFirstDayOfMonth"
  link: "/en/v1/api/date/getFirstDayOfMonth"
next:
  text: "addYears"
  link: "/en/v1/api/date/addYears"
---

# getLastDayOfMonth

The **`getLastDayOfMonth()`** function returns the last day of the month corresponding to the provided `TheDate` or `SerializedTheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getLastDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getLastDayOfMonth<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): TheDate
```

## Parameters

- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` set to the last day of the same month, normalized to `23:59:59.999` UTC.

## See also

- [`getFirstDayOfMonth`](/en/v1/api/date/getFirstDayOfMonth)
- [`addMonths`](/en/v1/api/date/addMonths)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
