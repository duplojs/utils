---
outline: [2, 3]
description: "The truthy() function is a type guard that keeps only truthy values (false, 0, \"\", null, undefined are excluded)."
prev:
  text: "hasSomeKinds"
  link: "/en/v1/api/common/hasSomeKinds"
next:
  text: "falsy"
  link: "/en/v1/api/common/falsy"
---

# truthy

The **`truthy()`** function is a type guard that keeps only truthy values (`false`, `0`, `""`, `null`, `undefined` are excluded).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/truthy/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

```typescript
function truthy<
	GenericInput extends unknown,
>(
	input: GenericInput
): input is TruthyValue<GenericInput>;
```

## Parameters

- `input`: Value to test.

## Return value

A type guard that is true when `input` is truthy.

## See also

- [`falsy`](/en/v1/api/common/falsy) - Keep only falsy values
- [`isType`](/en/v1/api/common/isType) - Runtime type guard
