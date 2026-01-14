---
outline: [2, 3]
description: "Adds a positive number of seconds to a TheDate."
prev:
  text: "addMinutes"
  link: "/en/v1/api/date/addMinutes"
next:
  text: "addMilliseconds"
  link: "/en/v1/api/date/addMilliseconds"
---

# addSeconds

Adds a positive number of seconds to a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addSeconds/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function addSeconds<
	GenericInput extends TheDate, 
	GenericSecond extends number
>(
	input: GenericInput,
	second: PositiveNumber<GenericSecond>
): TheDate
```

### Curried signature

```typescript
function addSeconds<GenericInput extends TheDate, GenericSecond extends number>(
	second: PositiveNumber<GenericSecond>
): (input: GenericInput) => TheDate
```

## Parameters

- `second`: Strictly positive number of seconds.
- `input`: `TheDate` to adjust.

## Return value

A `TheDate` moved forward by the requested number of seconds.

## See also

- [`addMinutes`](/en/v1/api/date/addMinutes)
- [`addMilliseconds`](/en/v1/api/date/addMilliseconds)
