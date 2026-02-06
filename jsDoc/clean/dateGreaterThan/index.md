Checks whether a wrapped `Date` is strictly after a threshold.

**Supported call styles:**
- Classic: `dateGreaterThan(date, threshold)` → `boolean`
- Curried: `dateGreaterThan(threshold)` → function waiting for the date

`threshold` accepts wrapped `Date` or raw `TheDate`.

```ts
{@include clean/dateGreaterThan/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateGreaterThan

@namespace C
