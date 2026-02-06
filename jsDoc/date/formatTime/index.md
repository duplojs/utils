Formats a duration value with custom time tokens.

**Supported call styles:**
- Classic: `formatTime(input, formatString)` → `string`
- Curried: `formatTime(formatString)` → `(input) => string`

`input` accepts `TheTime` or `SerializedTheTime`.

```ts
{@include date/formatTime/example.ts[3,14]}
```

@remarks
- Supported tokens: `WW`, `DD`, `HH`, `mm`, `ss`, `SSS`.

@see https://utils.duplojs.dev/en/v1/api/date/formatTime

@namespace D
