---
outline: [2, 3]
prev:
  text: "toTimestamp"
  link: "/en/v1/api/date/toTimestamp"
next:
  text: "isSafeTimestamp"
  link: "/en/v1/api/date/isSafeTimestamp"
---

# toISOString

The **`toISOString()`** function transforms a `TheDate` into an ISO 8601 string (`YYYY-MM-DDTHH:mm:ss.sssZ`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/toISOString/tryout.doc.ts"
  majorVersion="v1"
  height="270px"
/>

## Syntax

```typescript
function toISOString<
	GenericInput extends TheDate
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
