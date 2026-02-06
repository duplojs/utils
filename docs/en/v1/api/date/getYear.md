---
outline: [2, 3]
description: "The getYear() function returns the year corresponding to a TheDate. An IANA timezone can be provided to adjust the result."
prev:
  text: "isTime"
  link: "/en/v1/api/date/isTime"
next:
  text: "getMonth"
  link: "/en/v1/api/date/getMonth"
---

# getYear

The **`getYear()`** function returns the year corresponding to a `TheDate`. An IANA timezone can be provided to adjust the result.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/getYear/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getYear<
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

The year (integer) corresponding to the date in the requested timezone.

## See also

- [`getMonth`](/en/v1/api/date/getMonth)
- [`getDayOfMonth`](/en/v1/api/date/getDayOfMonth)

## Sources

- [MDN Web Docs - Date.prototype.getUTCFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)
