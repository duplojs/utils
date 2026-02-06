---
outline: [2, 3]
description: "Subtracts a number of milliseconds from a TheDate."
prev:
  text: "subtractSeconds"
  link: "/en/v1/api/date/subtractSeconds"
next:
  text: "subtractTime"
  link: "/en/v1/api/date/subtractTime"
---

# subtractMilliseconds

Subtracts a number of milliseconds from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMilliseconds/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractMilliseconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: GenericMillisecond
): TheDate
```

### Curried signature

```typescript
function subtractMilliseconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMillisecond extends number
>(
	millisecond: GenericMillisecond
): (input: GenericInput) => TheDate
```

## Parameters

- `millisecond`: Milliseconds to remove.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the provided number of milliseconds.

## See also

- [`subtractSeconds`](/en/v1/api/date/subtractSeconds)
- [`addMilliseconds`](/en/v1/api/date/addMilliseconds)
