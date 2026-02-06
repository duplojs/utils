---
outline: [2, 3]
description: "Adds a number of weeks (multiples of 7 days) to a TheDate."
prev:
  text: "addMonths"
  link: "/en/v1/api/date/addMonths"
next:
  text: "addDays"
  link: "/en/v1/api/date/addDays"
---

# addWeeks

Adds a number of weeks (multiples of 7 days) to a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addWeeks/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function addWeeks<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericWeek extends number
>(
	input: GenericInput,
	week: GenericWeek
): TheDate
```

### Curried signature

```typescript
function addWeeks<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericWeek extends number
>(
	week: GenericWeek
): (input: GenericInput) => TheDate
```

## Parameters

- `week`: Number of weeks.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved forward by the requested number of weeks.

## See also

- [`addDays`](/en/v1/api/date/addDays)
- [`subtractWeeks`](/en/v1/api/date/subtractWeeks)
