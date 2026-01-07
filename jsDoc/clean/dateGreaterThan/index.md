Checks whether a Date is after a threshold.

**Supported call styles:**
- Classic: `dateGreaterThan(date, threshold)` -> returns a boolean
- Curried: `dateGreaterThan(threshold)` -> returns a function waiting for the date

Use it to compare wrapped dates or raw TheDate values.

```ts
{@include clean/dateGreaterThan/example.ts[3,9]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateGreaterThan

@namespace C
