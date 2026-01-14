---
outline: [2, 3]
description: "The falsy() function is a type guard that keeps only falsy values (false, 0, \"\", null, undefined)."
prev:
  text: "truthy"
  link: "/en/v1/api/common/truthy"
next:
  text: "loop"
  link: "/en/v1/api/common/loop"
---

# falsy

The **`falsy()`** function is a type guard that keeps only falsy values (`false`, `0`, `""`, `null`, `undefined`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/falsy/tryout.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Syntax

```typescript
function falsy<
	GenericInput extends unknown,
>(
	input: GenericInput
): input is Extract<GenericInput, FalsyValue>;
```

## Parameters

- `input`: Value to test.

## Return value

A type guard that is true when `input` is falsy.

## See also

- [`truthy`](/en/v1/api/common/truthy) - Keep only truthy values
- [`isType`](/en/v1/api/common/isType) - Runtime type guard
