Checks whether a date is greater than or equal to a threshold.

**Supported call styles:**
- Classic: `greater(input, threshold)` → `boolean`
- Curried: `greater(threshold)` → `(input) => boolean`

All parameters accept `TheDate` or `SerializedTheDate`.

```ts
{@include date/greater/example.ts[3,12]}
```

@remarks
- Inclusive comparison: `input >= threshold`.

@see https://utils.duplojs.dev/en/v1/api/date/greater

@namespace D
