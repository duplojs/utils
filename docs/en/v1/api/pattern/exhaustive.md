---
outline: [2, 3]
prev:
  text: "otherwise"
  link: "/en/v1/api/pattern/otherwise"
next:
  text: "isMatch"
  link: "/en/v1/api/pattern/isMatch"
---

# exhaustive

`exhaustive()` unwraps a `PatternResult` and checks that all cases have been covered. It is used both with the builder `match(...).exhaustive()` and in a direct call on any `PatternResult`. If a pattern is missing, an `InvalidExhaustivePatternError` is thrown at call time.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/exhaustive/tryoutError.doc.ts"
  majorVersion="v1"
  height="500px"
  :foldLines="[2]"
/>

## Syntax

```typescript
function exhaustive<
	const GenericInput extends unknown, 
	GenericResult extends PatternResult<GenericInput>
>(result: GenericResult): Unwrap<GenericResult>;
```

## Parameters

- `result`: a `PatternResult` returned by a `match` builder (after `.with()`/`.when()`).

## Return value

The value actually contained in the `PatternResult`, with the type refined. If the initial union has not been fully covered, the call fails and shows you the remaining value.

## Best practices

- On the builder: `match(...).with(...).exhaustive()` ensures each branch is covered before returning the final value.
- In direct call: pass any `PatternResult` to unwrap it and force the exhaustiveness check.
- During development, let `exhaustive` point out missing cases rather than adding an overly broad `otherwise`.

## See also

- [`match`](/en/v1/api/pattern/match)
- [`when`](/en/v1/api/pattern/when)
- [`otherwise`](/en/v1/api/pattern/otherwise)
