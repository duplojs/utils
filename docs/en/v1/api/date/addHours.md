---
outline: [2, 3]
description: "Adds a positive number of hours to a TheDate without manipulating milliseconds directly."
prev:
  text: "addDays"
  link: "/en/v1/api/date/addDays"
next:
  text: "addMinutes"
  link: "/en/v1/api/date/addMinutes"
---

# addHours

Adds a positive number of hours to a `TheDate` without manipulating milliseconds directly.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addHours/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function addHours<
	GenericInput extends TheDate, 
	GenericHour extends number
>(
	input: GenericInput,
	hour: PositiveNumber<GenericHour>
): TheDate
```

### Curried signature

```typescript
function addHours<
	GenericInput extends TheDate, 
	GenericHour extends number
>(
	hour: PositiveNumber<GenericHour>
): (input: GenericInput) => TheDate
```

## Parameters

- `hour`: Strictly positive number of hours.
- `input`: `TheDate` to shift.

## Return value

A `TheDate` moved forward by the requested number of hours.

## See also

- [`addMinutes`](/en/v1/api/date/addMinutes)
- [`subtractHours`](/en/v1/api/date/subtractHours)
