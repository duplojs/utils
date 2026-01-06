---
outline: [2, 3]
prev:
  text: "format"
  link: "/en/v1/api/date/format"
next:
  text: "is"
  link: "/en/v1/api/date/is"
---

# isSafeTimestamp

The **`isSafeTimestamp()`** function checks that a timestamp is between `minTimestamp` and `maxTimestamp`, the limits imposed by the JavaScript engine.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/isSafeTimestamp/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

```typescript
function isSafeTimestamp(
	input: number
): boolean
```

## Parameters

- `input`: Timestamp in milliseconds.

## Return value

`true` if the value can be used by `Date`, otherwise `false`.

## See also

- [`constants`](/en/v1/api/date/constants)
- [`createOrThrow`](/en/v1/api/date/createOrThrow)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
