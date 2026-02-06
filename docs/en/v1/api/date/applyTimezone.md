---
outline: [2, 3]
description: "The applyTimezone() function shifts a TheDate by applying the offset of an IANA timezone."
prev:
  text: "getTimezoneOffset"
  link: "/en/v1/api/date/getTimezoneOffset"
next:
  text: "toISOString"
  link: "/en/v1/api/date/toISOString"
---

# applyTimezone

The **`applyTimezone()`** function shifts a `TheDate` by applying the offset of an IANA timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/applyTimezone/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function applyTimezone(
	timezone: Timezone
): (input: TheDate | SerializedTheDate) => TheDate
```

```typescript
function applyTimezone(
	input: TheDate | SerializedTheDate,
	timezone: Timezone
): TheDate
```

## Parameters

- `input`: `TheDate` value (classic signature only).
- `timezone`: IANA timezone.

## Return value

A `TheDate` shifted to the requested timezone.

## See also

- [`getTimezoneOffset`](/en/v1/api/date/getTimezoneOffset)
- [`toTimestamp`](/en/v1/api/date/toTimestamp)
