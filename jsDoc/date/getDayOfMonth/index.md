Returns the day of month (`1` to `31`) for a date in a target timezone.

Signature: `getDayOfMonth(input, timezone?)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.

```ts
{@include date/getDayOfMonth/example.ts[3,17]}
```

@remarks
- The same instant can map to a different calendar day depending on timezone.

@see https://utils.duplojs.dev/en/v1/api/date/getDayOfMonth

@namespace D
