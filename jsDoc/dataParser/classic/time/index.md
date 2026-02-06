Creates a classic parser for `TheTime` values.

Signature: `DP.time(definition?)` → `DataParserTime`

The parser accepts `TheTime`, `SerializedTheTime`, and safe numeric time values.
With `coerce: true`, ISO-like time strings are also supported.

```ts
{@include dataParser/classic/time/example.ts[3,18]}
```

@remarks
- Parsed output is always `TheTime`.
- Use `DP.coerce.time()` when you want string coercion enabled by default.

@see https://utils.duplojs.dev/en/v1/api/dataParser/time

@namespace DP
