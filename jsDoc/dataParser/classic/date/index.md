Creates a classic parser for `TheDate` values.

Signature: `DP.date(definition?)` → `DataParserDate`

The parser accepts `TheDate`, `SerializedTheDate`, and native `Date`.
With `coerce: true`, safe timestamps and parsable date strings are also supported.

```ts
{@include dataParser/classic/date/example.ts[3,17]}
```

@remarks
- Parsed output is always `TheDate`.
- Use `DP.coercer(DP.date())` when you want coercion enabled by default.

@see https://utils.duplojs.dev/en/v1/api/dataParser/date

@namespace DP
