---
outline: [2, 3]
description: "The addYears() function adds a number of years to a TheDate. It accepts a curried signature to compose transformations."
prev:
  text: "getLastDayOfMonth"
  link: "/en/v1/api/date/getLastDayOfMonth"
next:
  text: "addMonths"
  link: "/en/v1/api/date/addMonths"
---

# addYears

The **`addYears()`** function adds a number of years to a `TheDate`. It accepts a curried signature to compose transformations.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addYears/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

### Classic signature

```typescript
function addYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number
>(
	input: GenericInput,
	year: GenericYear
): TheDate
```

### Curried signature

```typescript
function addYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number
>(
	year: GenericYear
): (input: GenericInput) => TheDate
```

## Parameters

- `year`: Number of years.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A new `TheDate` incremented by the requested number of years.

## See also

- [`addMonths`](/en/v1/api/date/addMonths)
- [`subtractYears`](/en/v1/api/date/subtractYears)

## Sources

- [MDN Web Docs - Date.prototype.setUTCFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear)
