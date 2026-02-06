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

The **`lessTime()`** function checks if a `TheTime` is less than or equal to a threshold.

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
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Curried signature

```typescript
function lessTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Duration limit.
- `input`: `TheTime` or `SerializedTheTime`.

## Return value

`true` if `input` is less than or equal to the threshold.

## See also

- [`lessThanTime`](/en/v1/api/date/lessThanTime)
- [`greaterTime`](/en/v1/api/date/greaterTime)
