---
outline: [2, 3]
description: "The greaterThan() function checks whether a TheDate is greater than or equal to a threshold."
prev:
  text: "greater"
  link: "/en/v1/api/date/greater"
next:
  text: "less"
  link: "/en/v1/api/date/less"
---

# greaterThan

The **`greaterThan()`** function checks whether a `TheDate` is greater than or equal to a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/greaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function greaterThan<
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Curried signature

```typescript
function greaterThan<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Reference date.
- `input`: Date under test.

## Return value

`true` if `input` is greater than or equal to the threshold.

## See also

- [`greater`](/en/v1/api/date/greater)
- [`lessThan`](/en/v1/api/date/lessThan)
