Forwards selected `Either` values unchanged according to an exhaustive information selector, and throws for unselected `Either` values.

**Supported call styles:**
- Classic: `forwardAssertsSelection(input, selector)` where `selector` maps every possible `Either` information to `true` or `false`
- Curried: `forwardAssertsSelection(selector)` returns a function waiting for the input, mainly for `pipe`

The selector must exhaustively describe every `Either` information in the input type. An `Either` whose information maps to `true` is returned unchanged, one whose information maps to `false` throws, and any non-`Either` input passes through unchanged.

```ts
{@include either/forwardAssertsSelection/example.ts[3,39]}
```

@remarks
- A selector value typed as `boolean` keeps the matching `Either` in the return type because a runtime `true` forwards it and a runtime `false` throws.
- Throws `E.ForwardAssertsSelectionError` when an `Either` information is not selected.

@see [`E.unwrapSelectionOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelectionOrThrow)
@see [`E.forwardAsserts`](https://utils.duplojs.dev/en/v1/api/common/forwardAsserts)
@see https://utils.duplojs.dev/en/v1/api/either/forwardAssertsSelection

@namespace E
