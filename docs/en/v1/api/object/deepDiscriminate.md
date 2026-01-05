---
outline: [2, 3]
description: "The deepDiscriminate() method discriminates an object by the value of a deep property (type guard for unions)."
prev:
  text: "discriminate"
  link: "/en/v1/api/object/discriminate"
next:
  text: "Object"
  link: "/en/v1/api/object/"
---

# deepDiscriminate

The **`deepDiscriminate()`** method discriminates an object by the value of a deep property (type guard for unions).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/deepDiscriminate/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericInput extends EligibleEqual
>(
	input: GenericInput,
	path: GenericPath,
	value: (MaybeArray<(GenericInput & GenericObjectProjection[GenericPath])> | MaybeArray<GenericObjectProjection[GenericPath]>)
): input is Extract<GenericInput, UnFlatObject<{
	[Prop in GenericPath]: GenericInput;
}>>
```

### Curried signature

```typescript
function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericInput extends EligibleEqual
>(
	path: GenericPath,
	value: ...
): (input: GenericInput) => input is Extract<GenericInput, UnFlatObject<{
	[Prop in GenericPath]: GenericInput;
}>>
```

## Parameters

- `input`: The object to discriminate (often a union type).
- `path`: The path to the discriminant property (e.g. "user.role").
- `input`: The expected value (or array of values) for discrimination.

## Return value

A boolean that acts as a type guard to narrow the union type.

## See also

- [`discriminate`](/en/v1/api/object/discriminate) - Discriminates by a top-level property
- [`getDeepProperty`](/en/v1/api/object/getDeepProperty) - Retrieves a deep property
