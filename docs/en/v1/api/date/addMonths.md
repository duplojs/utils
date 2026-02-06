---
outline: [2, 3]
description: "The addMonths() function adds a number of months to a TheDate. Year rollovers and leap years are handled automatically."
prev:
  text: "addYears"
  link: "/en/v1/api/date/addYears"
next:
  text: "addWeeks"
  link: "/en/v1/api/date/addWeeks"
---

# addMonths

The **`addMonths()`** function adds a number of months to a `TheDate`. Year rollovers and leap years are handled automatically.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addMonths/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

### Classic signature

```typescript
function addMonths<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMonth extends number
>(
	input: GenericInput,
	month: GenericMonth
): TheDate
```

### Curried signature

```typescript
function addMonths<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMonth extends number
>(
	month: GenericMonth
): (input: GenericInput) => TheDate
```

## Parameters

- `month`: Number of months.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved forward by the given number of months.

## See also

- [`addWeeks`](/en/v1/api/date/addWeeks)
- [`subtractMonths`](/en/v1/api/date/subtractMonths)
