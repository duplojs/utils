---
outline: [2, 3]
description: "Adds a number of hours to a TheDate without manipulating milliseconds directly."
prev:
  text: "addDays"
  link: "/en/v1/api/date/addDays"
next:
  text: "addMinutes"
  link: "/en/v1/api/date/addMinutes"
---

# addHours

Adds a number of hours to a `TheDate` without manipulating milliseconds directly.

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
	GenericInput extends TheDate | SerializedTheDate, 
	GenericHour extends number
>(
	input: GenericInput,
	hour: GenericHour
): TheDate
```

### Curried signature

```typescript
function addHours<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericHour extends number
>(
	hour: GenericHour
): (input: GenericInput) => TheDate
```

## Parameters

- `hour`: Number of hours.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved forward by the requested number of hours.

## See also

- [`addMinutes`](/en/v1/api/date/addMinutes)
- [`subtractHours`](/en/v1/api/date/subtractHours)
