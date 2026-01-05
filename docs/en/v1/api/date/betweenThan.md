---
outline: [2, 3]
description: "Inclusive variant of between: checks that a TheDate lies between two bounds while including the extremes."
prev:
  text: "between"
  link: "/en/v1/api/date/between"
next:
  text: "greaterTime"
  link: "/en/v1/api/date/greaterTime"
---

# betweenThan

Inclusive variant of [`between`](/en/v1/api/date/between): checks that a `TheDate` lies between two bounds while including the extremes.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/betweenThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function betweenThan<
	GenericInput extends TheDate
>(
	input: GenericInput,
	greater: TheDate,
	less: TheDate
): boolean
```

### Curried signature

```typescript
function betweenThan<
	GenericInput extends TheDate
>(
	greater: TheDate,
	less: TheDate
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (inclusive).
- `less`: Upper bound (inclusive).
- `input`: Date under test.

## Return value

`true` if the date is within the interval `[greater, less]`.

## See also

- [`between`](/en/v1/api/date/between)
- [`greaterThan`](/en/v1/api/date/greaterThan)
