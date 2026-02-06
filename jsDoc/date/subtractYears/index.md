Subtracts a number of calendar years from a date.

**Supported call styles:**
- Classic: `subtractYears(input, year)` → `TheDate`
- Curried: `subtractYears(year)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/subtractYears/example.ts[3,13]}
```

@remarks
- Uses UTC year arithmetic (`Date#setUTCFullYear` behavior).

@see https://utils.duplojs.dev/en/v1/api/date/subtractYears

@namespace D
