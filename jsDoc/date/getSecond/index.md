Returns the second (`0` to `59`) for a date in a target timezone.

Signature: `getSecond(input, timezone?)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.

```ts
{@include date/getSecond/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/date/getSecond

@namespace D
