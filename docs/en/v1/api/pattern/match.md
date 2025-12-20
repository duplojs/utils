---
outline: [2, 3]
prev:
  text: "Pattern"
  link: "/en/v1/api/pattern/"
next:
  text: "when"
  link: "/en/v1/api/pattern/when"
---

# match

`match()` associates a pattern with a function and returns a `PatternResult` when the value matches this pattern. Use it:

- as a *builder* (`P.match(input)`), to chain several `.with()`/`.when()` before concluding with `.otherwise()` or `.exhaustive()`;
- in functional form to plug a step directly into a `pipe` (`P.match(pattern, fn)` or `P.match(input, pattern, fn)`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/match/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
  :foldLines="[2]"
/>

<details>
<summary>Builder version</summary>

<MonacoTSEditor
  src="/examples/v1/api/pattern/match/builder.doc.ts"
  majorVersion="v1"
  height="770px"
/>

</details>

## Syntax

### Classic signature

```typescript
function match<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	const GenericPattern extends Pattern<GenericInputValue>, 
	GenericPatternValue extends PatternValue<GenericPattern>, 
	GenericOutput extends AnyValue | EscapeVoid, 
	GenericMatchedValue extends Extract<ComplexMatchedValue<GenericInputValue, GenericPatternValue>, any>
>(
	input: GenericInput | PatternResult<unknown>,
	pattern: FixDeepFunctionInfer<Pattern<GenericInputValue>, GenericPattern>,
	theFunction: (value: ComplexMatchedValue<...>) => GenericOutput
): BreakGenericLink<
	PatternResult<GenericOutput> | GenericInputPatternResult | ComplexUnMatchedValue<...>
>;
```

### Curried signature

```typescript
function match<
	GenericInput extends AnyValue,
	...
>(
	pattern: FixDeepFunctionInfer<Pattern<GenericInputValue>, GenericPattern>,
	theFunction: (value: ComplexMatchedValue<...>) => GenericOutput
): (
	input: GenericInput | PatternResult<unknown>
) => BreakGenericLink<
	PatternResult<GenericOutput> | GenericInputPatternResult | ComplexUnMatchedValue<...>
>;
```

### Builder signature

```typescript
function match<
	GenericInput extends AnyValue
>(input: GenericInput): MatchBuilder<GenericInput>
```

`Matched` automatically corresponds to the portion of the union actually covered by the pattern (parts of an object, tuple, literals, predicates, or `ToolPattern`).

## Parameters

- `input` *(builder version or direct invocation)*: value to analyze. Can already be a `PatternResult` (chaining).
- `pattern`: pattern to compare (`literal`, tuple, object, predicate function, pattern created via `P.union`, etc.).
- `theFunction`: transformation executed if the pattern matches. The parameter is typed with the exact shape of the pattern.

## Return value

- Builder: a `MatchBuilder` with `.with()`, `.when()`, `.otherwise()` and `.exhaustive()`.
- Functional version: either a `PatternResult<Output>` if the pattern matches, or the original value (or what remains of the union) if the pattern does not match. This result can be chained with `when`, `otherwise` or `exhaustive`.

## Best practices

- Break down your unions by object patterns `{ type: "..." }` rather than `if/else`, to benefit from structural inference (direct access to payload).
- Combine `match(pattern, fn)` in a `pipe` to trigger processing only when a specific pattern appears along the pipeline.
- Always add an `otherwise` or an `exhaustive()` on the builder version so nothing is left unhandled.

## See also

- [`when`](/en/v1/api/pattern/when) – Adds a custom guard.
- [`otherwise`](/en/v1/api/pattern/otherwise) – Ends the pipeline with a fallback.
- [`exhaustive`](/en/v1/api/pattern/exhaustive) – Forces total coverage of cases.
