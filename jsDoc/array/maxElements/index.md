Checks whether an array has at most a given length.

**Supported call styles:**
- Classic: `maxElements(array, maxLength)` → returns a boolean
- Curried: `maxElements(maxLength)` → returns a function waiting for the array

The input array is not mutated.

```ts
{@include array/maxElements/example.ts[3,17]}
```

@see [`A.minElements`](https://utils.duplojs.dev/en/v1/api/array/minElements) For minimum length checks
@see https://utils.duplojs.dev/en/v1/api/array/maxElements

@namespace A
