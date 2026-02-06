---
outline: [2, 3]
description: "The greaterThan() function checks whether a TheDate is strictly greater than a threshold."
prev:
  text: "greater"
  link: "/en/v1/api/date/greater"
next:
  text: "less"
  link: "/en/v1/api/date/less"
---

# greaterThan

The **`greaterThan()`** function checks whether a `TheDate` is strictly greater than a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/greaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Classic signature

```typescript
function greaterThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Curried signature

```typescript
function greaterThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Reference date.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

`true` if `input` is strictly greater than the threshold.

## See also

- [`greater`](/en/v1/api/date/greater)
- [`lessThan`](/en/v1/api/date/lessThan)
