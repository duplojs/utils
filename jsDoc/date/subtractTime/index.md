Subtracts a normalized duration (`TheTime` or `SerializedTheTime`) from a date.

**Supported call styles:**
- Classic: `subtractTime(input, time)` → `TheDate | TheTime`
- Curried: `subtractTime(time)` → `(input) => TheDate | TheTime`

If `input` is `TheDate | SerializedTheDate`, the result is `TheDate`.
The operator also supports `TheTime | SerializedTheTime` as input and returns `TheTime`.

```ts
{@include date/subtractTime/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/date/subtractTime

@namespace D
