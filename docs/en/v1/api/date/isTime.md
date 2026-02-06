---
outline: [2, 3]
prev:
  text: "is"
  link: "/en/v1/api/date/is"
next:
  text: "getYear"
  link: "/en/v1/api/date/getYear"
---

# isTime

The **`isTime()`** function checks whether a value is an instance of `TheTime`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/isTime/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function isTime(input: unknown): input is TheTime
```

## Parameters

- `input`: Value to test.

## Return value

`true` if the value is an instance of `TheTime`, otherwise `false`.

## See also

- [`createTime`](/en/v1/api/date/createTime) - Builds a `TheTime` from native values
- [`is`](/en/v1/api/date/is) - Checks whether a value is a `TheDate`
