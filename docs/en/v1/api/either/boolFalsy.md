---
outline: [2, 3]
description: "Builds an Left<\"bool\"> for an explicitly falsy value (0, \"\", null, undefined, false)."
prev:
  text: "boolTruthy"
  link: "/en/v1/api/either/boolTruthy"
next:
  text: "isBoolTruthy"
  link: "/en/v1/api/either/isBoolTruthy"
---

# boolFalsy

Builds an `Left<"bool">` for an explicitly falsy value (`0`, `""`, `null`, `undefined`, `false`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/boolFalsy/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntax

```typescript
function boolFalsy<
	const GenericInput extends BoolFalsyValue = undefined
>(
  input?: GenericInput
): BoolFalsy<GenericInput>;
```

## Parameters

- `input`: Falsy value (optional).

## Return value

An `Left<"bool", GenericInput>` allowing you to represent an explicit false.

## See also

- [`bool`](/en/v1/api/either/bool) – Automatic truthy/falsy conversion.
- [`whenIsBoolFalsy`](/en/v1/api/either/whenIsBoolFalsy) – To trigger an action on falsy values.
