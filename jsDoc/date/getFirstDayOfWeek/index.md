Returns the first day of the week for a date.

Signature: `getFirstDayOfWeek(input)` → `TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/getFirstDayOfWeek/example.ts[3,13]}
```

@remarks
- The week starts on Monday.
- The returned date is normalized to `00:00:00.000` in UTC.

@see https://utils.duplojs.dev/en/v1/api/date/getFirstDayOfWeek

@namespace D
