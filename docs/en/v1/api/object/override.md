---
outline: [2, 3]
description: "The override() method replaces the properties of an object with those of another, ignoring undefined values."
prev:
  text: "assign"
  link: "/en/v1/api/object/assign"
next:
  text: "transformProperty"
  link: "/en/v1/api/object/transformProperty"
---

# override

The **`override()`** method replaces the properties of an object with those of another, ignoring undefined values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/override/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function override<
	GenericInput extends object
>(
	input: GenericInput,
	value: Partial<NoInfer<GenericInput>>
): GenericInput
```

### Curried signature

```typescript
function override<
	GenericInput extends object
>(
	value: Partial<NoInfer<GenericInput>>
): (input: GenericInput) => GenericInput
```

## Parameters

- `input`: The base object.
- `value`: A partial object containing the properties to replace.

## Return value

A new object with the properties replaced (undefined values are ignored).

## See also

- [`assign`](/en/v1/api/object/assign) - Merges multiple objects together
