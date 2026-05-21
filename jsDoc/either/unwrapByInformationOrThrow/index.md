Unwraps the payload of an `Either` when its literal information matches, and throws when the information does not match.

**Supported call styles:**
- Classic: `unwrapByInformationOrThrow(input, information)` → returns the unwrapped value
- Curried: `unwrapByInformationOrThrow(information)` → returns a function waiting for the input

Use this function when your code expects one precise business information and any other information must be treated as an exceptional path. If the information matches, the embedded value is returned. Otherwise, the function throws a `HasNotInformationError`.

```ts
{@include either/unwrapByInformationOrThrow/example.ts[3,20]}
```

@remarks
- Throws `E.HasNotInformationError` when the input information does not match the expected literal.

@see [`E.hasInformation`](https://utils.duplojs.dev/en/v1/api/either/hasInformation)
@see [`E.whenHasInformation`](https://utils.duplojs.dev/en/v1/api/either/whenHasInformation)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow

@namespace E
