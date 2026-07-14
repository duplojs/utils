Creates an extended parser for `TheTime` with chainable time-specific helpers.

Signature: `DPE.time(definition?)` → `DataParserTimeExtended`

This parser extends the classic time parser behavior and adds fluent methods like `.min(...)` and `.max(...)`.

```ts
{@include dataParser/extended/time/example.ts[3,21]}
```

@remarks
- `.min(...)` and `.max(...)` expect `TheTime` values.
- `DPE.time().coerce()` enables the same coercion flow after time-specific configuration.

@see https://utils.duplojs.dev/en/v1/api/dataParser/time

@namespace DPE
