---
outline: [2, 3]
prev:
  text: "dateAddTime"
  link: "/en/v1/api/clean/primitives/operators/dateAddTime"
next:
  text: "dateMin"
  link: "/en/v1/api/clean/primitives/operators/dateMin"
---

# dateSubtractTime

`dateSubtractTime()` subtracts a duration from a wrapped `Date`. The duration can be a wrapped `Time` or a `DDate.TheTime`. Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateSubtractTime/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

### Classic signature

```typescript
function dateSubtractTime(
	primitive: Date, 
	time: Time | TheTime
): Date
```

### Curried signature

```typescript
function dateSubtractTime(
	time: Time | TheTime
): (primitive: Date) => Date
```

## Parameters

- `primitive`: wrapped `Date` (classic signature only).
- `time`: duration to subtract.

## Return value

A wrapped `Date` with the duration subtracted.

## See also

- [`dateAddTime`](/en/v1/api/clean/primitives/operators/dateAddTime)
- [`dateMax`](/en/v1/api/clean/primitives/operators/dateMax)
