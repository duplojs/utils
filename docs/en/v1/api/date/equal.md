---
outline: [2, 3]
description: "Checks whether two dates are equal by comparing their normalized timestamps."
prev:
  text: "lessThan"
  link: "/en/v1/api/date/lessThan"
next:
  text: "between"
  link: "/en/v1/api/date/between"
---

# equal

Checks whether two dates are equal by comparing their normalized timestamps.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/equal/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

### Classic signature

```typescript
function equal(
	first: TheDate | SerializedTheDate,
	second: TheDate | SerializedTheDate
): boolean
```

### Curried signature

```typescript
function equal(
	second: TheDate | SerializedTheDate
): (first: TheDate | SerializedTheDate) => boolean
```

## Parameters

- `first`: First date value to compare.
- `second`: Second date value used as reference.

## Return value

`true` when both dates represent the same timestamp, otherwise `false`.

## See also

- [`lessThan`](/en/v1/api/date/lessThan)
- [`between`](/en/v1/api/date/between)
