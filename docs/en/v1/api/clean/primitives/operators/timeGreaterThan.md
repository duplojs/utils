---
outline: [2, 3]
prev:
  text: "dateMax"
  link: "/en/v1/api/clean/primitives/operators/dateMax"
next:
  text: "timeLessThan"
  link: "/en/v1/api/clean/primitives/operators/timeLessThan"
---

# timeGreaterThan

`timeGreaterThan()` checks whether a wrapped `Time` is strictly greater than a threshold (wrapped `Time` or `DDate.TheTime`). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeGreaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

### Classic signature

```typescript
function timeGreaterThan(
	primitive: Time, 
	threshold: Time | TheTime
): boolean
```

### Curried signature

```typescript
function timeGreaterThan(
	threshold: Time | TheTime
): (primitive: Time) => boolean
```

## Parameters

- `primitive`: wrapped `Time` (classic signature only).
- `threshold`: comparison threshold.

## Return value

`true` if `primitive > threshold`, otherwise `false`.

## See also

- [`timeLessThan`](/en/v1/api/clean/primitives/operators/timeLessThan)
- [`timeMin`](/en/v1/api/clean/primitives/operators/timeMin)
