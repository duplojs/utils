---
outline: [2, 3]
prev:
  text: "create"
  link: "/en/v1/api/date/create"
next:
  text: "now"
  link: "/en/v1/api/date/now"
---

# createOrThrow

The **`createOrThrow()`** function builds a `TheDate` from a `TheDate`, a `Date`, or a timestamp. It throws `CreateTheDateError` when the input is invalid.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/createOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function createOrThrow<
	GenericInput extends TheDate | Date | number
>(
	input: GenericInput
): TheDate
```

## Parameters

- `input`: A date (`TheDate`), a JavaScript `Date`, or a timestamp.

## Return value

A valid `TheDate`. If the timestamp is out of bounds or the value is inconsistent, a `CreateTheDateError` is thrown.

## See also

- [`create`](/en/v1/api/date/create) – Returns an `Either` instead of throwing.
- [`isSafeTimestamp`](/en/v1/api/date/isSafeTimestamp) – Checks a timestamp before conversion.

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
