---
outline: [2, 3]
prev:
  text: "whenNot"
  link: "/en/v1/api/common/whenNot"
next:
  text: "and"
  link: "/en/v1/api/common/and"
---

# whenElse

The **`whenElse()`** function offers two explicit branches: if the predicate is true, `theFunction` runs, otherwise `elseFunction`. Return types stay disjoint and preserved.

::: warning
Very unstable typing - TypeScript is not very kind with us
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/whenElse/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Syntax

### Classic signatures

```typescript
// Type Guard predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1,
	elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2
): GenericOutput1 | GenericOutput2;

// Boolean predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	predicate: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput1,
	elseFunction: (predicatedInput: GenericInput) => GenericOutput2
): BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;
```

### Curried signatures

```typescript
// Type Guard predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	predicate: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1,
	elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2
): (
	input: GenericInput
) => BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;

// Boolean predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	predicate: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput1,
	elseFunction: (predicatedInput: GenericInput) => GenericOutput2
): (
	input: GenericInput
) => GenericOutput1 | GenericOutput2;
```

## Parameters

- `input` : The value tested (optional in curried mode).
- `predicate` : Decision function (can be a type guard).
- `theFunction` : Function executed if the predicate is true.
- `elseFunction` : Function executed otherwise.

## Return value

The result of `theFunction` or `elseFunction` depending on the predicate result, with distinct typing.

## See also

- [`when`](/en/v1/api/common/when) - Simple conditional transformation
- [`whenNot`](/en/v1/api/common/whenNot) - Transformation when the predicate fails
