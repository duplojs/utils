Returns the milliseconds part (`0` to `999`) of a date.

Signature: `getMilliseconds(input)` → `number`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/getMilliseconds/example.ts[3,14]}
```

@remarks
- Value is always read in UTC.

@see https://utils.duplojs.dev/en/v1/api/date/getMilliseconds

@namespace D
