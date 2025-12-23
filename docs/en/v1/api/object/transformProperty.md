---
outline: [2, 3]
prev:
  text: "override"
  link: "/en/v1/api/object/override"
next:
  text: "transformProperties"
  link: "/en/v1/api/object/transformProperties"
---

# transformProperty

The **`transformProperty()`** method transforms a specific property of an object via a function.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/transformProperty/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntax

### Classic signature

```typescript
function transformProperty<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericNewValue extends unknown
>(
	input: GenericInput,
	key: GenericKey,
	transform: (value: GenericInput[GenericKey]) => GenericNewValue
): SimplifyTopLevel<{
	[Prop in GenericKey]: GenericNewValue;
} & Omit<GenericInput, GenericKey>>
```

### Curried signature

```typescript
function transformProperty<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericNewValue extends unknown
>(
	key: GenericKey,
	transform: (value: GenericInput[GenericKey]) => GenericNewValue
): (input: GenericInput) => SimplifyTopLevel<...>
```

## Parameters

- `input`: The source object.
- `key`: The key of the property to transform.
- `transform`: The transformation function that takes the old value and returns the new one.

## Return value

A new object with the transformed property.

## See also

- [`transformProperties`](/en/v1/api/object/transformProperties) - Transforms multiple properties at once
