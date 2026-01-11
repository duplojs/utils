---
outline: [2, 3]
description: "Forces the creation of an EitherRight<\"bool\"> by explicitly marking a truthy value."
prev:
  text: "bool"
  link: "/en/v1/api/either/bool"
next:
  text: "boolFalsy"
  link: "/en/v1/api/either/boolFalsy"
---

# boolTruthy

Forces the creation of an `EitherRight<"bool">` by explicitly marking a truthy value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/boolTruthy/tryout.doc.ts"
  majorVersion="v1"
  height="380px"
/>

## Syntax

```typescript
function boolTruthy<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherBoolTruthy<GenericInput>;
```

## Parameters

- `input`: Value considered truthy.

## Return value

An `EitherRight<"bool", GenericInput>` guaranteeing that the `Right` branch represents the truthy case.

## See also

- [`bool`](/en/v1/api/either/bool) – Automatic truthy/falsy conversion.
- [`whenIsBoolTruthy`](/en/v1/api/either/whenIsBoolTruthy) – Act only on truthy values.
