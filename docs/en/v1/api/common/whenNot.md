---
outline: [2, 3]
description: "The whenNot() function applies a transformation only when the predicate fails (or when the type guard does not match). Otherwise, the input is returned as is. Exists in immediate and curried versions."
prev:
  text: "when"
  link: "/en/v1/api/common/when"
next:
  text: "whenElse"
  link: "/en/v1/api/common/whenElse"
---

# whenNot

The **`whenNot()`** function applies a transformation only when the predicate fails (or when the type guard does not match). Otherwise, the input is returned as is. Exists in immediate and curried versions.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/whenNot/tryout.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Syntax

### Classic signatures

```typescript
// Type Guard predicate
function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
): GenericOutput | GenericPredicatedInput;

// Boolean predicate
function whenNot<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
): GenericOutput | GenericInput;
```

### Curried signatures

```typescript
// Type Guard predicate
function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid
>(
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
): (
	input: GenericInput
) => GenericOutput | BreakGenericLink<GenericPredicatedInput>;

// Boolean predicate
function whenNot<
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
- `ifFunction` : Function that decides whether or not to skip the transformation (can be a type guard).
- `theFunction` : Function executed only if the predicate fails.

## Return value

If the predicate fails, returns the result of `theFunction`. Otherwise, returns the input unchanged.

## See also

- [`when`](/en/v1/api/common/when) - Inverse version
- [`whenElse`](/en/v1/api/common/whenElse) - Two explicit branches
