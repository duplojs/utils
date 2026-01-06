---
outline: [2, 3]
prev:
  text: "isSafeTimestamp"
  link: "/en/v1/api/date/isSafeTimestamp"
next:
  text: "isTime"
  link: "/en/v1/api/date/isTime"
---

# is

The **`is()`** function checks that a string matches the `TheDate` format (`date<timestamp><"-" | "+">`). It acts as a type guard.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/is/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function is(input: string): input is TheDate
```

## Parameters

- `input`: String to validate.

## Return value

`true` if the string follows the `TheDate` format, otherwise `false`. When `true`, TypeScript narrows `input` to `TheDate`.

## See also

- [`create`](/en/v1/api/date/create) - Builds a `TheDate` from native values
- [`isSafeTimestamp`](/en/v1/api/date/isSafeTimestamp) - Checks the timestamp range
