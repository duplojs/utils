---
outline: [2, 3]
prev:
  text: "timeLessThan"
  link: "/en/v1/api/clean/primitives/operators/timeLessThan"
next:
  text: "timeMax"
  link: "/en/v1/api/clean/primitives/operators/timeMax"
---

# timeMin

`timeMin()` returns the smallest duration in a list (wrapped or `DDate.TheTime`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeMin/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

### Classic signature

```typescript
function timeMin(input: AnyTuple<Time | TheTime>): Time
```

## Parameters

- `input`: durations to compare (at least one).

## Return value

A wrapped `Time` containing the smallest duration.

## See also

- [`timeMax`](/en/v1/api/clean/primitives/operators/timeMax)
