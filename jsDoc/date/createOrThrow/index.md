Creates a `TheDate` and throws when input cannot be parsed or normalized.

Signature: `createOrThrow(input)` → `TheDate`

`input` accepts the same runtime shapes as `create` (`Date`, `number`, `SerializedTheDate`, `SpoolingDate`, strings).

```ts
{@include date/createOrThrow/example.ts[3,15]}
```

@remarks
- Throws `CreateTheDateError` on invalid input.

@see https://utils.duplojs.dev/en/v1/api/date/createOrThrow
@see https://utils.duplojs.dev/en/v1/api/date/create

@namespace D
