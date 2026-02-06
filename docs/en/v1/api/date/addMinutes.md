---
outline: [2, 3]
description: "Adds a number of minutes to a TheDate."
prev:
  text: "addHours"
  link: "/en/v1/api/date/addHours"
next:
  text: "addSeconds"
  link: "/en/v1/api/date/addSeconds"
---

# addMinutes

Adds a number of minutes to a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addMinutes/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function addMinutes<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMinute extends number
>(
	input: GenericInput,
	minute: GenericMinute
): TheDate
```

### Curried signature

```typescript
function addMinutes<GenericInput extends TheDate | SerializedTheDate, GenericMinute extends number>(
	minute: GenericMinute
): (input: GenericInput) => TheDate
```

## Parameters

- `minute`: Number of minutes.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved forward by the requested number of minutes.

## See also

- [`addHours`](/en/v1/api/date/addHours)
- [`addSeconds`](/en/v1/api/date/addSeconds)
