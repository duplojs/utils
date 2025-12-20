---
outline: [2, 3]
prev:
  text: "add"
  link: "/en/v1/api/clean/primitives/operators/add"
next:
  text: "multiply"
  link: "/en/v1/api/clean/primitives/operators/multiply"
---

# subtract

`subtract()` subtracts a number from a `Number` (wrapped or raw). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/subtract/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function subtract(
	value: Number, 
	subtrahend: Number | number
): Number
```

### Curried signature

```typescript
function subtract(
	subtrahend: Number | number
): (value: Number) => Number
```

## Parameters

- `value` : base value (classic signature only).
- `subtrahend` : value to subtract.

## Return value

A wrapped `Number` containing the result.

## See also

- [`add`](/en/v1/api/clean/primitives/operators/add)
- [`multiply`](/en/v1/api/clean/primitives/operators/multiply)
