Unwraps the payload of a `Right` and returns the input unchanged when the input is not a `Right`.

**Supported call styles:**
- Classic: `unwrapRight(input)` → returns an unwrapped value or the original input

Use this function when you want a non-throwing `Right`-only unwrap and you need to keep non-`Right` values flowing.

```ts
{@include either/unwrapRight/example.ts[3,17]}
```

@see [`E.unwrapRightOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapRightOrThrow)
@see [`E.isRight`](https://utils.duplojs.dev/en/v1/api/either/isRight)
@see https://utils.duplojs.dev/en/v1/api/either/unwrapRight

@namespace E
