Runs one callback for BoolTruthy values and an otherwise callback for every remaining raw input.

**Supported call styles:**
- Classic: `whenIsBoolTruthyOtherwise(input, theFunction, otherwiseFunction)` → returns a callback result
- Curried: `whenIsBoolTruthyOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input

The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.

```ts
{@include either/whenIsBoolTruthyOtherwise/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolTruthyOtherwise

@namespace E

