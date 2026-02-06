Adds a normalized duration (`TheTime` or `SerializedTheTime`) to a date.

**Supported call styles:**
- Classic: `addTime(input, time)` → `TheDate | TheTime`
- Curried: `addTime(time)` → `(input) => TheDate | TheTime`

If `input` is `TheDate | SerializedTheDate`, the result is `TheDate`.
The operator also supports `TheTime | SerializedTheTime` as input and returns `TheTime`.

```ts
{@include date/addTime/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/date/addTime

@namespace D
