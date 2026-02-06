Subtracts a number of minutes from a date.

**Supported call styles:**
- Classic: `subtractMinutes(input, minute)` → `TheDate`
- Curried: `subtractMinutes(minute)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/subtractMinutes/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/subtractMinutes

@namespace D
