---
outline: [2, 3]
description: "Subtracts a number of days from a TheDate."
prev:
  text: "subtractWeeks"
  link: "/en/v1/api/date/subtractWeeks"
next:
  text: "subtractHours"
  link: "/en/v1/api/date/subtractHours"
---

# subtractDays

Subtracts a number of days from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractDays/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractDays<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericDay extends number
>(
	input: GenericInput,
	day: GenericDay
): TheDate
```

### Curried signature

```typescript
function subtractDays<
	GenericInput extends TheDate | SerializedTheDate,
	GenericDay extends number
>(
	day: GenericDay
): (input: GenericInput) => TheDate
```

## Parameters

- `day`: Number of days to remove.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the requested number of days.

## See also

- [`subtractWeeks`](/en/v1/api/date/subtractWeeks)
- [`addDays`](/en/v1/api/date/addDays)
