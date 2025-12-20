---
outline: [2, 3]
prev:
  text: "match"
  link: "/en/v1/api/pattern/match"
next:
  text: "otherwise"
  link: "/en/v1/api/pattern/otherwise"
---

# when

`when()` adds a guard in the pattern matching pipeline. As soon as `predicate` returns `true`, the associated function is executed and its result is wrapped in a `PatternResult`. With a type guard, the branch is automatically typed with the predicated shape.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/when/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
  :foldLines="[2]"
/>

## Syntax

### Curried signatures

```typescript
// Type Guard
function when<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericPredicatedInput extends GenericInputValue, 
	GenericOutput extends AnyValue
>(
	predicate: (input: GenericInputValue) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	input: (GenericInput | GenericInputPatternResult | GenericInputValue)
) => (GenericInputPatternResult | Exclude<BreakGenericLink<GenericInputValue>, GenericPredicatedInput> | PatternResult<GenericOutput>);

// Boolean
export declare function when<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	predicate: (input: GenericInputValue) => boolean, 
	theFunction: (predicatedInput: GenericInputValue) => GenericOutput
): (
	input: (GenericInput | GenericInputPatternResult | GenericInputValue)
) => (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
```

### Classic signatures

```typescript
// Type Guard
function when<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericPredicatedInput extends GenericInputValue, 
	GenericOutput extends AnyValue
>(
	input: (GenericInput | GenericInputPatternResult | GenericInputValue), 
	predicate: (input: GenericInputValue) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (GenericInputPatternResult | Exclude<GenericInputValue, GenericPredicatedInput> | PatternResult<GenericOutput>);

// Boolean
function when<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	input: (GenericInput | GenericInputPatternResult | GenericInputValue), 
	predicate: (input: GenericInputValue) => boolean, 
	theFunction: (predicatedInput: GenericInputValue) => GenericOutput
): (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
```

(a second overload exists with a simple boolean `predicate`).

## Parameters

- `input` *(optional)*: value to test immediately. Otherwise, `when` returns a function for your `pipe`.
- `predicate`: guard function. Can be a type guard (`value is ...`) to statically reduce the union, or a simple boolean.
- `theFunction`: transformation to execute when the guard is satisfied.

## Return value

A `PatternResult<Output>` if the condition is met, otherwise the original value (or what remains after previous guards). This result is ready to be passed to another `when`, a `match`, `otherwise` or `exhaustive`.

## Best practices

- Declare your guards (`type PaidInvoice = Extract<Invoice, { status: "paid" }>;`) then reference them in `predicate` to keep readable typing.
- `when` are evaluated in order: place the most specific cases before the generic ones.
- Combine `when` with `match` in a builder to interleave rules based on predicates rather than structural patterns.

## See also

- [`match`](/en/v1/api/pattern/match)
- [`otherwise`](/en/v1/api/pattern/otherwise)
- [`exhaustive`](/en/v1/api/pattern/exhaustive)
