Creates a custom checker from a boolean predicate or a type predicate.

Use it with `addChecker(...)`, parser definitions, or the extended `refine(...)` API. When the predicate is a TypeScript type guard, the parser output type is refined after validation.

```ts
{@include dataParser/classic/checkerRefine/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/refine
@namespace DP
