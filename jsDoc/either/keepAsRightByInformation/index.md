Keeps only the `Either` values matching one information, or one of multiple informations, on the `Right` side. A matching `Left` is converted to `Right`; a non-matching `Right` is converted to `Left`.

**Supported call styles:**
- Classic: `keepAsRightByInformation(input, information)` where `information` can be a string or an array of strings
- Curried: `keepAsRightByInformation(information)` where `information` can be a string or an array of strings

Use this function when a pipeline must continue with selected informations as successful `Right` values and treat every other `Right` as a `Left`.

```ts
{@include either/keepAsRightByInformation/example.ts[3,34]}
```

@see [`E.keepAsRightSelection`](https://utils.duplojs.dev/en/v1/api/either/keepAsRightSelection)
@see [`E.unwrapByInformation`](https://utils.duplojs.dev/en/v1/api/either/unwrapByInformation)
@see https://utils.duplojs.dev/en/v1/api/either/keepAsRightByInformation

@namespace E
