---
outline: [2, 3]
description: "The greater() function checks whether a TheDate is greater than or equal to a threshold."
prev:
  text: "subtractTime"
  link: "/en/v1/api/date/subtractTime"
next:
  text: "greaterThan"
  link: "/en/v1/api/date/greaterThan"
---

# greater

The **`greater()`** function checks whether a `TheDate` is greater than or equal to a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/greater/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Classic signature

```typescript
function greater<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Curried signature

```typescript
function greater<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Comparison date.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

`true` if `input` is after or equal to `threshold`.

## See also

- [`greaterThan`](/en/v1/api/date/greaterThan)
- [`less`](/en/v1/api/date/less)
