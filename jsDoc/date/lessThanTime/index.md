Checks whether a duration is strictly less than a threshold.

**Supported call styles:**
- Classic: `lessThanTime(input, threshold)` → `boolean`
- Curried: `lessThanTime(threshold)` → `(input) => boolean`

All parameters accept `TheTime` or `SerializedTheTime`.

```ts
{@include date/lessThanTime/example.ts[3,12]}
```

@remarks
- Strict comparison: `input < threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/lessThanTime

@namespace D
