---
outline: [2, 3]
prev:
  text: "createTime"
  link: "/en/v1/api/date/createTime"
next:
  text: "now"
  link: "/en/v1/api/date/now"
---

# createTimeOrThrow

The **`createTimeOrThrow()`** function builds a `TheTime` from a `TheTime`, a `SerializedTheTime`, a numeric value, or a `SpoolingTime`. It throws `CreateTheTimeError` when the input is invalid.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/createTimeOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function createTimeOrThrow(
	input: number | TheTime | SpoolingTime | SerializedTheTime
): TheTime
```

## Parameters

- `input`: A time value (`number`), a `TheTime`, a `SerializedTheTime`, or a `SpoolingTime`.

## Return value

A valid `TheTime`. If the value is out of bounds or inconsistent, a `CreateTheTimeError` is thrown.

## See also

- [`createTime`](/en/v1/api/date/createTime) – Returns a `MayBeTime` instead of throwing.
- [`isSafeTimeValue`](/en/v1/api/date/isSafeTimeValue) – Checks numeric bounds.
