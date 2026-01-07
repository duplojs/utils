Checks whether a Time is less than a threshold.

**Supported call styles:**
- Classic: `timeLessThan(time, threshold)` -> returns a boolean
- Curried: `timeLessThan(threshold)` -> returns a function waiting for the time

Use it to compare wrapped durations or raw TheTime values.

```ts
{@include clean/timeLessThan/example.ts[3,9]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeLessThan

@namespace C
