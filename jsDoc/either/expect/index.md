Type-level helper that preserves an Either input while forcing the result to stay typed as Left or Right.

**Supported call styles:**
- Classic: `expect(input)` → returns the same input

Returns the exact same runtime value, without mutation. Its main purpose is to keep a strict Either type in composed flows.

```ts
{@include either/expect/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/either/expect

@namespace E
