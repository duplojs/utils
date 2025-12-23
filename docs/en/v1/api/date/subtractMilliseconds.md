---
outline: [2, 3]
prev:
  text: "subtractSeconds"
  link: "/en/v1/api/date/subtractSeconds"
next:
  text: "greater"
  link: "/en/v1/api/date/greater"
---

# subtractMilliseconds

Subtracts a positive number of milliseconds from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMilliseconds/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function subtractMilliseconds<
	GenericInput extends TheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: PositiveNumber<GenericMillisecond>
): TheDate
```

### Curried signature

```typescript
function subtractMilliseconds<
	GenericInput extends TheDate, 
	GenericMillisecond extends number
>(
	millisecond: PositiveNumber<GenericMillisecond>
): (input: GenericInput) => TheDate
```

## Parameters

- `millisecond`: Milliseconds to remove.
- `input`: Original date.

## Return value

A `TheDate` moved back by the provided number of milliseconds.

## See also

- [`subtractSeconds`](/en/v1/api/date/subtractSeconds)
- [`addMilliseconds`](/en/v1/api/date/addMilliseconds)
