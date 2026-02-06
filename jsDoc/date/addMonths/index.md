Adds a number of calendar months to a date.

**Supported call styles:**
- Classic: `addMonths(input, month)` → `TheDate`
- Curried: `addMonths(month)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/addMonths/example.ts[3,11]}
```

@remarks
- Uses UTC month arithmetic (`Date#setUTCMonth` behavior).

@see https://utils.duplojs.dev/en/v1/api/date/addMonths

@namespace D
