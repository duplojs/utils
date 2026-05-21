Unwraps the payload of a `Left` and throws when the input is not a `Left`.

**Supported call styles:**
- Classic: `unwrapLeftOrThrow(input)` → returns a value

Use this function when your code requires the payload of a `Left` immediately and treating any other case as an exceptional path is acceptable. When the input is not a `Left`, it throws a `NotLeftError`.

```ts
{@include either/unwrapLeftOrThrow/example.ts[3,17]}
```

@remarks
- Throws `E.NotLeftError` when the input does not carry the `Left` kind.

@see [`E.isLeft`](https://utils.duplojs.dev/en/v1/api/either/isLeft)
@see [`E.left`](https://utils.duplojs.dev/en/v1/api/either/left)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapLeftOrThrow

@namespace E
