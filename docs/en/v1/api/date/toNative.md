---
outline: [2, 3]
description: "The toNative() function converts a TheDate to a JavaScript Date."
prev:
  text: "tomorrow"
  link: "/en/v1/api/date/tomorrow"
next:
  text: "toTimestamp"
  link: "/en/v1/api/date/toTimestamp"
---

# toNative

The **`toNative()`** function converts a `TheDate` to a JavaScript `Date`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/toNative/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function toNative<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): Date
```

## Parameters

- `input`: The immutable `TheDate` to convert.

## Return value

A standard JavaScript `Date` instance.

## See also

- [`toTimestamp`](/en/v1/api/date/toTimestamp)
- [`toISOString`](/en/v1/api/date/toISOString)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
