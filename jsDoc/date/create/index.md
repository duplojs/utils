Creates a `TheDate` from date-like inputs.

Signature: `create(input, params?)` → `TheDate | MaybeEither<TheDate>`

The return type depends on the overload:
- Safe literal date strings (`YYYY-MM-DD`) return `TheDate` directly.
- Runtime inputs (`number`, `Date`, `SerializedTheDate`, `SpoolingDate`, other strings) return `Either`.

```ts
{@include date/create/example.ts[3,16]}
```

@remarks
- Use this API when you want a non-throwing creation flow.
- For throwing behavior, use `createOrThrow`.

@see https://utils.duplojs.dev/en/v1/api/date/create
@see https://utils.duplojs.dev/en/v1/api/date/createOrThrow

@namespace D
