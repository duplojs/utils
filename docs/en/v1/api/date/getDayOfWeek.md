---
outline: [2, 3]
description: "The getDayOfWeek() function returns the weekday number (0 = Sunday, 6 = Saturday) for a TheDate or SerializedTheDate."
prev:
  text: "getDayOfMonth"
  link: "/en/v1/api/date/getDayOfMonth"
next:
  text: "getWeekOfYear"
  link: "/en/v1/api/date/getWeekOfYear"
---

# getDayOfWeek

The **`getDayOfWeek()`** function returns the weekday number (`0` = Sunday, `6` = Saturday) for a `TheDate` or `SerializedTheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getDayOfWeek<
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

An integer from 0 to 6 (`0` = Sunday, `1` = Monday, ..., `6` = Saturday).

## See also

- [`getWeekOfYear`](/en/v1/api/date/getWeekOfYear)
- [`getFirstDayOfWeek`](/en/v1/api/date/getFirstDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
