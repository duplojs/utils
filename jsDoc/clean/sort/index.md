Sorts arrays of wrapped primitives (`String`, `Number`, `Date`, `Time`).

**Supported call styles:**
- Classic: `sort(input, type)` → wrapped array
- Curried: `sort(type)` → function waiting for the input

```ts
{@include clean/sort/example.ts[3,20]}
```

@remarks
- Supports mixed wrapped/raw values in the same primitive family.

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/sort

@namespace C
