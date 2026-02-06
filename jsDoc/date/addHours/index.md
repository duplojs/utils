Adds a number of hours to a date.

**Supported call styles:**
- Classic: `addHours(input, hour)` → `TheDate`
- Curried: `addHours(hour)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/addHours/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/addHours

@namespace D
