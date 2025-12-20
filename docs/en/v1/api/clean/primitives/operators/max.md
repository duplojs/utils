---
outline: [2, 3]
prev:
  text: "min"
  link: "/en/v1/api/clean/primitives/operators/min"
next:
  text: "greaterThan"
  link: "/en/v1/api/clean/primitives/operators/greaterThan"
---

# max

`max()` returns the maximum of a tuple of `Number` (wrapped or raw).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/max/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function max(input: AnyTuple<Number | number>): Number
```

## Parameters

- `input` : non-empty tuple of numbers (wrapped or raw).

## Return value

A wrapped `Number` containing the maximum.

## See also

- [`min`](/en/v1/api/clean/primitives/operators/min)
