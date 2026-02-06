Checks whether a date is less than or equal to a threshold.

**Supported call styles:**
- Classic: `less(input, threshold)` → `boolean`
- Curried: `less(threshold)` → `(input) => boolean`

All parameters accept `TheDate` or `SerializedTheDate`.

```ts
{@include date/less/example.ts[3,12]}
```

@remarks
- Inclusive comparison: `input <= threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/less

@namespace D
