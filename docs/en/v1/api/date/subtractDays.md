---
outline: [2, 3]
prev:
  text: "subtractWeeks"
  link: "/en/v1/api/date/subtractWeeks"
next:
  text: "subtractHours"
  link: "/en/v1/api/date/subtractHours"
---

# subtractDays

Subtracts a positive number of days from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractDays/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function subtractDays<
	GenericInput extends TheDate, 
	GenericDay extends number
>(
	input: GenericInput,
	day: PositiveNumber<GenericDay>
): TheDate
```

### Curried signature

```typescript
function subtractDays<
	GenericInput extends TheDate,
	GenericDay extends number
>(
	day: PositiveNumber<GenericDay>
): (input: GenericInput) => TheDate
```

## Parameters

- `day`: Number of days to remove.
- `input`: Source date.

## Return value

A `TheDate` moved back by the requested number of days.

## See also

- [`subtractWeeks`](/en/v1/api/date/subtractWeeks)
- [`addDays`](/en/v1/api/date/addDays)
