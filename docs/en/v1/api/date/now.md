---
outline: [2, 3]
prev:
  text: "createOrThrow"
  link: "/en/v1/api/date/createOrThrow"
next:
  text: "today"
  link: "/en/v1/api/date/today"
---

# now

The **`now()`** function returns the exact current moment as a `TheDate` (positive Unix timestamp).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/now/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function now(): TheDate
```

## Parameters

None.

## Return value

A `TheDate` representing the current moment.

## See also

- [`today`](/en/v1/api/date/today) – Start of day.
- [`yesterday`](/en/v1/api/date/yesterday) – Previous day.

## Sources

- [MDN Web Docs - Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
