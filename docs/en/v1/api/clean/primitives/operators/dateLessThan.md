---
outline: [2, 3]
prev:
  text: "dateGreaterThan"
  link: "/en/v1/api/clean/primitives/operators/dateGreaterThan"
next:
  text: "dateAddTime"
  link: "/en/v1/api/clean/primitives/operators/dateAddTime"
---

# dateLessThan

`dateLessThan()` tests whether a `Date` (wrapped) is strictly before a threshold (`Date` wrapped or `DDate.TheDate`). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateLessThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

### Classic signature

```typescript
function dateLessThan(
	primitive: Date, 
	threshold: Date | TheDate
): boolean
```

### Curried signature

```typescript
function dateLessThan(
	threshold: Date | TheDate
): (primitive: Date) => boolean
```

## Parameters

- `primitive` : wrapped `Date` (classic signature only).
- `threshold` : comparison threshold.

## Return value

`true` if `primitive < threshold`, otherwise `false`.

## See also

- [`dateGreaterThan`](/en/v1/api/clean/primitives/operators/dateGreaterThan)
- [`dateMax`](/en/v1/api/clean/primitives/operators/dateMax)
