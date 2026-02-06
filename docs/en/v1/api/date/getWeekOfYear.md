---
outline: [2, 3]
description: "The getWeekOfYear() function calculates the ISO 8601 week number (1–53) for a TheDate, with an optional timezone."
prev:
  text: "getDayOfWeek"
  link: "/en/v1/api/date/getDayOfWeek"
next:
  text: "getDayOfYear"
  link: "/en/v1/api/date/getDayOfYear"
---

# getWeekOfYear

The **`getWeekOfYear()`** function calculates the ISO 8601 week number (1–53) for a `TheDate`, with an optional timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getWeekOfYear/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getWeekOfYear<
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

An integer between 1 and 53 corresponding to the ISO week.

## See also

- [`getDayOfYear`](/en/v1/api/date/getDayOfYear)
- [`getDayOfWeek`](/en/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
