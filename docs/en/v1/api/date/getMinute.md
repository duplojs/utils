---
outline: [2, 3]
prev:
  text: "getHour"
  link: "/en/v1/api/date/getHour"
next:
  text: "getSecond"
  link: "/en/v1/api/date/getSecond"
---

# getMinute

The **`getMinute()`** function returns the minutes (0–59) of a `TheDate`, with an optional IANA timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getMinute/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function getMinute<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Parameters

- `input`: Target `TheDate`.
- `timezone`: Time zone (optional).

## Return value

Minute (0–59).

## See also

- [`getHour`](/en/v1/api/date/getHour)
- [`getSecond`](/en/v1/api/date/getSecond)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes)
