Unwraps selected `Either` payloads according to an exhaustive information selector, and throws when the current information is not selected.

**Supported call styles:**
- Classic: `unwrapSelectionOrThrow(input, selector)` where `selector` maps every possible information to `true` or `false`
- Curried: `unwrapSelectionOrThrow(selector)` returns a function waiting for the input, mainly for `pipe`

Use this function when a flow may return several `Either` informations and only selected informations are valid at this point. The selector is exhaustive: every information carried by the input union must be present.

```ts
{@include either/unwrapSelectionOrThrow/example.ts[3,43]}
```

@remarks
- A selector value typed as `boolean` is included in the return type because a runtime `true` unwraps and a runtime `false` throws.
- Throws `E.HasNotSelectedInformationError` when the input has no information or the current information is not selected.

@see [`E.unwrapSelection`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelection)
@see [`E.unwrapByInformationOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapSelectionOrThrow

@namespace E
