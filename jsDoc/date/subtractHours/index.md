Subtracts a number of hours from a date.

**Supported call styles:**
- Classic: `subtractHours(input, hour)` → `TheDate`
- Curried: `subtractHours(hour)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/subtractHours/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/subtractHours

@namespace D
