Builds a `Right` tagged as a neutral result: neither positive nor negative, just a result associated with business information and an optional payload.

**Supported call styles:**
- Classic: `result(information, value?)` → returns a value

Use `result` when you want to express that an operation produced a result without marking it as a success, an error, or a failure. The returned value keeps the provided information string and optionally embeds a payload.

```ts
{@include either/result/example.ts[3,21]}
```

@see [`E.right`](https://utils.duplojs.dev/en/v1/api/either/right)
@see [`E.success`](https://utils.duplojs.dev/en/v1/api/either/success)
@see https://utils.duplojs.dev/en/v1/api/either/result

@namespace E
