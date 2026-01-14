---
outline: [2, 3]
description: "Adds a positive number of days to a TheDate."
prev:
  text: "addWeeks"
  link: "/en/v1/api/date/addWeeks"
next:
  text: "addHours"
  link: "/en/v1/api/date/addHours"
---

# addDays

Adds a positive number of days to a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addDays/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function addDays<
	GenericInput extends TheDate,
	GenericDay extends number
>(
	input: GenericInput,
	day: PositiveNumber<GenericDay>
): TheDate
```

### Curried signature

```typescript
function addDays<
	GenericInput extends TheDate,
	GenericDay extends number
>(
	day: PositiveNumber<GenericDay>
): (input: GenericInput) => TheDate
```

## Parameters

- `day`: Strictly positive number of days.
- `input`: `TheDate` value.

## Return value

A `TheDate` moved forward by the given number of days.

## See also

- [`addWeeks`](/en/v1/api/date/addWeeks)
- [`subtractDays`](/en/v1/api/date/subtractDays)
