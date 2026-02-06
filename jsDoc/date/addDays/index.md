Adds a number of days to a date.

**Supported call styles:**
- Classic: `addDays(input, day)` → `TheDate`
- Curried: `addDays(day)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/addDays/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/addDays

@namespace D
