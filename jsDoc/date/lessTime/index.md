Checks whether a duration is less than or equal to a threshold.

**Supported call styles:**
- Classic: `lessTime(input, threshold)` → `boolean`
- Curried: `lessTime(threshold)` → `(input) => boolean`

All parameters accept `TheTime` or `SerializedTheTime`.

```ts
{@include date/lessTime/example.ts[3,12]}
```

@remarks
- Inclusive comparison: `input <= threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/lessTime

@namespace D
