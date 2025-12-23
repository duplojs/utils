---
outline: [2, 3]
prev:
  text: "isWrappedValue"
  link: "/en/v1/api/common/isWrappedValue"
next:
  text: "toWrappedValue"
  link: "/en/v1/api/common/toWrappedValue"
---

# isRuntimeWrappedValueKey

The **`isRuntimeWrappedValueKey()`** function checks whether a string key matches the runtime marker of a `WrappedValue` (`@duplojs/utils/value`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/isRuntimeWrappedValueKey/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function isRuntimeWrappedValueKey(value: string): boolean;
```

## Parameters

- `input` : String to compare to the runtime marker of wrapped values.

## Return value

A boolean indicating whether the string matches the `WrappedValue` marker.

## See also

- [`wrapValue`](/en/v1/api/common/wrapValue) - Wraps a value
- [`isWrappedValue`](/en/v1/api/common/isWrappedValue) - Type guard on wrapped values
