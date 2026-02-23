Returns the time difference between two dates as `TheTime`.

**Supported call styles:**
- Classic: `getDifference(input, reference)` → `TheTime`
- Curried: `getDifference(reference)` → `(input) => TheTime`

The difference is computed as `input - reference` in milliseconds and returned as `TheTime`.

```ts
{@include date/getDifference/example.ts[3,20]}
```

@remarks
- `TheTime` supports negative values, so `getDifference` preserves the sign of `input - reference`.
- Input accepts `TheDate` and `SerializedTheDate`.

@see https://utils.duplojs.dev/en/v1/api/date/getDifference

@namespace D
