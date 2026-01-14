---
outline: [2, 3]
description: "Checks that a TheDate is strictly between two bounds (greater then less)."
prev:
  text: "lessThan"
  link: "/en/v1/api/date/lessThan"
next:
  text: "betweenThan"
  link: "/en/v1/api/date/betweenThan"
---

# between

Checks that a `TheDate` is strictly between two bounds (`greater` then `less`).

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
	GenericInput extends TheDate
>(
	input: GenericInput,
	greater: TheDate,
	less: TheDate
): boolean
```

### Curried signature

```typescript
function between<
	GenericInput extends TheDate
>(
	greater: TheDate,
	less: TheDate
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (exclusive).
- `less`: Upper bound (exclusive).
- `input`: Date to test.

## Return value

`true` if the input lies strictly between the two bounds.

## See also

- [`betweenThan`](/en/v1/api/date/betweenThan)
- [`greater`](/en/v1/api/date/greater)
