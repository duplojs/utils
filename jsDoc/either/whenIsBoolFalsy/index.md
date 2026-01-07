Applies a callback only when the boolean value is falsy.

**Supported call styles:**
- Classic: `whenIsBoolFalsy(input, theFunction)` → returns a value
- Curried: `whenIsBoolFalsy(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsBoolFalsy/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolFalsy

@namespace E
