---
outline: [2, 3]
prev:
  text: "getSecond"
  link: "/en/v1/api/date/getSecond"
next:
  text: "getFirstDayOfWeek"
  link: "/en/v1/api/date/getFirstDayOfWeek"
---

# getMilliseconds

The **`getMilliseconds()`** function returns the milliseconds (0–999) of a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getMilliseconds/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

```typescript
function getMilliseconds<
	GenericInput extends TheDate
>(
	input: GenericInput
): number
```

## Parameters

- `input`: `TheDate` value.

## Return value

Milliseconds of the date (0–999).

## See also

- [`getSecond`](/en/v1/api/date/getSecond)
- [`toTimestamp`](/en/v1/api/date/toTimestamp)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds)
