---
outline: [2, 3]
description: "The serialize() function converts immutable TheDate/TheTime values into SerializedTheDate/SerializedTheTime string formats."
prev:
  text: "isSafeTimestamp"
  link: "/en/v1/api/date/isSafeTimestamp"
next:
  text: "isSerializedTheDate"
  link: "/en/v1/api/date/isSerializedTheDate"
---

# serialize

The **`serialize()`** function converts immutable date values into their serialized string formats:
- `TheDate` -> `SerializedTheDate`
- `TheTime` -> `SerializedTheTime`

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/serialize/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

```typescript
function serialize(input: TheDate): SerializedTheDate
function serialize(input: TheTime): SerializedTheTime
```

## Parameters

- `input`: A `TheDate` or `TheTime` value to serialize.

## Return value

The serialized string representation:
- `SerializedTheDate` for `TheDate`
- `SerializedTheTime` for `TheTime`

## See also

- [`isSerializedTheDate`](/en/v1/api/date/isSerializedTheDate) - Checks `SerializedTheDate` values
- [`isSerializedTheTime`](/en/v1/api/date/isSerializedTheTime) - Checks `SerializedTheTime` values
- [`createOrThrow`](/en/v1/api/date/createOrThrow) - Builds immutable values from inputs
