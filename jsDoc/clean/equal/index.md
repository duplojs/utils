Compares two wrapped primitives (or a primitive and a raw value) with a type guard.

**Supported call styles:**
- Classic: `equal(input, value)` -> returns a boolean
- Curried: `equal(value)` -> returns a function waiting for the input
- Classic predicate: `equal(input, value)` -> narrows the primitive type
- Curried predicate: `equal(value)` -> narrows the primitive type

Use it to match business values while keeping type safety during checks and filtering.

```ts
{@include clean/equal/example.ts[3,14]}
```

@remarks
- Predicate overloads narrow the output type when the comparison succeeds.

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/equal

@namespace C
