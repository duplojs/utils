---
outline: [2, 3]
prev:
  text: "addHours"
  link: "/en/v1/api/date/addHours"
next:
  text: "addSeconds"
  link: "/en/v1/api/date/addSeconds"
---

# addMinutes

Adds a positive number of minutes to a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addMinutes/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function addMinutes<
	GenericInput extends TheDate, 
	GenericMinute extends number
>(
	input: GenericInput,
	minute: PositiveNumber<GenericMinute>
): TheDate
```

### Curried signature

```typescript
function addMinutes<GenericInput extends TheDate, GenericMinute extends number>(
	minute: PositiveNumber<GenericMinute>
): (input: GenericInput) => TheDate
```

## Parameters

- `minute`: Strictly positive number of minutes.
- `input`: `TheDate` to update.

## Return value

A `TheDate` moved forward by the requested number of minutes.

## See also

- [`addHours`](/en/v1/api/date/addHours)
- [`addSeconds`](/en/v1/api/date/addSeconds)
