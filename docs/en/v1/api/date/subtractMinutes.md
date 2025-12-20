---
outline: [2, 3]
prev:
  text: "subtractHours"
  link: "/en/v1/api/date/subtractHours"
next:
  text: "subtractSeconds"
  link: "/en/v1/api/date/subtractSeconds"
---

# subtractMinutes

Subtracts a positive number of minutes from a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMinutes/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function subtractMinutes<
	GenericInput extends TheDate, 
	GenericMinute extends number
>(
	input: GenericInput,
	minute: PositiveNumber<GenericMinute>
): TheDate
```

### Curried signature

```typescript
function subtractMinutes<
	GenericInput extends TheDate, 
	GenericMinute extends number
>(
	minute: PositiveNumber<GenericMinute>
): (input: GenericInput) => TheDate
```

## Parameters

- `minute`: Minutes to remove.
- `input`: Target date.

## Return value

A `TheDate` moved back by the requested number of minutes.

## See also

- [`subtractSeconds`](/en/v1/api/date/subtractSeconds)
- [`addMinutes`](/en/v1/api/date/addMinutes)
