Returns the day of week (`0` to `6`) for a date in a target timezone.

Signature: `getDayOfWeek(input, timezone?)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.

```ts
{@include date/getDayOfWeek/example.ts[3,15]}
```

@remarks
- Returned mapping is: `0` Sunday, `1` Monday, ..., `6` Saturday.

@see https://utils.duplojs.dev/en/v1/api/date/getDayOfWeek

@namespace D
