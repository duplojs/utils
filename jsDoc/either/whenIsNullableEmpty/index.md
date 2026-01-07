Executes a callback only when the Either is NullableEmpty.

**Supported call styles:**
- Classic: `whenIsNullableEmpty(input, theFunction)` → returns a value
- Curried: `whenIsNullableEmpty(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsNullableEmpty/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsNullableEmpty

@namespace E
