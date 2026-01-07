Applies a function only when the nullable Either contains a value (NullableFilled).

**Supported call styles:**
- Classic: `whenIsNullableFilled(input, theFunction)` → returns a value
- Curried: `whenIsNullableFilled(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsNullableFilled/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsNullableFilled

@namespace E
