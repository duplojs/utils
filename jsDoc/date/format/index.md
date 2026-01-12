Formats a date.

**Supported call styles:**
- Classic: `format(input, formatString, timezone)` → returns a value
- Curried: `format(formatString, timezone)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/format/example.ts[3,11]}
```

@remarks
- Supports tokens: YYYY, YY, MM, DD, HH, mm, ss, SSS, ZZ.

@see https://utils.duplojs.dev/en/v1/api/date/format

@namespace D
