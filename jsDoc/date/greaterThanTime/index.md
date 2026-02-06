Checks whether a duration is strictly greater than a threshold.

**Supported call styles:**
- Classic: `greaterThanTime(input, threshold)` → `boolean`
- Curried: `greaterThanTime(threshold)` → `(input) => boolean`

All parameters accept `TheTime` or `SerializedTheTime`.

```ts
{@include date/greaterThanTime/example.ts[3,12]}
```

@remarks
- Strict comparison: `input > threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/greaterThanTime

@namespace D
