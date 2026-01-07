The forward() function returns the passed argument without modifying it. Useful to standardize an API that expects a function, or to improve readability in a pipeline.

Signature: `forward(input)` → returns a value

The input value is not mutated.

```ts
{@include common/forward/example.ts[3,10]}
```

@see https://utils.duplojs.dev/en/v1/api/common/forward

@namespace C
