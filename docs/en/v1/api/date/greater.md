---
outline: [2, 3]
prev:
  text: "subtractMilliseconds"
  link: "/en/v1/api/date/subtractMilliseconds"
next:
  text: "greaterThan"
  link: "/en/v1/api/date/greaterThan"
---

# greater

The **`greater()`** function checks whether a `TheDate` is strictly greater than a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/greater/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function greater<
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Curried signature

```typescript
function greater<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Comparison date.
- `input`: Date under test (classic signature).

## Return value

`true` if `input` is strictly after `threshold`.

## See also

- [`greaterThan`](/en/v1/api/date/greaterThan)
- [`less`](/en/v1/api/date/less)
