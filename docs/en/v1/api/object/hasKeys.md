---
outline: [2, 3]
description: "The hasKeys() method checks whether an object has certain keys (type guard)."
prev:
  text: "to"
  link: "/en/v1/api/object/to"
next:
  text: "discriminate"
  link: "/en/v1/api/object/discriminate"
---

# hasKeys

The **`hasKeys()`** method checks whether an object has certain keys (type guard).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/hasKeys/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntax

### Classic signature

```typescript
function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject
>(
	partialObject: GenericObject,
	keys: GenericKeys | GenericKeys[]
): partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>
```

### Curried signature

```typescript
function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject
>(
	keys: GenericKeys | GenericKeys[]
): (partialObject: GenericObject) => partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>
```

## Parameters

- `partialObject`: The object to check (may have optional properties).
- `keys`: The key or keys whose presence you want to verify.

## Return value

A boolean indicating whether the keys are present. Acts as a type guard that narrows the type.

## See also

- [`discriminate`](/en/v1/api/object/discriminate) - Discriminates an object by the value of a property
