Builds a `Right` tagged as a neutral result: neither positive nor negative, just a result associated with business information and a payload.

**Supported call styles:**
- Classic: `result(information, value)` → returns a result value
- Curried: `result(information)` → returns a function waiting for the value

Use `result` when you want to express that an operation produced a result without marking it as a success, an error, or a failure. The returned value keeps the provided information string and embeds the provided payload. Pass `undefined` explicitly when the result has no payload.

```ts
{@include either/result/example.ts[3,33]}
```

@see [`E.right`](https://utils.duplojs.dev/en/v1/api/either/right)
@see [`E.success`](https://utils.duplojs.dev/en/v1/api/either/success)
@see https://utils.duplojs.dev/en/v1/api/either/result

@namespace E
