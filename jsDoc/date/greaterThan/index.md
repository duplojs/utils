Checks whether a date is strictly greater than a threshold.

**Supported call styles:**
- Classic: `greaterThan(input, threshold)` → `boolean`
- Curried: `greaterThan(threshold)` → `(input) => boolean`

All parameters accept `TheDate` or `SerializedTheDate`.

```ts
{@include date/greaterThan/example.ts[3,12]}
```

@remarks
- Strict comparison: `input > threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/greaterThan

@namespace D
