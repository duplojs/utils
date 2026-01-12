Executes a callback only when the Either contains a defined value (NullishFilled).

**Supported call styles:**
- Classic: `whenIsNullishFilled(input, theFunction)` → returns a value
- Curried: `whenIsNullishFilled(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsNullishFilled/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishFilled

@namespace E
