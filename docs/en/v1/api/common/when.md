---
outline: [2, 3]
description: "The when() function applies a transformation if a predicate is true (or if a type guard succeeds). Otherwise, the input value is returned as is. Exists in immediate or curried form."
prev:
  text: "Common"
  link: "/en/v1/api/common/"
next:
  text: "whenNot"
  link: "/en/v1/api/common/whenNot"
---

# when

The **`when()`** function applies a transformation if a predicate is true (or if a type guard succeeds). Otherwise, the input value is returned as is. Exists in immediate or curried form.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/when/tryout.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Syntax

### Classic signatures

```typescript
// Type Guard predicate
function when<
	GenericInput extends AnyValue, 
	GenericPredicatedInput extends GenericInput, 
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput, 
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): GenericOutput | Exclude<GenericInput, GenericPredicatedInput>;

// Boolean predicate
function when<
	GenericInput extends AnyValue, 
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput, 
	ifFunction: (input: GenericInput) => boolean, 
	theFunction: (predicatedInput: GenericInput
) => GenericOutput): GenericOutput | GenericInput;
```

### Curried signatures

```typescript
// Type Guard predicate
function when<
	GenericInput extends AnyValue, 
	GenericPredicatedInput extends GenericInput, 
	GenericOutput extends AnyValue | EscapeVoid
>(
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	input: GenericInput
) => GenericOutput | Exclude<BreakGenericLink<GenericInput>, GenericPredicatedInput>;

// Boolean predicate
function when<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid
>(
	ifFunction: (input: GenericInput) => boolean, 
	theFunction: (predicatedInput: GenericInput) => GenericOutput
): (
	input: GenericInput
) => GenericOutput | GenericInput;
```

## Parameters

- `input` : The value to test (optional in curried mode).
- `ifFunction` : Predicate or type guard to test the input value.
- `theFunction` : Function executed only if the predicate is true.

## Return value

If the predicate passes, returns the result of `theFunction`. Otherwise, returns the input value unchanged.

## See also

- [`whenNot`](/en/v1/api/common/whenNot) - Executes when the predicate fails
- [`whenElse`](/en/v1/api/common/whenElse) - Version with two explicit branches
