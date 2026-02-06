Subtracts a number of seconds from a date.

**Supported call styles:**
- Classic: `subtractSeconds(input, second)` → `TheDate`
- Curried: `subtractSeconds(second)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/subtractSeconds/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/subtractSeconds

@namespace D
