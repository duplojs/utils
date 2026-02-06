---
outline: [2, 3]
description: "The getDayOfMonth() function returns the day of the month (1–31) for a TheDate with an optional timezone."
prev:
  text: "getMonth"
  link: "/en/v1/api/date/getMonth"
next:
  text: "getDayOfWeek"
  link: "/en/v1/api/date/getDayOfWeek"
---

# getDayOfMonth

The **`getDayOfMonth()`** function returns the day of the month (1–31) for a `TheDate` with an optional timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getDayOfMonth<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	timezone: Timezone = "UTC"
): number
```

## Parameters

- `input`: `TheDate` or `SerializedTheDate`.
- `timezone`: IANA timezone. Default: `"UTC"`.

## Return value

Day of the month (1–31) in the given timezone.

## See also

- [`getDayOfWeek`](/en/v1/api/date/getDayOfWeek)
- [`getFirstDayOfMonth`](/en/v1/api/date/getFirstDayOfMonth)

## Sources

- [MDN Web Docs - Date.prototype.getUTCDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)
