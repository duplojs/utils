---
outline: [2, 3]
prev:
  text: "greaterThanTime"
  link: "/en/v1/api/date/greaterThanTime"
next:
  text: "lessThanTime"
  link: "/en/v1/api/date/lessThanTime"
---

# lessTime

The **`lessTime()`** function checks if a `TheTime` is strictly less than a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/lessTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Standard signature

```typescript
function lessTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Curried signature

```typescript
function lessTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Duration limit.
- `input`: Duration to compare.

## Return value

`true` if `input` is strictly less than the threshold.

## See also

- [`lessThanTime`](/en/v1/api/date/lessThanTime)
- [`greaterTime`](/en/v1/api/date/greaterTime)
