Transforms each element of an array while preserving tuple length in types.

**Supported call styles:**
- Classic: `mapTuple(input, theFunction)` -> returns a new array
- Curried: `mapTuple(theFunction)` -> returns a function waiting for the input

The mapping function receives `(element, { index, self })`, where `index` is the element position and `self` is the original array.
The input array is not mutated.

```ts
{@include array/mapTuple/example.ts[3,16]}
```

@remarks
- For tuple inputs (`as const`), the output keeps the same tuple length.
- For non-tuple arrays, the output type is `GenericOutput[]`.

@see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For generic array mapping
@see https://utils.duplojs.dev/en/v1/api/array/mapTuple

@namespace A
