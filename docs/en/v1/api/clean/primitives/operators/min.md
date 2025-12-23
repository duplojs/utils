---
outline: [2, 3]
prev:
  text: "divide"
  link: "/en/v1/api/clean/primitives/operators/divide"
next:
  text: "max"
  link: "/en/v1/api/clean/primitives/operators/max"
---

# min

`min()` returns the minimum of a tuple of `Number` (wrapped or raw).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/min/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function min(input: AnyTuple<Number | number>): Number
```

## Parameters

- `input` : non-empty tuple of numbers (wrapped or raw).

## Return value

A wrapped `Number` containing the minimum.

## See also

- [`max`](/en/v1/api/clean/primitives/operators/max)
