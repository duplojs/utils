Callback executed only for EitherBoolTruthy values. Otherwise, the initial value is returned.

**Supported call styles:**
- Classic: `whenIsBoolTruthy(input, theFunction)` → returns a value
- Curried: `whenIsBoolTruthy(theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenIsBoolTruthy/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolTruthy

@namespace E
