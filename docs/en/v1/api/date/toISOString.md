---
outline: [2, 3]
description: "The toISOString() function transforms a TheDate into an ISO 8601 string (YYYY-MM-DDTHH:mm:ss.sssZ)."
prev:
  text: "applyTimezone"
  link: "/en/v1/api/date/applyTimezone"
next:
  text: "format"
  link: "/en/v1/api/date/format"
---

# toISOString

The **`toISOString()`** function transforms a `TheDate` into an ISO 8601 string (`YYYY-MM-DDTHH:mm:ss.sssZ`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/toISOString/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function toISOString<
	GenericInput extends TheDate | SerializedTheDate
	>(
	input: GenericInput
): string
```

## Parameters

- `input`: The date to convert.

## Return value

An ISO 8601 string representing the date.

## See also

- [`toNative`](/en/v1/api/date/toNative)
- [`toTimestamp`](/en/v1/api/date/toTimestamp)

## Sources

- [MDN Web Docs - Date.prototype.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
