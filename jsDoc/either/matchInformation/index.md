Exhaustive pattern matching based on Either information. Every information case from the input must be handled.

**Supported call styles:**
- Classic: `matchInformation(input, matcher)` → returns the matched callback result
- Curried: `matchInformation(matcher)` → returns a function waiting for the input

If the input is not an Either, the input value is returned as-is.

```ts
{@include either/matchInformation/example.ts[3,33]}
```

@see https://utils.duplojs.dev/en/v1/api/either/matchInformation

@namespace E
