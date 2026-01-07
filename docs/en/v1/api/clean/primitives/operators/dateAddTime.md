---
outline: [2, 3]
prev:
  text: "dateLessThan"
  link: "/en/v1/api/clean/primitives/operators/dateLessThan"
next:
  text: "dateSubtractTime"
  link: "/en/v1/api/clean/primitives/operators/dateSubtractTime"
---

# dateAddTime

`dateAddTime()` adds a duration to a wrapped `Date`. The duration can be a wrapped `Time` or a `DDate.TheTime`. Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateAddTime/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

### Classic signature

```typescript
function dateAddTime(
	primitive: Date, 
	time: Time | TheTime
): Date
```

### Curried signature

```typescript
function dateAddTime(
	time: Time | TheTime
): (primitive: Date) => Date
```

## Parameters

- `primitive`: wrapped `Date` (classic signature only).
- `time`: duration to add.

## Return value

A wrapped `Date` with the duration added.

## See also

- [`dateSubtractTime`](/en/v1/api/clean/primitives/operators/dateSubtractTime)
- [`dateMin`](/en/v1/api/clean/primitives/operators/dateMin)
