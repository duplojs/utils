---
outline: [2, 3]
description: "The computeTime() function converts a TheTime or SerializedTheTime to the requested unit."
prev:
  text: "toTimeValue"
  link: "/en/v1/api/date/toTimeValue"
next:
  text: "isSafeTimeValue"
  link: "/en/v1/api/date/isSafeTimeValue"
---

# computeTime

The **`computeTime()`** function converts a `TheTime` or `SerializedTheTime` into a numeric value in the requested unit.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/computeTime/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

### Classic signature

```typescript
function computeTime(
	input: TheTime | SerializedTheTime,
	unit: "week" | "day" | "hour" | "minute" | "second" | "millisecond"
): number
```

### Curried signature

```typescript
function computeTime(
	unit: "week" | "day" | "hour" | "minute" | "second" | "millisecond"
): (input: TheTime | SerializedTheTime) => number
```

## Parameters

- `input`: Duration value (`TheTime` or `SerializedTheTime`).
- `unit`: Target unit.

## Return value

A numeric value converted to the requested unit.

## See also

- [`toTimeValue`](/en/v1/api/date/toTimeValue)
- [`TheTime`](/en/v1/api/date/theTime)
- [`createTime`](/en/v1/api/date/createTime)
