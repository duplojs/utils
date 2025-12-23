---
outline: [2, 3]
prev:
  text: "greaterThan"
  link: "/en/v1/api/clean/primitives/operators/greaterThan"
next:
  text: "concat"
  link: "/en/v1/api/clean/primitives/operators/concat"
---

# lessThan

`lessThan()` tests whether a `Number` is strictly less than a threshold (wrapped or raw). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lessThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function lessThan(
	value: Number, 
	threshold: Number | number
): boolean
```

### Curried signature

```typescript
function lessThan(
	threshold: Number | number
): (value: Number) => boolean
```

## Parameters

- `value` : base value (classic signature only).
- `threshold` : comparison threshold.

## Return value

`true` if `unwrap(value) < unwrap(threshold)`, otherwise `false`.

## See also

- [`greaterThan`](/en/v1/api/clean/primitives/operators/greaterThan)
