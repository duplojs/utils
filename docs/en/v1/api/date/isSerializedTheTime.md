---
outline: [2, 3]
description: "The isSerializedTheTime() function checks whether a string is a valid SerializedTheTime value."
prev:
  text: "isSerializedTheDate"
  link: "/en/v1/api/date/isSerializedTheDate"
next:
  text: "is"
  link: "/en/v1/api/date/is"
---

# isSerializedTheTime

The **`isSerializedTheTime()`** function checks whether a string is a valid `SerializedTheTime`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/isSerializedTheTime/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function isSerializedTheTime(input: string): input is SerializedTheTime
```

## Parameters

- `input`: String to validate.

## Return value

`true` if the value matches `SerializedTheTime`, otherwise `false`.

## See also

- [`serialize`](/en/v1/api/date/serialize) - Converts `TheDate`/`TheTime` to serialized formats
- [`isSerializedTheDate`](/en/v1/api/date/isSerializedTheDate) - Checks serialized date values
