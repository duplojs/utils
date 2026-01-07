Maps each element and flattens the result by one level.

**Supported call styles:**
- Classic: `flatMap(array, theFunction)` → returns a new array
- Curried: `flatMap(theFunction)` → returns a function waiting for the array

The mapping function receives `(element, { index, self })`.
The input array is not mutated.

```ts
{@include array/flatMap/example.ts[3,17]}
```

@remarks
- Uses the same semantics as [`Array.prototype.flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

@see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For mapping without flattening
@see https://utils.duplojs.dev/en/v1/api/array/flatMap

@namespace A
