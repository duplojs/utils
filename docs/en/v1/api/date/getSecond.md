---
outline: [2, 3]
description: "The getSecond() function returns the seconds (0–59) of a TheDate, adjusted by an optional time zone."
prev:
  text: "getMinute"
  link: "/en/v1/api/date/getMinute"
next:
  text: "getMilliseconds"
  link: "/en/v1/api/date/getMilliseconds"
---

# getSecond

The **`getSecond()`** function returns the seconds (0–59) of a `TheDate`, adjusted by an optional time zone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getSecond/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function getSecond<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Parameters

- `input`: Target `TheDate`.
- `timezone`: IANA zone (optional).

## Return value

Seconds between 0 and 59.

## See also

- [`getMinute`](/en/v1/api/date/getMinute)
- [`getMilliseconds`](/en/v1/api/date/getMilliseconds)

## Sources

- [MDN Web Docs - Date.prototype.getUTCSeconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds)
