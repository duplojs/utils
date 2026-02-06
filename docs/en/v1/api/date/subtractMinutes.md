---
outline: [2, 3]
description: "Subtracts a number of minutes from a TheDate."
prev:
  text: "subtractHours"
  link: "/en/v1/api/date/subtractHours"
next:
  text: "subtractSeconds"
  link: "/en/v1/api/date/subtractSeconds"
---

# subtractMinutes

Subtracts a number of minutes from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMinutes/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function subtractMinutes<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMinute extends number
>(
	input: GenericInput,
	minute: GenericMinute
): TheDate
```

### Curried signature

```typescript
function subtractMinutes<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMinute extends number
>(
	minute: GenericMinute
): (input: GenericInput) => TheDate
```

## Parameters

- `minute`: Minutes to remove.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

A `TheDate` moved back by the requested number of minutes.

## See also

- [`subtractSeconds`](/en/v1/api/date/subtractSeconds)
- [`addMinutes`](/en/v1/api/date/addMinutes)
