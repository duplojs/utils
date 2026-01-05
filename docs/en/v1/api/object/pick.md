---
outline: [2, 3]
description: "The pick() method creates a new object by selecting only certain properties."
prev:
  text: "getDeepProperty"
  link: "/en/v1/api/object/getDeepProperty"
next:
  text: "omit"
  link: "/en/v1/api/object/omit"
---

# pick

The **`pick()`** method creates a new object by selecting only certain properties.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/pick/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function pick<
	GenericInput extends object,
	GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	input: GenericInput,
	pickValue: GenericPickValue
): SimplifyTopLevel<Pick<GenericInput, ...>>
```

### Curried signature

```typescript
function pick<
	GenericInput extends object,
	GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	pickValue: GenericPickValue
): (input: GenericInput) => SimplifyTopLevel<Pick<GenericInput, ...>>
```

## Parameters

- `input`: The source object.
- `pickValue`: The keys to keep (array of keys or object with boolean values).

## Return value

A new object containing only the selected properties.

## See also

- [`omit`](/en/v1/api/object/omit) - Creates an object by excluding certain properties
