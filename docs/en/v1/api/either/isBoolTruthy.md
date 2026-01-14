---
outline: [2, 3]
description: "Type guard that checks whether an Either from the boolean helpers is truthy."
prev:
  text: "boolFalsy"
  link: "/en/v1/api/either/boolFalsy"
next:
  text: "whenIsBoolTruthy"
  link: "/en/v1/api/either/whenIsBoolTruthy"
---

# isBoolTruthy

Type guard that checks whether an `Either` from the boolean helpers is truthy.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isBoolTruthy/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function isBoolTruthy<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherBoolTruthy>;
```

## Parameters

- `input`: Result of `E.bool`, `boolTruthy`, etc.

## Return value

`true` if the value is an `EitherBoolTruthy`. Allows refining the type before manipulating the value.

## See also

- [`whenIsBoolTruthy`](/en/v1/api/either/whenIsBoolTruthy) – Functional version.
- [`isBoolFalsy`](/en/v1/api/either/isBoolFalsy) – Falsy counterpart.
