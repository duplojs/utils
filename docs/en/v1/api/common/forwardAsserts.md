---
outline: [2, 3]
description: "The forwardAsserts() function validates an input with a predicate, throws on failure, and returns the validated value. It supports classic and curried forms."
prev:
  text: "asserts"
  link: "/en/v1/api/common/asserts"
next:
  text: "instanceOf"
  link: "/en/v1/api/common/instanceOf"
---

# forwardAsserts

The **`forwardAsserts()`** function validates an input with a predicate, throws when it fails, and returns the validated value. It supports classic and curried forms.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/forwardAsserts/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntax

### Classic signatures

```typescript
function forwardAsserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicate
): GenericPredicate;

function forwardAsserts<
	GenericInput extends unknown
>(
	input: GenericInput,
	predicate: (input: GenericInput) => boolean
): GenericInput;
```

### Curried signatures

```typescript
function forwardAsserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput
>(
	predicate: (input: GenericInput) => input is GenericPredicate
): (input: GenericInput) => GenericPredicate;

function forwardAsserts<
	GenericInput extends unknown
>(
	predicate: (input: GenericInput) => boolean
): (input: GenericInput) => GenericInput;
```

## Parameters

- `input`: The value to validate in direct mode.
- `predicate`: A boolean predicate or type guard used to validate the input.

## Return value

Returns the validated input. With a type guard predicate, the returned type is narrowed. With a boolean predicate, the original input type is preserved. Throws an `AssertsError` when validation fails.

## See also

- [`asserts`](/en/v1/api/common/asserts) - Throws on failure without returning the validated value
- [`isType`](/en/v1/api/common/isType) - Builds runtime type guards
- [`pipe`](/en/v1/api/common/pipe) - Chains the curried form inside a pipeline
