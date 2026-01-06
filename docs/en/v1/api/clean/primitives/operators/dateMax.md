---
outline: [2, 3]
prev:
  text: "dateMin"
  link: "/en/v1/api/clean/primitives/operators/dateMin"
next:
  text: "timeGreaterThan"
  link: "/en/v1/api/clean/primitives/operators/timeGreaterThan"
---

# dateMax

`dateMax()` returns the largest date in a list (wrapped or `DDate.TheDate`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateMax/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

### Classic signature

```typescript
function dateMax(input: AnyTuple<Date | TheDate>): Date
```

## Parameters

- `input` : dates to compare (at least one).

## Return value

A wrapped `Date` containing the largest date.

## See also

- [`dateMin`](/en/v1/api/clean/primitives/operators/dateMin)
