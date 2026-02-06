---
outline: [2, 3]
description: "Subtracts a number of months from a TheDate."
prev:
  text: "subtractYears"
  link: "/en/v1/api/date/subtractYears"
next:
  text: "subtractWeeks"
  link: "/en/v1/api/date/subtractWeeks"
---

# subtractMonths

Subtracts a number of months from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMonths/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractMonths<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMonth extends number
>(
	input: GenericInput,
	month: GenericMonth
): TheDate
```

### Curried signature

```typescript
function subtractMonths<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMonth extends number
>(
	month: GenericMonth
): (input: GenericInput) => TheDate
```

## Parameters

- `month`: Number of months to subtract.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the given number of months.

## See also

- [`addMonths`](/en/v1/api/date/addMonths)
- [`subtractWeeks`](/en/v1/api/date/subtractWeeks)
