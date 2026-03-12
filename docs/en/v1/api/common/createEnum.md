---
outline: [2, 3]
description: "The createEnum() function creates an immutable, typed string enum with key/value members, has(), toTuple(), and contract()."
prev:
  text: "simpleClone"
  link: "/en/v1/api/common/simpleClone"
next:
  text: "createTransformer"
  link: "/en/v1/api/common/createTransformer"
---

# createEnum

The **`createEnum()`** function creates an immutable, typed string enum. The returned object exposes each value as a key, plus `has()`, `toTuple()`, and `contract()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/createEnum/tryout.doc.ts"
  majorVersion="v1"
  height="817px"
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
	contract<
		GenericContractValue extends GenericInputs[number]
	>(
		...args: ...
	): Enum<GenericInputs>;
};

function createEnum<
	GenericInput extends string,
	GenericInputs extends [GenericInput, ...GenericInput[]]
>(
	values: GenericInputs
): Enum<GenericInputs>;

type GetEnumValue<
	GenericEnum extends { toTuple(): [string, ...string[]] }
> = ReturnType<GenericEnum["toTuple"]>[number];
```

## Parameters

- `values` : Non-empty tuple of strings (the enum members).

## Return value

An immutable enum object with:
- The named properties (same key/value).
- `toTuple()` to retrieve the typed tuple.
- `has(value)` to test a runtime value with a type guard.
- `contract<...>()` to verify at type level that the enum exactly matches an expected union.

## See also

- [`kind`](/en/v1/api/common/kind) - Runtime/type tags
