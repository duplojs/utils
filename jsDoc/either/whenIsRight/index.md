Applies a function only when the input is an EitherRight. Otherwise, the original value is returned as-is.

**Supported call styles:**
- Classic: `whenIsRight(input, theFunction)` → returns a value
- Curried: `whenIsRight(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsRight/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsRight

@namespace E
