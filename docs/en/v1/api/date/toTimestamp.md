---
outline: [2, 3]
prev:
  text: "toNative"
  link: "/en/v1/api/date/toNative"
next:
  text: "getTimezoneOffset"
  link: "/en/v1/api/date/getTimezoneOffset"
---

# toTimestamp

The **`toTimestamp()`** function returns the millisecond timestamp of a `TheDate`. It throws `InvalidTheDateError` if the value is inconsistent.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/toTimestamp/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

```typescript
function toTimestamp<
	GenericInput extends TheDate
>(
	input: GenericInput
): number
```

## Parameters

- `input`: The date to convert.

## Return value

The timestamp in milliseconds since January 1, 1970 UTC.

## See also

- [`isSafeTimestamp`](/en/v1/api/date/isSafeTimestamp)
- [`toNative`](/en/v1/api/date/toNative)

## Sources

- [MDN Web Docs - Date.getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
