Checks whether a wrapped `Time` is strictly less than a threshold.

**Supported call styles:**
- Classic: `timeLessThan(time, threshold)` → `boolean`
- Curried: `timeLessThan(threshold)` → function waiting for the time

`threshold` accepts wrapped `Time` or raw `TheTime`.

```ts
{@include clean/timeLessThan/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeLessThan

@namespace C
