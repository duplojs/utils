Returns the timezone offset of a date.

**Supported call styles:**
- Classic: `getTimezoneOffset(timeZone)` → returns a value
- Curried: `getTimezoneOffset(theDate, timeZone)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/getTimezoneOffset/example.ts[3,11]}
```

@remarks
- Returns the offset in milliseconds for the given timezone.

@see https://utils.duplojs.dev/en/v1/api/date/getTimezoneOffset

@namespace D
