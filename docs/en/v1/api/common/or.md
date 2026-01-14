---
outline: [2, 3]
description: "The or() function combines several predicates or type guards: if at least one passes, the result is true and the type is narrowed to the union of accepted cases."
prev:
  text: "and"
  link: "/en/v1/api/common/and"
next:
  text: "equal"
  link: "/en/v1/api/common/equal"
---

# or

The **`or()`** function combines several predicates or type guards: if at least one passes, the result is true and the type is narrowed to the union of accepted cases.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/or/tryout.doc.ts"
  majorVersion="v1"
  height="859px"
   :foldLines="[2]"
/>

## Syntax

```typescript
type ExtractPredicate<
	GenericPredicatedInput extends readonly AnyFunction<any[], boolean>[]
> = GenericPredicatedInput extends readonly [
	(input: any, ...args: any[]) => input is infer InferredPredicate,
	...infer InferredRest extends readonly AnyPredicate[]
] ? InferredRest extends readonly []
	? InferredPredicate
	: ExtractPredicate<InferredRest> extends infer InferredResult
		? IsEqual<InferredResult, never> extends true
			? never
			: InferredPredicate | InferredResult
		: never
	: never;
```

### Classic signatures

```typescript
// Type Guard predicate
function or<
	GenericInput extends unknown,
	const GenericArrayPredicatedInput extends readonly [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	input: GenericInput,
	predicatedList: GenericArrayPredicatedInput
): input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;

// Boolean predicate
function or<
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

### Curried signatures

```typescript
// Type Guard predicate
function or<
	GenericInput extends unknown,
	const GenericArrayPredicatedInput extends readonly [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	predicatedList: GenericArrayPredicatedInput
): (input: GenericInput) => input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;

// Boolean predicate
function or<
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

- `predicatedList` : Array of functions testing the input (can be type guards).
- `input` (direct overload) : Tested value.

## Return value

A boolean (or a type guard if the predicates are) true if at least one predicate passes.

## See also

- [`and`](/en/v1/api/common/and) - Intersection of predicates
