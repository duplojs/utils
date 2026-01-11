Builds a new array by selecting or skipping elements.

**Supported call styles:**
- Classic: `select(array, theFunction)` → returns a new array
- Curried: `select(theFunction)` → returns a function waiting for the array

The function receives `{ element, index, self, select, skip }`.
Use `select(value)` to keep a value or `skip()` to ignore it.
The input array is not mutated.

```ts
{@include array/select/example.ts[3,17]}
```

@remarks
- This is similar to a combined `map` + `filter`

@see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For mapping elements
@see [`A.filter`](https://utils.duplojs.dev/en/v1/api/array/filter) For filtering elements
@see https://utils.duplojs.dev/en/v1/api/array/select

@namespace A
