Returns the day number in the year (`1` to `365`/`366`) for a date in a target timezone.

Signature: `getDayOfYear(input, timezone?)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.

```ts
{@include date/getDayOfYear/example.ts[3,16]}
```

@remarks
- Leap years produce values up to `366`.

@see https://utils.duplojs.dev/en/v1/api/date/getDayOfYear

@namespace D
