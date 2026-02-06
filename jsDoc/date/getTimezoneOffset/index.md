Returns timezone offset in milliseconds for a given date and timezone.

**Supported call styles:**
- Classic: `getTimezoneOffset(input, timeZone)` → `number`
- Curried: `getTimezoneOffset(timeZone)` → `(input) => number`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/getTimezoneOffset/example.ts[3,12]}
```

@see https://utils.duplojs.dev/en/v1/api/date/getTimezoneOffset

@namespace D
