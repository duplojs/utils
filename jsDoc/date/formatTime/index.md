Formats a time.

**Supported call styles:**
- Classic: `formatTime(input, formatString)` → returns a value
- Curried: `formatTime(formatString)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/formatTime/example.ts[3,14]}
```

@remarks
- Supports tokens: WW, DD, HH, mm, ss, SSS.

@see https://utils.duplojs.dev/en/v1/api/date/formatTime

@namespace D
