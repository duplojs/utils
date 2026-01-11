---
outline: [2, 3]
description: "The getDayOfYear() function returns the day of the year (1–366) for a TheDate, taking an optional timezone into account."
prev:
  text: "getWeekOfYear"
  link: "/en/v1/api/date/getWeekOfYear"
next:
  text: "getHour"
  link: "/en/v1/api/date/getHour"
---

# getDayOfYear

The **`getDayOfYear()`** function returns the day of the year (1–366) for a `TheDate`, taking an optional timezone into account.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getDayOfYear/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function getDayOfYear<
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

An integer between 1 and 366.

## See also

- [`getWeekOfYear`](/en/v1/api/date/getWeekOfYear)
- [`getDayOfMonth`](/en/v1/api/date/getDayOfMonth)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
