---
outline: [2, 3]
description: "The discriminate() method discriminates an object by the value of a property (type guard for unions)."
prev:
  text: "hasKeys"
  link: "/en/v1/api/object/hasKeys"
next:
  text: "deepDiscriminate"
  link: "/en/v1/api/object/deepDiscriminate"
---

# discriminate

The **`discriminate()`** method discriminates an object by the value of a property (type guard for unions).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/discriminate/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Syntax

### Classic signature

```typescript
function discriminate<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericInput extends EligibleEqual
>(
	input: GenericInput,
	key: GenericKey,
	value: (MaybeArray<(GenericInput & Extract<GenericInput[GenericKey], EligibleEqual>)> | MaybeArray<Extract<GenericInput[GenericKey], EligibleEqual>>)
): input is Extract<GenericInput, {
	[Prop in GenericKey]: GenericInput;
}>
```

### Curried signature

```typescript
function discriminate<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericInput extends EligibleEqual
>(
	key: GenericKey,
	value: ...
): (input: GenericInput) => input is Extract<GenericInput, {
	[Prop in GenericKey]: GenericInput;
}>
```

## Parameters

- `input`: The object to discriminate (often a union type).
- `key`: The key of the discriminant property.
- `input`: The expected value (or array of values) for discrimination.

## Return value

A boolean that acts as a type guard to narrow the union type.

## See also

- [`deepDiscriminate`](/en/v1/api/object/deepDiscriminate) - Discriminates by a deep property
- [`hasKeys`](/en/v1/api/object/hasKeys) - Checks for the presence of keys
