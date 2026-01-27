Executes a function only when the input is an Left. Otherwise, the original value is returned as-is.

**Supported call styles:**
- Classic: `whenIsLeft(input, theFunction)` → returns a value
- Curried: `whenIsLeft(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsLeft/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsLeft

@namespace E
