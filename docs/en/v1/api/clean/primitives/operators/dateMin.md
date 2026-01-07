---
outline: [2, 3]
prev:
  text: "dateLessThan"
  link: "/en/v1/api/clean/primitives/operators/dateLessThan"
next:
  text: "dateMax"
  link: "/en/v1/api/clean/primitives/operators/dateMax"
---

# dateMin

`dateMin()` returns the smallest date in a list (wrapped or `DDate.TheDate`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateMin/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

### Classic signature

```typescript
function dateMin(input: AnyTuple<Date | TheDate>): Date
```

## Parameters

- `input` : dates to compare (at least one).

## Return value

A wrapped `Date` containing the smallest date.

## See also

- [`dateMax`](/en/v1/api/clean/primitives/operators/dateMax)
