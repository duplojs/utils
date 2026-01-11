Checks whether a String length is less than a given value.

**Supported call styles:**
- Classic: `lengthLessThan(primitive, length)` -> returns a boolean
- Curried: `lengthLessThan(length)` -> returns a function waiting for the primitive

Use it to validate maximum sizes with wrapped Number values.

```ts
{@include clean/lengthLessThan/example.ts[3,10]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/lengthLessThan

@namespace C
