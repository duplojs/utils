---
outline: [2, 3]
description: "Subtracts a number of weeks from a TheDate."
prev:
  text: "subtractMonths"
  link: "/en/v1/api/date/subtractMonths"
next:
  text: "subtractDays"
  link: "/en/v1/api/date/subtractDays"
---

# subtractWeeks

Subtracts a number of weeks from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractWeeks/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number
>(
	input: GenericInput,
	week: GenericWeek
): TheDate
```

### Curried signature

```typescript
function subtractWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number
>(
	week: GenericWeek
): (input: GenericInput) => TheDate
```

## Parameters

- `week`: Number of weeks to remove.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the requested number of weeks.

## See also

- [`subtractDays`](/en/v1/api/date/subtractDays)
- [`addWeeks`](/en/v1/api/date/addWeeks)
