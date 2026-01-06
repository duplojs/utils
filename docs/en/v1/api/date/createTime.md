---
outline: [2, 3]
prev:
  text: "createOrThrow"
  link: "/en/v1/api/date/createOrThrow"
next:
  text: "now"
  link: "/en/v1/api/date/now"
---

# createTime

The **`createTime()`** function builds a `TheTime` from a millisecond value or from a structured time object. It also accepts an ISO time string via the `value` field.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/createTime/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function createTime(
	input: number,
	unit?: keyof SpoolingTime
): TheTime

function createTime<
	GenericInput extends SpoolingTime
>(
	input: GenericInput
): TheTime
```

## Parameters

- `input`: A millisecond value or a `SpoolingTime` object (week, day, hour, minute, second, millisecond, value).
- `unit`: Optional unit for numeric input. Defaults to `"millisecond"`.

## Return value

A `TheTime` string representing the computed duration.

## See also

- [`create`](/en/v1/api/date/create) – Builds a `TheDate`.
- [`toTimestamp`](/en/v1/api/date/toTimestamp) – Extracts the timestamp from a `TheDate`.
