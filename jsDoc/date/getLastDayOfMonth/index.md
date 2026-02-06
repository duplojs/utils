Returns the last day of the month for a date.

Signature: `getLastDayOfMonth(input)` → `TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/getLastDayOfMonth/example.ts[3,13]}
```

@remarks
- The returned date is normalized to `23:59:59.999` in UTC.

@see https://utils.duplojs.dev/en/v1/api/date/getLastDayOfMonth

@namespace D
