Applies a callback only when the Either is NullishEmpty.

**Supported call styles:**
- Classic: `whenIsNullishEmpty(input, theFunction)` → returns a value
- Curried: `whenIsNullishEmpty(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsNullishEmpty/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishEmpty

@namespace E
