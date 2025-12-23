---
outline: [2, 3]
prev:
  text: "addYears"
  link: "/en/v1/api/date/addYears"
next:
  text: "addWeeks"
  link: "/en/v1/api/date/addWeeks"
---

# addMonths

The **`addMonths()`** function adds a positive number of months to a `TheDate`. Year rollovers and leap years are handled automatically.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addMonths/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number
>(
	input: GenericInput,
	month: PositiveNumber<GenericMonth>
): TheDate
```

### Curried signature

```typescript
function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number
>(
	month: PositiveNumber<GenericMonth>
): (input: GenericInput) => TheDate
```

## Parameters

- `month`: Strictly positive number of months.
- `input`: Date to adjust (classic signature).

## Return value

A `TheDate` moved forward by the given number of months.

## See also

- [`addWeeks`](/en/v1/api/date/addWeeks)
- [`subtractMonths`](/en/v1/api/date/subtractMonths)
