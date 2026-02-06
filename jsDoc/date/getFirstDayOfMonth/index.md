Returns the first day of the month for a date.

Signature: `getFirstDayOfMonth(input)` → `TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/getFirstDayOfMonth/example.ts[3,13]}
```

@remarks
- The returned date is normalized to `00:00:00.000` in UTC.

@see https://utils.duplojs.dev/en/v1/api/date/getFirstDayOfMonth

@namespace D
