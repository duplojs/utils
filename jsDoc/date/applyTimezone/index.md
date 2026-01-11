Applies a timezone to a date.

**Supported call styles:**
- Classic: `applyTimezone(timeZone)` → returns a value
- Curried: `applyTimezone(theDate, timeZone)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/applyTimezone/example.ts[3,11]}
```

@remarks
- Applies the timezone offset to shift the date.

@see https://utils.duplojs.dev/en/v1/api/date/applyTimezone

@namespace D
