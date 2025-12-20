---
outline: [2, 3]
prev:
  text: "lengthLessThan"
  link: "/en/v1/api/clean/primitives/operators/lengthLessThan"
next:
  text: "dateLessThan"
  link: "/en/v1/api/clean/primitives/operators/dateLessThan"
---

# dateGreaterThan

`dateGreaterThan()` tests whether a `Date` (wrapped) is strictly after a threshold (`Date` wrapped or `DDate.TheDate`). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateGreaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

### Classic signature

```typescript
function dateGreaterThan(
	primitive: Date, 
	threshold: Date | TheDate
): boolean
```

### Curried signature

```typescript
function dateGreaterThan(
	threshold: Date | TheDate
): (primitive: Date) => boolean
```

## Parameters

- `primitive` : wrapped `Date` (classic signature only).
- `threshold` : comparison threshold.

## Return value

`true` if `primitive > threshold`, otherwise `false`.

## See also

- [`dateLessThan`](/en/v1/api/clean/primitives/operators/dateLessThan)
- [`dateMin`](/en/v1/api/clean/primitives/operators/dateMin)
