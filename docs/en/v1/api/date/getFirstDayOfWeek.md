---
outline: [2, 3]
prev:
  text: "getMilliseconds"
  link: "/en/v1/api/date/getMilliseconds"
next:
  text: "getLastDayOfWeek"
  link: "/en/v1/api/date/getLastDayOfWeek"
---

# getFirstDayOfWeek

The **`getFirstDayOfWeek()`** function returns the Monday corresponding to the week of the provided `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getFirstDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function getFirstDayOfWeek(
	input: TheDate
): TheDate
```

## Parameters

- `input`: `TheDate` whose first day of the week is desired.

## Return value

A `TheDate` representing Monday of the same week.

## See also

- [`getLastDayOfWeek`](/en/v1/api/date/getLastDayOfWeek)
- [`getDayOfWeek`](/en/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
