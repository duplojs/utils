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

The **`greaterTime()`** function checks if a `TheTime` is strictly greater than a threshold.

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
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Curried signature

```typescript
function greaterTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Comparison duration.
- `input`: Duration to test (standard signature).

## Return value

`true` if `input` is strictly greater than `threshold`.

## See also

- [`greaterThanTime`](/en/v1/api/date/greaterThanTime)
- [`lessTime`](/en/v1/api/date/lessTime)
