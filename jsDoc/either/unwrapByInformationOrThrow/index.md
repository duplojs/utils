Unwraps the payload of an `Either` when its literal information matches one expected information or one of multiple expected informations, and throws when no information matches.

**Supported call styles:**
- Classic: `unwrapByInformationOrThrow(input, information)` where `information` can be a string or an array of strings
- Curried: `unwrapByInformationOrThrow(information)` where `information` can be a string or an array of strings

Use this function when your code expects precise business information(s) and any other information must be treated as an exceptional path. If the information matches, the embedded value is returned. Otherwise, the function throws a `HasNotInformationError`.

```ts
{@include either/unwrapByInformationOrThrow/example.ts[3,24]}
```

@remarks
- Throws `E.HasNotInformationError` when the input information does not match the expected literal(s).

@see [`E.hasInformation`](https://utils.duplojs.dev/en/v1/api/either/hasInformation)
@see [`E.whenHasInformation`](https://utils.duplojs.dev/en/v1/api/either/whenHasInformation)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow

@namespace E
