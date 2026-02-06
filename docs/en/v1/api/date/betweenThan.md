---
outline: [2, 3]
description: "Exclusive variant of between: checks that a TheDate lies between two bounds while excluding the extremes."
prev:
  text: "between"
  link: "/en/v1/api/date/between"
next:
  text: "greaterTime"
  link: "/en/v1/api/date/greaterTime"
---

# betweenThan

Exclusive variant of [`between`](/en/v1/api/date/between): checks that a `TheDate` lies between two bounds while excluding the extremes.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/betweenThan/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

### Classic signature

```typescript
function betweenThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): boolean
```

### Curried signature

```typescript
function betweenThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (exclusive).
- `less`: Upper bound (exclusive).
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

`true` if the date is within the interval `(greater, less)`.

## See also

- [`between`](/en/v1/api/date/between)
- [`greaterThan`](/en/v1/api/date/greaterThan)
