Checks whether a String length is greater than a given value.

**Supported call styles:**
- Classic: `lengthGreaterThan(primitive, length)` -> returns a boolean
- Curried: `lengthGreaterThan(length)` -> returns a function waiting for the primitive

Use it to validate minimum sizes with wrapped Number values.

```ts
{@include clean/lengthGreaterThan/example.ts[3,10]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/lengthGreaterThan

@namespace C
