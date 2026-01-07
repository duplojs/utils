Applies a callback only when the optional Either contains a value (OptionalFilled).

**Supported call styles:**
- Classic: `whenIsOptionalFilled(input, theFunction)` → returns a value
- Curried: `whenIsOptionalFilled(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsOptionalFilled/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalFilled

@namespace E
