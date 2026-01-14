---
outline: [2, 3]
description: "otherwise() closes a pattern matching pipeline by providing a fallback value for all remaining cases. It automatically unwraps PatternResult returned by match/when and gives you back the final value."
prev:
  text: "whenNot"
  link: "/en/v1/api/pattern/whenNot"
next:
  text: "exhaustive"
  link: "/en/v1/api/pattern/exhaustive"
---

# otherwise

`otherwise()` closes a pattern matching pipeline by providing a fallback value for all remaining cases. It automatically unwraps `PatternResult` returned by `match`/`when` and gives you back the final value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/otherwise/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function otherwise<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	input: GenericInput | GenericInputPatternResult | GenericInputValue, 
	theFunction: (rest: GenericInputValue) => GenericOutput
): (GenericOutput | Unwrap<GenericInputPatternResult>);
```

### Curried signature

```typescript
function otherwise<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	theFunction: (rest: GenericInputValue) => GenericOutput
): (
	input: GenericInput | GenericInputPatternResult | GenericInputValue
) => (GenericOutput | Unwrap<GenericInputPatternResult>);
```

The type received in `rest` corresponds to the cases that have not yet been covered by your previous `match`/`when`.

## Parameters

- `input` *(optional)*: value to close immediately (often the result of a `when` or a `match`).
- `theFunction`: fallback executed for the remaining cases. Can return any type (sync or async).

## Return value

The value returned by `theFunction` if no pattern matched, otherwise that of the already present `PatternResult`. After `otherwise`, you no longer obtain a `PatternResult` but a “normal” value.

## Best practices

- Use `otherwise` to end a pipeline when a fallback is sufficient. If you need to guarantee strict exhaustiveness, prefer `exhaustive`.
- The `rest` parameter is already typed with the remaining cases. Use it to handle its fields without casts.
- You can re-inject the value anytime into a new `pipe`, `Either`, etc. since it is unwrapped.

## See also

- [`match`](/en/v1/api/pattern/match)
- [`when`](/en/v1/api/pattern/when)
- [`exhaustive`](/en/v1/api/pattern/exhaustive)
