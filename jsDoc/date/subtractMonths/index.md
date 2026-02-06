Subtracts a number of calendar months from a date.

**Supported call styles:**
- Classic: `subtractMonths(input, month)` → `TheDate`
- Curried: `subtractMonths(month)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/subtractMonths/example.ts[3,13]}
```

@remarks
- Uses UTC month arithmetic (`Date#setUTCMonth` behavior).

@see https://utils.duplojs.dev/en/v1/api/date/subtractMonths

@namespace D
