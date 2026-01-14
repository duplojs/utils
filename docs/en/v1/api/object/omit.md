---
outline: [2, 3]
description: "The omit() method creates a new object by excluding certain properties."
prev:
  text: "pick"
  link: "/en/v1/api/object/pick"
next:
  text: "assign"
  link: "/en/v1/api/object/assign"
---

# omit

The **`omit()`** method creates a new object by excluding certain properties.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/omit/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntax

### Classic signature

```typescript
function omit<
	GenericInput extends object,
	GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	input: GenericInput,
	omitValue: GenericOmitValue
): SimplifyTopLevel<Omit<GenericInput, ...>>
```

### Curried signature

```typescript
function omit<
	GenericInput extends object,
	GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	omitValue: GenericOmitValue
): (input: GenericInput) => SimplifyTopLevel<Omit<GenericInput, ...>>
```

## Parameters

- `input`: The source object.
- `omitValue`: The keys to exclude (array of keys or object with boolean values).

## Return value

A new object without the excluded properties.

## See also

- [`pick`](/en/v1/api/object/pick) - Creates an object by selecting certain properties
