---
outline: [2, 3]
description: "Adds a number of seconds to a TheDate."
prev:
  text: "addMinutes"
  link: "/en/v1/api/date/addMinutes"
next:
  text: "addMilliseconds"
  link: "/en/v1/api/date/addMilliseconds"
---

# addSeconds

Adds a number of seconds to a `TheDate`.

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
	GenericInput extends TheDate | SerializedTheDate, 
	GenericSecond extends number
>(
	input: GenericInput,
	second: GenericSecond
): TheDate
```

### Curried signature

```typescript
function addSeconds<GenericInput extends TheDate | SerializedTheDate, GenericSecond extends number>(
	second: GenericSecond
): (input: GenericInput) => TheDate
```

## Parameters

- `second`: Number of seconds.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved forward by the requested number of seconds.

## See also

- [`addMinutes`](/en/v1/api/date/addMinutes)
- [`addMilliseconds`](/en/v1/api/date/addMilliseconds)
