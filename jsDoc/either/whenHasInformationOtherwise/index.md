Runs one callback when an Either information matches and an otherwise callback for every remaining raw input.

**Supported call styles:**
- Classic: `whenHasInformationOtherwise(input, information, theFunction, otherwiseFunction)` → returns a callback result
- Curried: `whenHasInformationOtherwise(information, theFunction, otherwiseFunction)` → returns a function waiting for the input

The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.

```ts
{@include either/whenHasInformationOtherwise/example.ts[3,30]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenHasInformationOtherwise

@namespace E
