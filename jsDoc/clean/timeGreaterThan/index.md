Checks whether a wrapped `Time` is strictly greater than a threshold.

**Supported call styles:**
- Classic: `timeGreaterThan(time, threshold)` → `boolean`
- Curried: `timeGreaterThan(threshold)` → function waiting for the time

`threshold` accepts wrapped `Time` or raw `TheTime`.

```ts
{@include clean/timeGreaterThan/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeGreaterThan

@namespace C
