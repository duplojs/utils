---
outline: [2, 3]
prev:
  text: "greaterThan"
  link: "/en/v1/api/date/greaterThan"
next:
  text: "lessThan"
  link: "/en/v1/api/date/lessThan"
---

# less

Checks that a `TheDate` is strictly less than a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/less/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function less<
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Curried signature

```typescript
function less<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Limit date.
- `input`: Date under test.

## Return value

`true` if `input` is before `threshold`.

## See also

- [`lessThan`](/en/v1/api/date/lessThan)
- [`greater`](/en/v1/api/date/greater)
