---
outline: [2, 3]
description: "The is() function checks whether a value is an instance of TheDate. It acts as a type guard."
prev:
  text: "isSafeTimestamp"
  link: "/en/v1/api/date/isSafeTimestamp"
next:
  text: "isTime"
  link: "/en/v1/api/date/isTime"
---

# is

The **`is()`** function checks whether a value is an instance of `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/is/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function is(input: unknown): input is TheDate
```

## Parameters

- `input`: Value to test.

## Return value

`true` if the value is an instance of `TheDate`, otherwise `false`.

## See also

- [`create`](/en/v1/api/date/create) - Builds a `TheDate` from native values
- [`isSafeTimestamp`](/en/v1/api/date/isSafeTimestamp) - Checks the timestamp range
