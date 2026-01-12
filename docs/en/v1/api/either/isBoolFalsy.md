---
outline: [2, 3]
description: "Type guard that detects an EitherBoolFalsy."
prev:
  text: "whenIsBoolTruthy"
  link: "/en/v1/api/either/whenIsBoolTruthy"
next:
  text: "whenIsBoolFalsy"
  link: "/en/v1/api/either/whenIsBoolFalsy"
---

# isBoolFalsy

Type guard that detects an `EitherBoolFalsy`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isBoolFalsy/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntax

```typescript
function isBoolFalsy<
	GenericInput extends unknown>(
  input: GenericInput
): input is Extract<GenericInput, EitherBoolFalsy>;
```

## Parameters

- `input`: Value coming from the boolean helpers.

## Return value

`true` if the value is falsy (`Left`).

## See also

- [`whenIsBoolFalsy`](/en/v1/api/either/whenIsBoolFalsy).
- [`isBoolTruthy`](/en/v1/api/either/isBoolTruthy).
