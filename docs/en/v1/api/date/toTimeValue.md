---
outline: [2, 3]
prev:
  text: "toTimestamp"
  link: "/en/v1/api/date/toTimestamp"
next:
  text: "isSafeTimeValue"
  link: "/en/v1/api/date/isSafeTimeValue"
---

# toTimeValue

The **`toTimeValue()`** function converts a `TheTime` string into a numeric value (milliseconds). It applies the `makeSafeTimeValue` safeguards: rounding decimals and clamping between `minTimeValue` and `maxTimeValue`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/toTimeValue/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntax

```typescript
function toTimeValue<
	GenericInput extends TheTime
>(
	input: GenericInput
): number
```

## Parameters

- `input`: Duration formatted as `TheTime`.

## Return value

The numeric value in milliseconds, clamped to `minTimeValue` and `maxTimeValue`.

## See also

- [`constants`](/en/v1/api/date/constants)
- [`isSafeTimeValue`](/en/v1/api/date/isSafeTimeValue)
- [`createTime`](/en/v1/api/date/createTime)
