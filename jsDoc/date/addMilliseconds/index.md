Adds a number of milliseconds to a date.

**Supported call styles:**
- Classic: `addMilliseconds(input, millisecond)` → `TheDate`
- Curried: `addMilliseconds(millisecond)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/addMilliseconds/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/addMilliseconds

@namespace D
