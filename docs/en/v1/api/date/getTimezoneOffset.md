---
outline: [2, 3]
description: "The getTimezoneOffset() function returns the millisecond offset between a TheDate and an IANA timezone."
prev:
  text: "isSafeTimeValue"
  link: "/en/v1/api/date/isSafeTimeValue"
next:
  text: "applyTimezone"
  link: "/en/v1/api/date/applyTimezone"
---

# getTimezoneOffset

The **`getTimezoneOffset()`** function returns the millisecond offset between a `TheDate` and an IANA timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getTimezoneOffset/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function getTimezoneOffset(
	timezone: Timezone
): (input: TheDate) => number
```

```typescript
function getTimezoneOffset(
	input: TheDate,
	timezone: Timezone
): number
```

## Parameters

- `input`: `TheDate` value (classic signature only).
- `timezone`: IANA timezone.

## Return value

Offset in milliseconds from UTC for the given timezone.

## See also

- [`applyTimezone`](/en/v1/api/date/applyTimezone)
- [`toTimestamp`](/en/v1/api/date/toTimestamp)
- [`toNative`](/en/v1/api/date/toNative)
