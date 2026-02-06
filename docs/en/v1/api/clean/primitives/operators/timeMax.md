---
outline: [2, 3]
prev:
  text: "timeMin"
  link: "/en/v1/api/clean/primitives/operators/timeMin"
next:
  text: "sort"
  link: "/en/v1/api/clean/primitives/operators/sort"
---

# timeMax

`timeMax()` returns the largest duration in a tuple (wrapped or `DDate.TheTime`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeMax/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function timeMax(input: AnyTuple<Time | TheTime>): Time
```

## Parameters

- `input`: tuple of durations to compare (at least one).

## Return value

A wrapped `Time` containing the largest duration.

## See also

- [`timeMin`](/en/v1/api/clean/primitives/operators/timeMin)
