Applies a timezone offset to a date and returns the shifted `TheDate`.

**Supported call styles:**
- Classic: `applyTimezone(input, timeZone)` → `TheDate`
- Curried: `applyTimezone(timeZone)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/applyTimezone/example.ts[3,12]}
```

@remarks
- This is a timestamp shift based on the target timezone offset.

@see https://utils.duplojs.dev/en/v1/api/date/applyTimezone

@namespace D
