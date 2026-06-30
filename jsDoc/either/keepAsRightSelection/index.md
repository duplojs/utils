Keeps selected `Either` informations on the `Right` side according to an exhaustive selector. Selected `Left` values are converted to `Right`; unselected `Right` values are converted to `Left`.

**Supported call styles:**
- Classic: `keepAsRightSelection(input, selector)` where `selector` maps every possible information to `true` or `false`
- Curried: `keepAsRightSelection(selector)` returns a function waiting for the input, mainly for `pipe`

Use this function when every possible information must be explicitly classified as right-worthy or not. The selector is exhaustive: every information carried by the input union must be present.

```ts
{@include either/keepAsRightSelection/example.ts[3,46]}
```

@remarks
- A selector value typed as `boolean` is treated as maybe selected in the return type.
- At runtime, only `true` keeps or converts the value to `Right`; `false` keeps or converts it to `Left`.

@see [`E.keepAsRightByInformation`](https://utils.duplojs.dev/en/v1/api/either/keepAsRightByInformation)
@see [`E.unwrapSelection`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelection)
@see https://utils.duplojs.dev/en/v1/api/either/keepAsRightSelection

@namespace E
