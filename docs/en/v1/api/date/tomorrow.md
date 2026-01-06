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

The **`tomorrow()`** function returns `now()` + 1 day as a `TheDate`.

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

A `TheDate` representing the next day at the same hour.

## See also

- [`today`](/en/v1/api/date/today)
- [`yesterday`](/en/v1/api/date/yesterday)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
