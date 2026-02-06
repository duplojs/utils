Formats a date with custom tokens in a target timezone.

**Supported call styles:**
- Classic: `format(input, formatString, timezone)` → `string`
- Curried: `format(formatString, timezone)` → `(input) => string`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/format/example.ts[3,12]}
```

@remarks
- Supported tokens: `YYYY`, `YY`, `MM`, `DD`, `HH`, `mm`, `ss`, `SSS`, `ZZ`.

@see https://utils.duplojs.dev/en/v1/api/date/format

@namespace D
