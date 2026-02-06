Returns the month number (`1` to `12`) for a date in a target timezone.

Signature: `getMonth(input, timezone?)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.

```ts
{@include date/getMonth/example.ts[3,16]}
```

@remarks
- Unlike native `Date#getMonth`, this getter is 1-based.

@see https://utils.duplojs.dev/en/v1/api/date/getMonth

@namespace D
