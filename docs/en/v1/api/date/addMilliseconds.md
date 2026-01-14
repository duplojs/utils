---
outline: [2, 3]
description: "Adds a positive number of milliseconds to a TheDate."
prev:
  text: "addSeconds"
  link: "/en/v1/api/date/addSeconds"
next:
  text: "addTime"
  link: "/en/v1/api/date/addTime"
---

# addMilliseconds

Adds a positive number of milliseconds to a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addMilliseconds/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function addMilliseconds<
	GenericInput extends TheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: PositiveNumber<GenericMillisecond>
): TheDate
```

### Curried signature

```typescript
function addMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(
	millisecond: PositiveNumber<GenericMillisecond>
): (input: GenericInput) => TheDate
```

## Parameters

- `millisecond`: Strictly positive number of milliseconds.
- `input`: `TheDate` to adjust.

## Return value

A `TheDate` moved forward by the requested number of milliseconds.

## See also

- [`addSeconds`](/en/v1/api/date/addSeconds)
- [`subtractMilliseconds`](/en/v1/api/date/subtractMilliseconds)
