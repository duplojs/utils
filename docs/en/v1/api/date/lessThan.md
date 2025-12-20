---
outline: [2, 3]
prev:
  text: "less"
  link: "/en/v1/api/date/less"
next:
  text: "between"
  link: "/en/v1/api/date/between"
---

# lessThan

Checks that a `TheDate` is less than or equal to a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/lessThan/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function lessThan<
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Curried signature

```typescript
function lessThan<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Limit date.
- `input`: Date to compare.

## Return value

`true` if `input` is before or equal to the threshold.

## See also

- [`less`](/en/v1/api/date/less)
- [`greaterThan`](/en/v1/api/date/greaterThan)
