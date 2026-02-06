Checks whether a wrapped `Date` is strictly before a threshold.

**Supported call styles:**
- Classic: `dateLessThan(date, threshold)` → `boolean`
- Curried: `dateLessThan(threshold)` → function waiting for the date

`threshold` accepts wrapped `Date` or raw `TheDate`.

```ts
{@include clean/dateLessThan/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateLessThan

@namespace C
