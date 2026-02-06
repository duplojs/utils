---
outline: [2, 3]
description: "Adds a number of milliseconds to a TheDate."
prev:
  text: "addSeconds"
  link: "/en/v1/api/date/addSeconds"
next:
  text: "addTime"
  link: "/en/v1/api/date/addTime"
---

# addMilliseconds

Adds a number of milliseconds to a `TheDate`.

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
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: GenericMillisecond
): TheDate
```

### Curried signature

```typescript
function addMilliseconds<GenericInput extends TheDate | SerializedTheDate, GenericMillisecond extends number>(
	millisecond: GenericMillisecond
): (input: GenericInput) => TheDate
```

## Parameters

- `millisecond`: Number of milliseconds.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved forward by the requested number of milliseconds.

## See also

- [`addSeconds`](/en/v1/api/date/addSeconds)
- [`subtractMilliseconds`](/en/v1/api/date/subtractMilliseconds)
