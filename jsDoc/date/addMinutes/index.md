Adds a number of minutes to a date.

**Supported call styles:**
- Classic: `addMinutes(input, minute)` → `TheDate`
- Curried: `addMinutes(minute)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/addMinutes/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/addMinutes

@namespace D
