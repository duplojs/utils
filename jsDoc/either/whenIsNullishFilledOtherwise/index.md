Runs one callback for NullishFilled values and an otherwise callback for every remaining raw input.

**Supported call styles:**
- Classic: `whenIsNullishFilledOtherwise(input, theFunction, otherwiseFunction)` → returns a callback result
- Curried: `whenIsNullishFilledOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input

The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.

```ts
{@include either/whenIsNullishFilledOtherwise/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishFilledOtherwise

@namespace E

