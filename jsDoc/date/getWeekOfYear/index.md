Returns the ISO week number (`1` to `53`) for a date in a target timezone.

Signature: `getWeekOfYear(input, timezone?)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.

```ts
{@include date/getWeekOfYear/example.ts[3,15]}
```

@remarks
- Uses ISO-8601 week rules (week aligned around Thursday logic).

@see https://utils.duplojs.dev/en/v1/api/date/getWeekOfYear

@namespace D
