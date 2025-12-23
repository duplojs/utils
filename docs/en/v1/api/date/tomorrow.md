---
outline: [2, 3]
prev:
  text: "yesterday"
  link: "/en/v1/api/date/yesterday"
next:
  text: "toNative"
  link: "/en/v1/api/date/toNative"
---

# tomorrow

The **`tomorrow()`** function returns the start of the next day as a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/tomorrow/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function tomorrow(): TheDate
```

## Parameters

None.

## Return value

A `TheDate` set to midnight of the next day.

## See also

- [`today`](/en/v1/api/date/today) – Start of current day.
- [`yesterday`](/en/v1/api/date/yesterday) – Start of previous day.
