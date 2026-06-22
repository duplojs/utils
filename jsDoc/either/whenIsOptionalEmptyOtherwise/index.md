Runs one callback for OptionalEmpty values and an otherwise callback for every remaining raw input.

**Supported call styles:**
- Classic: `whenIsOptionalEmptyOtherwise(input, theFunction, otherwiseFunction)` → returns a callback result
- Curried: `whenIsOptionalEmptyOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input

The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.

```ts
{@include either/whenIsOptionalEmptyOtherwise/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalEmptyOtherwise

@namespace E

