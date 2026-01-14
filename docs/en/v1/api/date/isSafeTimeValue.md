---
outline: [2, 3]
prev:
  text: "toTimeValue"
  link: "/en/v1/api/date/toTimeValue"
next:
  text: "getTimezoneOffset"
  link: "/en/v1/api/date/getTimezoneOffset"
---

# isSafeTimeValue

The **`isSafeTimeValue()`** function checks that a time value is a safe integer strictly between `minTimeValue` and `maxTimeValue`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/isSafeTimeValue/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function isSafeTimeValue(
	input: number
): boolean
```

## Parameters

- `input`: Numeric value to validate.

## Return value

`true` if the value is a safe integer within bounds, otherwise `false`.

## See also

- [`constants`](/en/v1/api/date/constants)
- [`toTimeValue`](/en/v1/api/date/toTimeValue)
