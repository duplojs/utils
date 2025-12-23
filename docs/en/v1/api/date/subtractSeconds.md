---
outline: [2, 3]
prev:
  text: "subtractMinutes"
  link: "/en/v1/api/date/subtractMinutes"
next:
  text: "subtractMilliseconds"
  link: "/en/v1/api/date/subtractMilliseconds"
---

# subtractSeconds

Subtracts a positive number of seconds from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractSeconds/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function subtractSeconds<
	GenericInput extends TheDate, 
	GenericSecond extends number
>(
	input: GenericInput,
	second: PositiveNumber<GenericSecond>
): TheDate
```

### Curried signature

```typescript
function subtractSeconds<
	GenericInput extends TheDate, 
	GenericSecond extends number
>(
	second: PositiveNumber<GenericSecond>
): (input: GenericInput) => TheDate
```

## Parameters

- `second`: Seconds to remove.
- `input`: Original date.

## Return value

A `TheDate` moved back by the given number of seconds.

## See also

- [`subtractMilliseconds`](/en/v1/api/date/subtractMilliseconds)
- [`addSeconds`](/en/v1/api/date/addSeconds)
