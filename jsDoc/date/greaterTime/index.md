Checks whether a duration is greater than or equal to a threshold.

**Supported call styles:**
- Classic: `greaterTime(input, threshold)` → `boolean`
- Curried: `greaterTime(threshold)` → `(input) => boolean`

All parameters accept `TheTime` or `SerializedTheTime`.

```ts
{@include date/greaterTime/example.ts[3,12]}
```

@remarks
- Inclusive comparison: `input >= threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/greaterTime

@namespace D
