---
outline: [2, 3]
description: "The getMonth() function returns the month (1–12) corresponding to a TheDate, with optional support for an IANA timezone."
prev:
  text: "getYear"
  link: "/en/v1/api/date/getYear"
next:
  text: "getDayOfMonth"
  link: "/en/v1/api/date/getDayOfMonth"
---

# getMonth

The **`getMonth()`** function returns the month (1–12) corresponding to a `TheDate`, with optional support for an IANA timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getMonth/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getMonth<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Parameters

- `input`: `TheDate` to analyze.
- `timezone`: (Optional) IANA timezone.

## Return value

An integer between 1 and 12 (January = 1).

## See also

- [`getDayOfMonth`](/en/v1/api/date/getDayOfMonth)
- [`getYear`](/en/v1/api/date/getYear)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)
