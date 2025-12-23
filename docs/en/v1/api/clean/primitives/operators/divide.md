---
outline: [2, 3]
prev:
  text: "multiply"
  link: "/en/v1/api/clean/primitives/operators/multiply"
next:
  text: "min"
  link: "/en/v1/api/clean/primitives/operators/min"
---

# divide

`divide()` divides a `Number` (wrapped) by a divisor (wrapped or raw). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/divide/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function divide(
	value: Number, 
	divisor: Number | number
): Number
```

### Curried signature

```typescript
function divide(
	divisor: Number | number
): (value: Number) => Number
```

## Parameters

- `value` : base value (classic signature only).
- `divisor` : divisor.

## Return value

A wrapped `Number` containing the quotient.

## See also

- [`multiply`](/en/v1/api/clean/primitives/operators/multiply)
