---
outline: [2, 3]
description: "The and() function combines several predicates or type guards. All must succeed for the result to be true and the type to be narrowed to the intersection."
prev:
  text: "whenElse"
  link: "/en/v1/api/common/whenElse"
next:
  text: "or"
  link: "/en/v1/api/common/or"
---

# and

The **`and()`** function combines several predicates or type guards. All must succeed for the result to be true and the type to be narrowed to the intersection.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/and/tryout.doc.ts"
  majorVersion="v1"
  height="1090px"
  :foldLines="[3, 11]"
/>

## Syntax

### Classic signature

```typescript
// Type Guard predicate
function and<
	GenericInput extends unknown,
	GenericArrayPredicatedInput extends [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	input: GenericInput,
	predicatedList: GenericArrayPredicatedInput
): input is ComputeResult<GenericInput, GenericArrayPredicatedInput>;

// Boolean predicate
function and<
	GenericInput extends unknown
>(
	input: GenericInput,
	predicatedList: [
		(input: GenericInput) => boolean,
		(input: GenericInput) => boolean,
		...((input: GenericInput) => boolean)[]
	]
): boolean;
```

### Curried signature

```typescript
// Type Guard predicate
function and<
	GenericInput extends unknown,
	GenericArrayPredicatedInput extends [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	predicatedList: GenericArrayPredicatedInput
): (input: GenericInput) => input is ComputeResult<GenericInput, GenericArrayPredicatedInput>;

// Boolean predicate
function and<
	GenericInput extends unknown
>(
	predicatedList: [
		(input: GenericInput) => boolean,
		(input: GenericInput) => boolean,
		...((input: GenericInput) => boolean)[]
	]
): (input: GenericInput) => boolean;
```

## Parameters

- `predicates` : Array of functions testing the input (can be type guards).
- `input` (direct overload) : Tested value.

## Return value

A boolean (or a type guard if the predicates are) true only if all predicates pass.

## See also

- [`or`](/en/v1/api/common/or) - Union of predicates
