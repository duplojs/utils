---
outline: [2, 3]
prev:
  text: "now"
  link: "/en/v1/api/date/now"
next:
  text: "yesterday"
  link: "/en/v1/api/date/yesterday"
---

# today

The **`today()`** function returns the start of the current day (midnight) as a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/today/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function today(): TheDate
```

## Parameters

None.

## Return value

A `TheDate` set to midnight of the current day.

## See also

- [`yesterday`](/en/v1/api/date/yesterday) – Start of previous day.
- [`tomorrow`](/en/v1/api/date/tomorrow) – Start of next day.
