Unwraps the payload of an `Either` when its literal information matches one expected information or one of multiple expected informations. When no information matches, returns the original input unchanged.

**Supported call styles:**
- Classic: `unwrapByInformation(input, information)` where `information` can be a string or an array of strings
- Curried: `unwrapByInformation(information)` where `information` can be a string or an array of strings

Use this function when the non-matching path is not exceptional and should keep flowing with the original `Either` value.

```ts
{@include either/unwrapByInformation/example.ts[3,24]}
```

@see [`E.unwrapByInformationOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow)
@see [`E.hasInformation`](https://utils.duplojs.dev/en/v1/api/either/hasInformation)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapByInformation

@namespace E
