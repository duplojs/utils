---
outline: [2, 3]
prev:
  text: "equal"
  link: "/en/v1/api/clean/primitives/operators/equal"
next:
  text: "subtract"
  link: "/en/v1/api/clean/primitives/operators/subtract"
---

# add

`add()` adds two `Number` (wrapped or raw). Supports the curried version to be used easily in a `pipe`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/add/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function add(
	value: Number, 
	operand: Number | number
): Number
```

### Curried signature

```typescript
function add(
	operand: Number | number
): (value: Number) => Number
```

## Parameters

- `value` : base value (classic signature only).
- `operand` : operand to add.

## Return value

A wrapped `Number` containing the sum.

## See also

- [`subtract`](/en/v1/api/clean/primitives/operators/subtract)
- [`multiply`](/en/v1/api/clean/primitives/operators/multiply)
- [`divide`](/en/v1/api/clean/primitives/operators/divide)
