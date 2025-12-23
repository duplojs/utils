---
outline: [2, 3]
prev:
  text: "today"
  link: "/en/v1/api/date/today"
next:
  text: "tomorrow"
  link: "/en/v1/api/date/tomorrow"
---

# yesterday

The **`yesterday()`** function returns the start of the previous day as a `TheDate`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/yesterday/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function yesterday(): TheDate
```

## Parameters

None.

## Return value

A `TheDate` set to midnight of the previous day.

## See also

- [`today`](/en/v1/api/date/today) – Start of current day.
- [`tomorrow`](/en/v1/api/date/tomorrow) – Start of next day.
