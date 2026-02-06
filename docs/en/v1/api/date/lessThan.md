---
outline: [2, 3]
description: "Checks that a TheDate is strictly less than a threshold."
prev:
  text: "less"
  link: "/en/v1/api/date/less"
next:
  text: "between"
  link: "/en/v1/api/date/between"
---

# lessThan

Checks that a `TheDate` is strictly less than a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/lessThan/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Classic signature

```typescript
function lessThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Curried signature

```typescript
function lessThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Limit date.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

`true` if `input` is strictly before the threshold.

## See also

- [`less`](/en/v1/api/date/less)
- [`greaterThan`](/en/v1/api/date/greaterThan)
