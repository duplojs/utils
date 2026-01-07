---
outline: [2, 3]
prev:
  text: "timeGreaterThan"
  link: "/en/v1/api/clean/primitives/operators/timeGreaterThan"
next:
  text: "timeMin"
  link: "/en/v1/api/clean/primitives/operators/timeMin"
---

# timeLessThan

`timeLessThan()` checks whether a wrapped `Time` is strictly less than a threshold (wrapped `Time` or `DDate.TheTime`). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeLessThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

### Classic signature

```typescript
function timeLessThan(
	primitive: Time, 
	threshold: Time | TheTime
): boolean
```

### Curried signature

```typescript
function timeLessThan(
	threshold: Time | TheTime
): (primitive: Time) => boolean
```

## Parameters

- `primitive`: wrapped `Time` (classic signature only).
- `threshold`: comparison threshold.

## Return value

`true` if `primitive < threshold`, otherwise `false`.

## See also

- [`timeGreaterThan`](/en/v1/api/clean/primitives/operators/timeGreaterThan)
- [`timeMax`](/en/v1/api/clean/primitives/operators/timeMax)
