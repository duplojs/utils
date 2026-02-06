Adds a number of calendar years to a date.

**Supported call styles:**
- Classic: `addYears(input, year)` → `TheDate`
- Curried: `addYears(year)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/addYears/example.ts[3,11]}
```

@remarks
- Uses UTC year arithmetic (`Date#setUTCFullYear` behavior).

@see https://utils.duplojs.dev/en/v1/api/date/addYears

@namespace D
