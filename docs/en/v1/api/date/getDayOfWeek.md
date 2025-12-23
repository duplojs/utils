---
outline: [2, 3]
prev:
  text: "getDayOfMonth"
  link: "/en/v1/api/date/getDayOfMonth"
next:
  text: "getWeekOfYear"
  link: "/en/v1/api/date/getWeekOfYear"
---

# getDayOfWeek

The **`getDayOfWeek()`** function returns the day of the week of a `TheDate` (1 = Monday, 7 = Sunday) taking an optional timezone into account.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function getDayOfWeek<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Parameters

- `input`: Target `TheDate`.
- `timezone`: Timezone (optional).

## Return value

An integer from 1 to 7 representing the ISO weekday.

## See also

- [`getWeekOfYear`](/en/v1/api/date/getWeekOfYear)
- [`getFirstDayOfWeek`](/en/v1/api/date/getFirstDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
