---
outline: [2, 3]
description: "The isType() function creates a type guard based on typeof, Array.isArray, iterables, functions, etc. It allows narrowing a union to the checked type."
prev:
  text: "equal"
  link: "/en/v1/api/common/equal"
next:
  text: "asserts"
  link: "/en/v1/api/common/asserts"
---

# isType

The **`isType()`** function creates a type guard based on `typeof`, `Array.isArray`, iterables, functions, etc. It allows narrowing a union to the checked type.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/isType/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

### Classic signature

```typescript
function isType<
	GenericInput extends unknown,
	GenericType extends EligibleType<GenericInput>
>(
	input: GenericInput,
	type: GenericType
): input is ComputeResult<GenericInput, Type[GenericType]>;
```

### Curried signature

```typescript
function isType<
	GenericInput extends unknown,
	GenericType extends EligibleType<GenericInput>
>(
	type: GenericType
): (input: GenericInput) => input is ComputeResult<GenericInput, Type[GenericType]>;
```

## Parameters

- `type` : The runtime type to check.
- `input` (direct overload) : Tested value.

## Return value

A boolean acting as a type guard by narrowing the union to the requested type.

## See also

- [`instanceOf`](/en/v1/api/common/instanceOf) - Checks via a constructor
- [`equal`](/en/v1/api/common/equal) - Comparison to literals
