Returns the hour (`0` to `23`) for a date in a target timezone.

Signature: `getHour(input, timezone?)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.

```ts
{@include date/getHour/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/date/getHour

@namespace D
