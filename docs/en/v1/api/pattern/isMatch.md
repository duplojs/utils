---
outline: [2, 3]
description: "isMatch() imperatively tests whether a value matches a pattern and returns a type guard (value is ...). Ideal for simple conditions or to refine the type before entering a pipeline."
prev:
  text: "exhaustive"
  link: "/en/v1/api/pattern/exhaustive"
next:
  text: "union"
  link: "/en/v1/api/pattern/union"
---

# isMatch

`isMatch()` imperatively tests whether a value matches a pattern and returns a type guard (`value is ...`). Ideal for simple conditions or to refine the type before entering a pipeline.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/isMatch/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntax

### Classic signature

```typescript
function isMatch<
	GenericInput extends AnyValue, 
	const GenericPattern extends Pattern<GenericInput>
>(
	input: GenericInput, 
	pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>
): input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;
```

### Curried signature

```typescript
function isMatch<
	GenericInput extends AnyValue, 
	const GenericPattern extends Pattern<GenericInput>
>(
	pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>
): (
	input: GenericInput
) => input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;
```

`PatternValue` is inferred from the shape of the pattern (literal, partial object, tuple, predicate, `ToolPattern`, etc.).

## Parameters

- `input` *(optional)*: value to test immediately. Without this argument, `isMatch` returns a reusable type guard.
- `pattern`: pattern to compare (same possibilities as `match`).

## Return value

A boolean type guard: `true` if the value matches the pattern, and the type is refined accordingly. `false` otherwise, with no effect on the type.

## Best practices

- Use `isMatch` in conditions (`if`, `filter`, `find`) to refine your unions before a `pipe` or a richer `match`.
- Combine `isMatch(P.union(...))` to quickly create reusable predicates.
- Prefer `match/when` if you need to transform the value rather than only filter it.

## See also

- [`union`](/en/v1/api/pattern/union)
- [`match`](/en/v1/api/pattern/match)
- [`when`](/en/v1/api/pattern/when)
