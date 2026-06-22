Runs one callback for selected Either informations and an otherwise callback for every unselected raw input.

**Supported call styles:**
- Classic: `whenIsSelectedOtherwise(input, selector, theFunction, otherwiseFunction)` → returns a callback result
- Curried: `whenIsSelectedOtherwise(selector, theFunction, otherwiseFunction)` → returns a function waiting for the input

The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.

```ts
{@include either/whenIsSelectedOtherwise/example.ts[3,35]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsSelectedOtherwise

@namespace E
