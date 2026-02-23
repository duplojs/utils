---
outline: [2, 3]
description: "The toNative() function converts TheDate/TheTime values to native JavaScript Date/number."
prev:
  text: "tomorrow"
  link: "/en/v1/api/date/tomorrow"
next:
  text: "toTimestamp"
  link: "/en/v1/api/date/toTimestamp"
---

# toNative

The **`toNative()`** function converts date/time values to their native JavaScript representation.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/toNative/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function toNative<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): Date

function toNative<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput
): number
```

## Parameters

- `input`: A value among `TheDate`, `SerializedTheDate`, `TheTime`, or `SerializedTheTime`.

## Return value

- `Date` for date inputs.
- `number` for time inputs.

## See also

- [`toTimestamp`](/en/v1/api/date/toTimestamp)
- [`toTimeValue`](/en/v1/api/date/toTimeValue)
- [`toISOString`](/en/v1/api/date/toISOString)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
