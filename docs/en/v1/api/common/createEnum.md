---
outline: [2, 3]
description: "The createEnum() function creates an immutable, typed string enum. The returned object exposes the keys/values, the has method, and toTuple."
prev:
  text: "simpleClone"
  link: "/en/v1/api/common/simpleClone"
next:
  text: "globalStore"
  link: "/en/v1/api/common/globalStore"
---

# createEnum

The **`createEnum()`** function creates an immutable, typed string enum. The returned object exposes the keys/values, the `has` method, and `toTuple`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/createEnum/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntax

```typescript
type Enum<
	GenericInputs extends [string, ...string[]]
> = {
	[Prop in GenericInputs[number]]: Prop;
} & {
	toTuple(): GenericInputs;
	has(value: string): value is GenericInputs[number];
};

function createEnum<
	GenericInput extends string,
	GenericInputs extends [GenericInput, ...GenericInput[]]
>(
	values: GenericInputs
): Enum<GenericInputs>;

type GetEnumValue<
	GenericEnum extends Enum<any>
> = ReturnType<GenericEnum["toTuple"]>[number];
```

## Parameters

- `values` : Non-empty tuple of strings (the enum members).

## Return value

An immutable enum object with:
- The named properties (same key/value).
- `toTuple()` to retrieve the typed tuple.
- `has(value)` to test a runtime value with a type guard.

## See also

- [`kind`](/en/v1/api/common/kind) - Runtime/type tags
