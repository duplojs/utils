Unwraps the payload of a `Right` and throws when the input is not a `Right`.

**Supported call styles:**
- Classic: `unwrapRightOrThrow(input)` → returns a value

Use this function when your code requires the payload of a `Right` immediately and treating any other case as an exceptional path is acceptable. When the input is not a `Right`, it throws a `NotRightError`.

```ts
{@include either/unwrapRightOrThrow/example.ts[3,17]}
```

@remarks
- Throws `E.NotRightError` when the input does not carry the `Right` kind.

@see [`E.isRight`](https://utils.duplojs.dev/en/v1/api/either/isRight)
@see [`E.right`](https://utils.duplojs.dev/en/v1/api/either/right)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapRightOrThrow

@namespace E
