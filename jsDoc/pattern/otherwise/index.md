Applies a fallback handler when no prior pattern matched.

**Supported call styles:**
- Classic: `otherwise(input, handler)` → returns the unwrapped result or fallback
- Curried: `otherwise(handler)` → returns a function waiting for the input

If the input is already a pattern result, it is unwrapped and returned.
The input is not mutated.

```ts
{@include pattern/otherwise/example.ts[3,39]}
```

@see [`P.match`](https://utils.duplojs.dev/en/v1/api/pattern/match) For building match chains
@see https://utils.duplojs.dev/en/v1/api/pattern/otherwise

@namespace P
