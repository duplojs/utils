Checks whether a duration is inside an exclusive range.

**Supported call styles:**
- Classic: `betweenThanTime(input, greater, less)` → `boolean`
- Curried: `betweenThanTime(greater, less)` → `(input) => boolean`

All parameters accept `TheTime` or `SerializedTheTime`.

```ts
{@include date/betweenThanTime/example.ts[3,13]}
```

@remarks
- Exclusive bounds: `input > greater && input < less`.

@see https://utils.duplojs.dev/en/v1/api/date/betweenThanTime

@namespace D
