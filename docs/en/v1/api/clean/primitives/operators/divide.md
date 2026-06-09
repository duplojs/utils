---
outline: [2, 3]
description: "divide() divides a wrapped Number by a divisor validated with the NotZero constraint. Supports the curried version."
prev:
  text: "multiply"
  link: "/en/v1/api/clean/primitives/operators/multiply"
next:
  text: "min"
  link: "/en/v1/api/clean/primitives/operators/min"
---

# divide

`divide()` divides a wrapped `Number` by a divisor validated with the `NotZero` constraint. Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/divide/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

### Classic signature

```typescript
function divide(
	value: Number, 
	divisor: NotZero
): Number
```

### Curried signature

```typescript
function divide(
	divisor: NotZero
): (value: Number) => Number
```

## Parameters

- `value` : base value (classic signature only).
- `divisor` : divisor validated with `C.NotZero`.

## Return value

A wrapped `Number` containing the quotient.

## See also

- [`multiply`](/en/v1/api/clean/primitives/operators/multiply)
- [`NotZero`](/en/v1/api/clean/constraints#notzero)
