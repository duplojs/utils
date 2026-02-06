Checks whether a date is inside an inclusive range.

**Supported call styles:**
- Classic: `between(input, greater, less)` → `boolean`
- Curried: `between(greater, less)` → `(input) => boolean`

All parameters accept `TheDate` or `SerializedTheDate`.

```ts
{@include date/between/example.ts[3,13]}
```

@remarks
- Inclusive bounds: `input >= greater && input <= less`.

@see https://utils.duplojs.dev/en/v1/api/date/between

@namespace D
