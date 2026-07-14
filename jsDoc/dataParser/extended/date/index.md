Creates an extended parser for `TheDate`.

Signature: `DPE.date(definition?)` → `DataParserDateExtended`

This parser extends classic `DP.date(...)` behavior and keeps the extended chainable base API (`nullable`, `optional`, `pipe`, `transform`, etc.).

```ts
{@include dataParser/extended/date/example.ts[3,16]}
```

@remarks
- Parsed output is always `TheDate`.
- `DPE.date().coerce()` enables coercion after date-specific configuration.

@see https://utils.duplojs.dev/en/v1/api/dataParser/date

@namespace DPE
