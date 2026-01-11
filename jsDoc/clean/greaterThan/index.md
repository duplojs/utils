Checks whether a Number is strictly greater than a threshold.

**Supported call styles:**
- Classic: `greaterThan(value, threshold)` -> returns a boolean
- Curried: `greaterThan(threshold)` -> returns a function waiting for the value

Use it to compare wrapped numbers while keeping values in the Clean domain.

```ts
{@include clean/greaterThan/example.ts[3,10]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/greaterThan

@namespace C
