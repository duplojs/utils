Checks whether a date is strictly less than a threshold.

**Supported call styles:**
- Classic: `lessThan(input, threshold)` → `boolean`
- Curried: `lessThan(threshold)` → `(input) => boolean`

All parameters accept `TheDate` or `SerializedTheDate`.

```ts
{@include date/lessThan/example.ts[3,12]}
```

@remarks
- Strict comparison: `input < threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/lessThan

@namespace D
