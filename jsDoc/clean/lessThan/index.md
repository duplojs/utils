Checks whether a Number is strictly less than a threshold.

**Supported call styles:**
- Classic: `lessThan(value, threshold)` -> returns a boolean
- Curried: `lessThan(threshold)` -> returns a function waiting for the value

Use it to compare wrapped numbers while keeping values in the Clean domain.

```ts
{@include clean/lessThan/example.ts[3,10]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/lessThan

@namespace C
