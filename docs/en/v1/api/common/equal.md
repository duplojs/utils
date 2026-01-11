---
outline: [2, 3]
description: "The equal() function compares a value to one or several literals. With primitives, it acts as a type guard and restricts the type to the provided values."
prev:
  text: "or"
  link: "/en/v1/api/common/or"
next:
  text: "isType"
  link: "/en/v1/api/common/isType"
---

# equal

The **`equal()`** function compares a value to one or several literals. With primitives, it acts as a type guard and restricts the type to the provided values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/equal/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
type EligibleEqual = string | null | number | undefined | bigint | boolean | symbol;

type ExpectLiteral<
	GenericInput extends EligibleEqual
> = Or<
	[
		UnionContain<GenericInput, string>,
		UnionContain<GenericInput, number>,
		UnionContain<GenericInput, boolean>,
		UnionContain<GenericInput, bigint>,
		UnionContain<GenericInput, symbol>
	]
> extends true ? never : GenericInput;
```

### Classic signatures

```typescript
// Type Guard predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	input: GenericInput,
	value: ExpectLiteral<GenericInput> | ExpectLiteral<GenericInput>[]
): input is GenericInput;

// Boolean predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	input: GenericInput,
	input: GenericInput | GenericInput[]
): boolean;
```

### Curried signatures

```typescript
// Type guard
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	value: ExpectLiteral<GenericInput> | ExpectLiteral<GenericInput>[]
): (input: GenericInput) => input is NoInfer<GenericInput>;

// Boolean predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	input: GenericInput | GenericInput[]
): (input: GenericInput) => boolean;
```

## Parameters

- `input` : Literal or array of allowed literals.
- `input` (direct overload) : Value to compare.

## Return value

A boolean (or a type guard for primitives) indicating whether the input matches one of the values.

## See also

- [`isType`](/en/v1/api/common/isType) - Generic type guard based on runtime type
- [`instanceOf`](/en/v1/api/common/instanceOf) - Checks an instance of a constructor
