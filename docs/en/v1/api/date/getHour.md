---
outline: [2, 3]
description: "The getHour() function returns the hour (0–23) of a TheDate, adjusted by an optional timezone."
prev:
  text: "getDayOfYear"
  link: "/en/v1/api/date/getDayOfYear"
next:
  text: "getMinute"
  link: "/en/v1/api/date/getMinute"
---

# getHour

The **`getHour()`** function returns the hour (0–23) of a `TheDate`, adjusted by an optional timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getHour/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getHour<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	timezone: Timezone = "UTC"
): number
```

## Parameters

- `input`: `TheDate` or `SerializedTheDate`.
- `timezone`: IANA timezone. Default: `"UTC"`.

## Return value

An integer between 0 and 23.

## See also

- [`getMinute`](/en/v1/api/date/getMinute)
- [`getSecond`](/en/v1/api/date/getSecond)

## Sources

- [MDN Web Docs - Date.prototype.getUTCHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours)
