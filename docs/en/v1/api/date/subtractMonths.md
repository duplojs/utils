---
outline: [2, 3]
description: "Subtracts a positive number of months from a TheDate."
prev:
  text: "subtractYears"
  link: "/en/v1/api/date/subtractYears"
next:
  text: "subtractWeeks"
  link: "/en/v1/api/date/subtractWeeks"
---

# subtractMonths

Subtracts a positive number of months from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMonths/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function subtractMonths<
	GenericInput extends TheDate, 
	GenericMonth extends number
>(
	input: GenericInput,
	month: PositiveNumber<GenericMonth>
): TheDate
```

### Curried signature

```typescript
function subtractMonths<
	GenericInput extends TheDate, 
	GenericMonth extends number
>(
	month: PositiveNumber<GenericMonth>
): (input: GenericInput) => TheDate
```

## Parameters

- `month`: Number of months to subtract.
- `input`: Source date.

## Return value

A `TheDate` moved back by the given number of months.

## See also

- [`addMonths`](/en/v1/api/date/addMonths)
- [`subtractWeeks`](/en/v1/api/date/subtractWeeks)
