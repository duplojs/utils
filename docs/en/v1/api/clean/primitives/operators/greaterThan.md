---
outline: [2, 3]
prev:
  text: "max"
  link: "/en/v1/api/clean/primitives/operators/max"
next:
  text: "lessThan"
  link: "/en/v1/api/clean/primitives/operators/lessThan"
---

# greaterThan

`greaterThan()` tests whether a `Number` is strictly greater than a threshold (wrapped or raw). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/greaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function greaterThan(
	value: Number, 
	threshold: Number | number
): boolean
```

### Curried signature

```typescript
function greaterThan(
	threshold: Number | number
): (value: Number) => boolean
```

## Parameters

- `value` : base value (classic signature only).
- `threshold` : comparison threshold.

## Return value

`true` if `unwrap(value) > unwrap(threshold)`, otherwise `false`.

## See also

- [`lessThan`](/en/v1/api/clean/primitives/operators/lessThan)
