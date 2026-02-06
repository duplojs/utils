Checks whether a duration is inside an inclusive range.

**Supported call styles:**
- Classic: `betweenTime(input, greater, less)` → `boolean`
- Curried: `betweenTime(greater, less)` → `(input) => boolean`

All parameters accept `TheTime` or `SerializedTheTime`.

```ts
{@include date/betweenTime/example.ts[3,13]}
```

@remarks
- Inclusive bounds: `input >= greater && input <= less`.

@see https://utils.duplojs.dev/en/v1/api/date/betweenTime

@namespace D
