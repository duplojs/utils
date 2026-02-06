---
outline: [2, 3]
prev:
  text: "createOrThrow"
  link: "/en/v1/api/date/createOrThrow"
next:
  text: "createTimeOrThrow"
  link: "/en/v1/api/date/createTimeOrThrow"
---

# createTime

The **`createTime()`** function builds a `TheTime` from a millisecond value, a `SerializedTheTime`, or a structured time object. It also accepts an ISO time string via the `value` field.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/createTime/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntax

```typescript
function createTime(
	input: number & TimeConstraint,
	unit: Units
): TheTime

function createTime<
	GenericInput extends number | TheTime | SpoolingTime | SerializedTheTime
>(
	input: GenericInput
): MayBeTime
```

`TimeConstraint` ensures the strict `(number, unit)` overload only accepts literal values and that they stay within the supported bounds for each unit.

:::info
Use the strict overload for constants known in advance (tests, defaults). For dynamic values, prefer the overload that returns `MayBeTime`.
:::

## Parameters

- `input`: A millisecond value, a `TheTime`, a `SerializedTheTime`, or a `SpoolingTime` object (week, day, hour, minute, second, millisecond, value).
- `unit`: Required unit for numeric input when using the strict overload (`"millisecond"`, `"second"`, `"minute"`, `"hour"`, `"day"`, `"week"`).

## Return value

- `TheTime` when called with `(number, unit)` or with a `TheTime` input (returned as-is).
- `MayBeTime` (Either) when called with a number or `SpoolingTime`.

## See also

- [`create`](/en/v1/api/date/create) – Builds a `TheDate`.
- [`createTimeOrThrow`](/en/v1/api/date/createTimeOrThrow) – Throws instead of returning `MayBeTime`.
- [`toTimestamp`](/en/v1/api/date/toTimestamp) – Extracts the timestamp from a `TheDate`.
