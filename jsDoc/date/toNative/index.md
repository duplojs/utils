Converts a date or time value to native JavaScript representation.

Signature: `toNative(input)` → `Date | number`

`input` accepts `TheDate`, `SerializedTheDate`, `TheTime`, or `SerializedTheTime`.

```ts
{@include date/toNative/example.ts[3,20]}
```

@remarks
- Returns `Date` for date inputs.
- Returns `number` for time inputs.

@see https://utils.duplojs.dev/en/v1/api/date/toNative

@namespace D
