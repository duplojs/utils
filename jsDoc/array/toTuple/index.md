Transforms a value into a tuple using a shape of functions.

**Supported call styles:**
- Classic: `toTuple(input, shape)` → returns a tuple of results
- Curried: `toTuple(shape)` → returns a function waiting for the input

Each function in the shape receives the same input.
The input value is not mutated.

```ts
{@include array/toTuple/example.ts[3,16]}
```

@see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For mapping arrays
@see https://utils.duplojs.dev/en/v1/api/array/toTuple

@namespace A
