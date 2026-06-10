Unwraps selected `Either` payloads according to an exhaustive information selector. Non-selected informations keep flowing as their original `Either`.

**Supported call styles:**
- Classic: `unwrapSelection(input, selector)` where `selector` maps every possible information to `true` or `false`
- Curried: `unwrapSelection(selector)` returns a function waiting for the input, mainly for `pipe`

Use this function when a flow may return several `Either` informations and only some of them should be unwrapped at this step. The selector is exhaustive: every information carried by the input union must be present.

```ts
{@include either/unwrapSelection/example.ts[3,45]}
```

@remarks
- A selector value typed as `boolean` is treated as maybe selected in the return type.
- At runtime, only `true` unwraps; `false` keeps the original `Either`.

@see [`E.unwrapSelectionOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelectionOrThrow)
@see [`E.matchInformation`](https://utils.duplojs.dev/en/v1/api/either/matchInformation)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapSelection

@namespace E
