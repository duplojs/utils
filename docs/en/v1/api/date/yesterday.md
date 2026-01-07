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

The **`yesterday()`** function returns `now()` - 1 day as a `TheDate`.

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

A `TheDate` representing the previous day at the same hour.

## See also

- [`today`](/en/v1/api/date/today)
- [`tomorrow`](/en/v1/api/date/tomorrow)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
