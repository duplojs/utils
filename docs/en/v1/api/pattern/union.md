---
outline: [2, 3]
prev:
  text: "isMatch"
  link: "/en/v1/api/pattern/isMatch"
next:
  text: "Pattern"
  link: "/en/v1/api/pattern/"
---

# union

`union()` composes several patterns into a single reusable `ToolPattern`. Useful for sharing patterns between `match`, `when`, `isMatch`, or anywhere else a pattern is expected.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/union/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
/>

## Syntax

```typescript
function union<
	GenericInput extends unknown, 
	const GenericPatterns extends readonly [
    	Pattern<GenericInput extends infer InferredInput ? InferredInput : never>,
    	...Pattern<GenericInput extends infer InferredInput ? InferredInput : never>[]
	]
>(
	...patterns: FixDeepFunctionInfer<
		readonly [Pattern<GenericInput>, ...Pattern<GenericInput>[]], 
		GenericPatterns
	>
): ToolPattern<
	GenericInput, 
	GenericPatterns[number] extends infer InferredPattern ? InferredPattern : never
>;
```

## Parameters

- `patterns`: patterns to combine (literals, partial objects, tuples, predicates, other `ToolPattern`).

## Return value

A `ToolPattern` that matches if at least one of the provided patterns matches. You can pass it to `match`, `when`, `isMatch`, or compose it in other `union`.

## Best practices

- Group your business patterns (e.g. event types, user roles) in a shared `union` to avoid repetition.
- Combine with `isMatch` to get a reusable type guard: `const isWrite = P.isMatch(P.union("POST", "PUT"))`.
- Patterns are evaluated in the order provided; place the most specific ones first if an expensive predicate calculation is present.

## See also

- [`isMatch`](/en/v1/api/pattern/isMatch)
- [`match`](/en/v1/api/pattern/match)
- [`when`](/en/v1/api/pattern/when)
