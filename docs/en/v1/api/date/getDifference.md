---
outline: [2, 3]
description: "The getDifference() function returns the difference between two dates as a TheTime duration."
prev:
  text: "toTimestamp"
  link: "/en/v1/api/date/toTimestamp"
next:
  text: "toTimeValue"
  link: "/en/v1/api/date/toTimeValue"
---

# getDifference

The **`getDifference()`** function returns the time difference between two dates as a `TheTime`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getDifference/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntax

### Classic signature

```typescript
function getDifference(
	input: TheDate | SerializedTheDate,
	reference: TheDate | SerializedTheDate
): TheTime
```

### Curried signature

```typescript
function getDifference(
	reference: TheDate | SerializedTheDate
): (input: TheDate | SerializedTheDate) => TheTime
```

## Parameters

- `input`: Date to compare (`TheDate` or `SerializedTheDate`).
- `reference`: Reference date (`TheDate` or `SerializedTheDate`).

## Return value

A `TheTime` containing `input - reference` in milliseconds.

## See also

- [`toTimestamp`](/en/v1/api/date/toTimestamp)
- [`toTimeValue`](/en/v1/api/date/toTimeValue)
- [`TheTime`](/en/v1/api/date/theTime)
