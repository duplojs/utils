Unwraps the payload of a `Left` and returns the input unchanged when the input is not a `Left`.

**Supported call styles:**
- Classic: `unwrapLeft(input)` → returns an unwrapped value or the original input

Use this function when you want a non-throwing `Left`-only unwrap and you need to keep non-`Left` values flowing.

```ts
{@include either/unwrapLeft/example.ts[3,17]}
```

@see [`E.unwrapLeftOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapLeftOrThrow)
@see [`E.isLeft`](https://utils.duplojs.dev/en/v1/api/either/isLeft)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapLeft

@namespace E
