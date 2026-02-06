Returns the last day of the week for a date.

Signature: `getLastDayOfWeek(input)` → `TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/getLastDayOfWeek/example.ts[3,13]}
```

@remarks
- The week ends on Sunday.
- The returned date is normalized to `23:59:59.999` in UTC.

@see https://utils.duplojs.dev/en/v1/api/date/getLastDayOfWeek

@namespace D
