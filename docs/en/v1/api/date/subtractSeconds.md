---
outline: [2, 3]
description: "Subtracts a number of seconds from a TheDate."
prev:
  text: "subtractMinutes"
  link: "/en/v1/api/date/subtractMinutes"
next:
  text: "subtractMilliseconds"
  link: "/en/v1/api/date/subtractMilliseconds"
---

# subtractSeconds

Subtracts a number of seconds from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractSeconds/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractSeconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericSecond extends number
>(
	input: GenericInput,
	second: GenericSecond
): TheDate
```

### Curried signature

```typescript
function subtractSeconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericSecond extends number
>(
	second: GenericSecond
): (input: GenericInput) => TheDate
```

## Parameters

- `second`: Seconds to remove.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the given number of seconds.

## See also

- [`subtractMilliseconds`](/en/v1/api/date/subtractMilliseconds)
- [`addSeconds`](/en/v1/api/date/addSeconds)
