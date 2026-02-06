---
outline: [2, 3]
description: "Checks that a TheDate is less than or equal to a threshold."
prev:
  text: "greaterThan"
  link: "/en/v1/api/date/greaterThan"
next:
  text: "lessThan"
  link: "/en/v1/api/date/lessThan"
---

# less

Checks that a `TheDate` is less than or equal to a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/less/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Classic signature

```typescript
function less<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Curried signature

```typescript
function less<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Limit date.
- `input`: `TheDate` or `SerializedTheDate`.

## Return value

`true` if `input` is before or equal to `threshold`.

## See also

- [`lessThan`](/en/v1/api/date/lessThan)
- [`greater`](/en/v1/api/date/greater)
