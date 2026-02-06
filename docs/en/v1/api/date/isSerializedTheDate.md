---
outline: [2, 3]
description: "The isSerializedTheDate() function checks whether a string is a valid SerializedTheDate value."
prev:
  text: "serialize"
  link: "/en/v1/api/date/serialize"
next:
  text: "isSerializedTheTime"
  link: "/en/v1/api/date/isSerializedTheTime"
---

# isSerializedTheDate

The **`isSerializedTheDate()`** function checks whether a string is a valid `SerializedTheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/isSerializedTheDate/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function isSerializedTheDate(input: string): input is SerializedTheDate
```

## Parameters

- `input`: String to validate.

## Return value

`true` if the value matches `SerializedTheDate`, otherwise `false`.

## See also

- [`serialize`](/en/v1/api/date/serialize) - Converts `TheDate`/`TheTime` to serialized formats
- [`isSerializedTheTime`](/en/v1/api/date/isSerializedTheTime) - Checks serialized time values
