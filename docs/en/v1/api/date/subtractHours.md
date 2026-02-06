---
outline: [2, 3]
description: "Subtracts a number of hours from a TheDate."
prev:
  text: "subtractDays"
  link: "/en/v1/api/date/subtractDays"
next:
  text: "subtractMinutes"
  link: "/en/v1/api/date/subtractMinutes"
---

# subtractHours

Subtracts a number of hours from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractHours/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractHours<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericHour extends number
>(
	input: GenericInput,
	hour: GenericHour
): TheDate
```

### Curried signature

```typescript
function subtractHours<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericHour extends number
>(
	hour: GenericHour
): (input: GenericInput) => TheDate
```

## Parameters

- `hour`: Hours to remove.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the requested number of hours.

## See also

- [`subtractMinutes`](/en/v1/api/date/subtractMinutes)
- [`addHours`](/en/v1/api/date/addHours)
