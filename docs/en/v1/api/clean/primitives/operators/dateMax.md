---
outline: [2, 3]
prev:
  text: "dateMin"
  link: "/en/v1/api/clean/primitives/operators/dateMin"
next:
  text: "sort"
  link: "/en/v1/api/clean/primitives/operators/sort"
---

# dateMax

`dateMax()` returns the largest date in a list (wrapped or `DDate.TheDate`). It can be used in a variadic version or a partially applied version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateMax/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

### Classic signature (variadic)

```typescript
function dateMax(...input: AnyTuple<Date | TheDate>): Date
```

### Partial signature

```typescript
function dateMax(
	first: Date | TheDate
): (...rest: (Date | TheDate)[]) => Date
```

## Parameters

- `input` : dates to compare (at least one).
- `first` / `rest` : partial version (`dateMax(first)(...rest)`).

## Return value

A wrapped `Date` containing the largest date.

## See also

- [`dateMin`](/en/v1/api/clean/primitives/operators/dateMin)
