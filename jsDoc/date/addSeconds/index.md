Adds a number of seconds to a date.

**Supported call styles:**
- Classic: `addSeconds(input, second)` → `TheDate`
- Curried: `addSeconds(second)` → `(input) => TheDate`

`input` accepts `TheDate` or `SerializedTheDate`.

```ts
{@include date/addSeconds/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/date/addSeconds

@namespace D
