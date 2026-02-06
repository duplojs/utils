Checks whether a date is inside an exclusive range.

**Supported call styles:**
- Classic: `betweenThan(input, greater, less)` → `boolean`
- Curried: `betweenThan(greater, less)` → `(input) => boolean`

All parameters accept `TheDate` or `SerializedTheDate`.

```ts
{@include date/betweenThan/example.ts[3,13]}
```

@remarks
- Exclusive bounds: `input > greater && input < less`.

@see https://utils.duplojs.dev/en/v1/api/date/betweenThan

@namespace D
