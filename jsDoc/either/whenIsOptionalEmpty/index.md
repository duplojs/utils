Applies a function only when an optional is empty (undefined).

**Supported call styles:**
- Classic: `whenIsOptionalEmpty(input, theFunction)` → returns a value
- Curried: `whenIsOptionalEmpty(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsOptionalEmpty/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalEmpty

@namespace E
