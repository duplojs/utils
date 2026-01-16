---
outline: [2, 3]
description: "The asserts() function throws when a predicate fails and narrows the input type when it passes."
prev:
  text: "isType"
  link: "/en/v1/api/common/isType"
next:
  text: "instanceOf"
  link: "/en/v1/api/common/instanceOf"
---

# asserts

The **`asserts()`** function throws when a predicate fails and narrows the input type when it passes.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/asserts/tryout.doc.ts"
  majorVersion="v1"
  height="460px"
/>

## Syntax

```typescript
function asserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicate
): asserts input is GenericPredicate
```

## Parameters

- `input`: The value to validate.
- `predicate`: A type-guard predicate used to validate and narrow the input.

## Return value

Nothing. It throws an `AssertsError` when the predicate fails.

## See also

- [`isType`](/en/v1/api/common/isType) - Builds type guards based on runtime checks
- [`instanceOf`](/en/v1/api/common/instanceOf) - Type guard using constructors
