---
outline: [2, 3]
description: "Generates an iterator over all dates between two inclusive bounds, following a granularity (Unit)."
prev:
  text: "round"
  link: "/en/v1/api/date/round"
next:
  text: "closestTo"
  link: "/en/v1/api/date/closestTo"
---

# each

Generates an iterator over all dates between two inclusive bounds, following a granularity (`Unit`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/each/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function each(
	range: { start: TheDate; end: TheDate },
	unit?: Unit
): Generator<TheDate>
```

## Parameters

- `range.start` / `range.end`: Bounds of the iteration (`TheDate`).
- `unit`: Unit (`day` by default).

## Return value

A generator that emits each `TheDate` according to the specified unit.

## See also

- [`addDays`](/en/v1/api/date/addDays)
- [`closestTo`](/en/v1/api/date/closestTo)
