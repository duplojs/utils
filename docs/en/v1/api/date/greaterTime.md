---
outline: [2, 3]
prev:
  text: "betweenThan"
  link: "/en/v1/api/date/betweenThan"
next:
  text: "greaterThanTime"
  link: "/en/v1/api/date/greaterThanTime"
---

# greaterTime

The **`greaterTime()`** function checks if a `TheTime` is greater than or equal to a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/greaterTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Standard signature

```typescript
function greaterTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Curried signature

```typescript
function greaterTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Comparison duration.
- `input`: `TheTime` or `SerializedTheTime`.

## Return value

`true` if `input` is greater than or equal to `threshold`.

## See also

- [`greaterThanTime`](/en/v1/api/date/greaterThanTime)
- [`lessTime`](/en/v1/api/date/lessTime)
