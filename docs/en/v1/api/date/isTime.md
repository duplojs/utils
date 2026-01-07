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

The **`isTime()`** function checks that a string matches the `TheTime` format (`time<timestamp><"-" | "+">`). It acts as a type guard.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/isTime/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function isTime(input: string): input is TheTime
```

## Parameters

- `input`: String to validate.

## Return value

`true` if the string follows the `TheTime` format, otherwise `false`. When `true`, TypeScript narrows `input` to `TheTime`.

## See also

- [`createTime`](/en/v1/api/date/createTime) - Builds a `TheTime` from native values
- [`is`](/en/v1/api/date/is) - Checks the `TheDate` format
