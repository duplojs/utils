---
outline: [2, 3]
description: "Checks that a TheDate is in an inclusive range between two bounds (greater then less)."
prev:
  text: "lessThan"
  link: "/en/v1/api/date/lessThan"
next:
  text: "betweenThan"
  link: "/en/v1/api/date/betweenThan"
---

# between

Checks that a `TheDate` is in an inclusive range between two bounds (`greater` then `less`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/between/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

### Classic signature

```typescript
function between<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): boolean
```

### Curried signature

```typescript
function between<
	GenericInput extends TheDate | SerializedTheDate
>(
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (inclusive).
- `less`: Upper bound (inclusive).
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

`true` if the input lies in the inclusive range [greater, less].

## See also

- [`betweenThan`](/en/v1/api/date/betweenThan)
- [`greater`](/en/v1/api/date/greater)
