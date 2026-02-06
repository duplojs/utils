---
outline: [2, 3]
description: "Subtracts a number of years from a TheDate."
prev:
  text: "addTime"
  link: "/en/v1/api/date/addTime"
next:
  text: "subtractMonths"
  link: "/en/v1/api/date/subtractMonths"
---

# subtractYears

Subtracts a number of years from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractYears/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractYears<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericYear extends number
>(
	input: GenericInput,
	year: GenericYear
): TheDate
```

### Curried signature

```typescript
function subtractYears<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericYear extends number
>(
	year: GenericYear
): (input: GenericInput) => TheDate
```

## Parameters

- `year`: Number of years to subtract.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the given number of years.

## See also

- [`addYears`](/en/v1/api/date/addYears)
- [`subtractMonths`](/en/v1/api/date/subtractMonths)
