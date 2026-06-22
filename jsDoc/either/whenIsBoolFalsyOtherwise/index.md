Runs one callback for BoolFalsy values and an otherwise callback for every remaining raw input.

**Supported call styles:**
- Classic: `whenIsBoolFalsyOtherwise(input, theFunction, otherwiseFunction)` → returns a callback result
- Curried: `whenIsBoolFalsyOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input

The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.

```ts
{@include either/whenIsBoolFalsyOtherwise/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolFalsyOtherwise

@namespace E

