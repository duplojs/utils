Converts a time value to a numeric value in the requested time unit.

**Supported call styles:**
- Classic: `computeTime(input, unit)` → `number`
- Curried: `computeTime(unit)` → `(input) => number`

`input` accepts `TheTime` or `SerializedTheTime`.
`unit` accepts `week | day | hour | minute | second | millisecond`.

```ts
{@include date/computeTime/example.ts[3,19]}
```

@remarks
- `computeTime` keeps the sign of the input value.

@see https://utils.duplojs.dev/en/v1/api/date/computeTime

@namespace D
