---
outline: [2, 3]
description: "Rounds a TheDate to the specified unit (unit)."
prev:
  text: "min"
  link: "/en/v1/api/date/min"
next:
  text: "each"
  link: "/en/v1/api/date/each"
---

# round

Rounds a `TheDate` to the specified unit (`unit`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/round/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function round(
	input: TheDate,
	unit?: RoundUnit
): TheDate
```

`RoundUnit` corresponds to `Unit` without the `millisecond` option (day, week, month, year, etc.).

## Parameters

- `input`: Date to round.
- `unit`: Target unit (`day` by default).

## Return value

A `TheDate` rounded to the requested unit.

## See also

- [`each`](/en/v1/api/date/each)
- [`addDays`](/en/v1/api/date/addDays)
