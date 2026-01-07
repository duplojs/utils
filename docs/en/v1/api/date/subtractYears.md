---
outline: [2, 3]
prev:
  text: "addTime"
  link: "/en/v1/api/date/addTime"
next:
  text: "subtractMonths"
  link: "/en/v1/api/date/subtractMonths"
---

# subtractYears

Subtracts a positive number of years from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractYears/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function subtractYears<
	GenericInput extends TheDate, 
	GenericYear extends number
>(
	input: GenericInput,
	year: PositiveNumber<GenericYear>
): TheDate
```

### Curried signature

```typescript
function subtractYears<
	GenericInput extends TheDate, 
	GenericYear extends number
>(
	year: PositiveNumber<GenericYear>
): (input: GenericInput) => TheDate
```

## Parameters

- `year`: Number of years to subtract.
- `input`: Original date.

## Return value

A `TheDate` moved back by the given number of years.

## See also

- [`addYears`](/en/v1/api/date/addYears)
- [`subtractMonths`](/en/v1/api/date/subtractMonths)
