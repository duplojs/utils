Subtracts a number of milliseconds from a date.

**Supported call styles:**
- Classic: `subtractMilliseconds(input, millisecond)` → `TheDate`
- Curried: `subtractMilliseconds(millisecond)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/subtractMilliseconds/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/subtractMilliseconds

@namespace D
