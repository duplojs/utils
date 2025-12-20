---
outline: [2, 3]
prev:
  text: "subtract"
  link: "/en/v1/api/clean/primitives/operators/subtract"
next:
  text: "divide"
  link: "/en/v1/api/clean/primitives/operators/divide"
---

# multiply

`multiply()` multiplies a `Number` (wrapped) by a multiplier (wrapped or raw). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/multiply/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function multiply(
	value: Number, 
	multiplier: Number | number
): Number
```

### Curried signature

```typescript
function multiply(
	multiplier: Number | number
): (value: Number) => Number
```

## Parameters

- `value` : base value (classic signature only).
- `multiplier` : multiplier.

## Return value

A wrapped `Number` containing the product.

## See also

- [`add`](/en/v1/api/clean/primitives/operators/add)
- [`divide`](/en/v1/api/clean/primitives/operators/divide)
