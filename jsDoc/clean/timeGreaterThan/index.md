Checks whether a Time is greater than a threshold.

**Supported call styles:**
- Classic: `timeGreaterThan(time, threshold)` -> returns a boolean
- Curried: `timeGreaterThan(threshold)` -> returns a function waiting for the time

Use it to compare wrapped durations or raw TheTime values.

```ts
{@include clean/timeGreaterThan/example.ts[3,9]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeGreaterThan

@namespace C
