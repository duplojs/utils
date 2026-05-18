Non-exhaustive pattern matching based on Either information. Unhandled cases are delegated to an `otherwise` callback.

**Supported call styles:**
- Classic: `matchInformationOtherwise(input, matcher, otherwise)` → returns a value
- Curried: `matchInformationOtherwise(matcher, otherwise)` → returns a function waiting for the input

If the input is not an Either, or if no matcher callback exists for the current information, `otherwise` is executed.

```ts
{@include either/matchInformationOtherwise/example.ts[3,40]}
```

@see https://utils.duplojs.dev/en/v1/api/either/matchInformationOtherwise

@namespace E
