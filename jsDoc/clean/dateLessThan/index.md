Checks whether a Date is before a threshold.

**Supported call styles:**
- Classic: `dateLessThan(date, threshold)` -> returns a boolean
- Curried: `dateLessThan(threshold)` -> returns a function waiting for the date

Use it to compare wrapped dates or raw TheDate values.

```ts
{@include clean/dateLessThan/example.ts[3,9]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateLessThan

@namespace C
